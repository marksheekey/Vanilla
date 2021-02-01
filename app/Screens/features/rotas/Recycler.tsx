/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
import React, {Component, ReactChildren} from 'react';
import { View, Text, Dimensions } from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import {addDataToEnd, createData, RotaListUI} from './createData'
import {createDispatchHook, useSelector} from 'react-redux'

const data = createData()

const getMore = () => {
  console.log("get more")
  let last = data[data.length-1]
  let more = addDataToEnd(last.date)
  data.push(...more)

  this.state = {
    dataProvider: dataProvider.cloneWithRows(data)
  };
}

export default class RecycleTestComponent extends React.Component {
  _layoutProvider: LayoutProvider
  constructor(args: any) {
    super(args);

    let { width } = Dimensions.get("window");

    //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
    //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
    let dataProvider = new DataProvider((r1: RotaListUI, r2: RotaListUI) => {
      return r1.key !== r2.key;
    });

    this._layoutProvider = new LayoutProvider(
      index => {
        return 0;
      },
      (type, dim) => {
        dim.width = width;
        dim.height = 140;
      }
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    //Since component should always render once data has changed, make data provider part of the state
    this.state = {
      dataProvider: dataProvider.cloneWithRows(data)
    };
  }

  //Given type and data return the view component
  _rowRenderer(type: number, data:RotaListUI) {
    //You can return any view here, CellContainer has no special significance
        return (
          <CellContainer cell={data} />);
  }
  render() {
    return <RecyclerListView onEndReached={getMore} layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />;
  }
}

const CellContainer: React.FC<{ cell: RotaListUI }> = ({ cell }) => {
  return (<View ><Text>{cell.text}</Text></View>)
}
const styles = {
  container: {
    margin:2,
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white"
  },
};
