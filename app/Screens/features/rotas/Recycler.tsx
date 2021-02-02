import React, {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {addDataToEnd, createData, RotaListUI} from './createData'
import {ScrollEvent} from 'recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollView'

export const RecycleTestComponent: React.FunctionComponent<{ data: RotaListUI[], getMore: (() => void), getPrevious: (() => void) }> = ({ data, getMore, getPrevious}) => {
  console.log("recycler")
  let { width } = Dimensions.get('window');
  const layoutProvider = new LayoutProvider(
    index => {
      return 0;
    },
    (type, dim) => {
      dim.width = width;
      dim.height = 50;
    }
  );
  let dataProvider = new DataProvider((r1: RotaListUI, r2: RotaListUI) => {
    return r1.key !== r2.key;
  }).cloneWithRows(data)

  const rowRenderer = (type: number, data: RotaListUI) => {
    return (<CellContainer cell={data} />)
  }

  const scrolly = (rawEvent: ScrollEvent, offsetX: number, offsetY: number) => {
    if(offsetY === 0){
      getPrevious()
    }
  }


  return (<RecyclerListView onEndReached={getMore} layoutProvider={layoutProvider} dataProvider={dataProvider}
                            rowRenderer={rowRenderer} onScroll={scrolly} />)
}

const CellContainer: React.FC<{ cell: RotaListUI }> = ({ cell }) => {
  return (<View><Text>{cell.text}</Text></View>)
}
const styles = {
  container: {
    margin: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  }
};
