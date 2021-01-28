import JodaClockService from '../../../services/clock/JodaClockService'
import {LocalDate} from 'js-joda'

export function createData() {
  let today = LocalDate.now()
  let days: RotaListUI[] = []
  for (let x = 0; x < 60; x++) {
    let tt = Math.floor(Math.random() * 4)
    let dayText = JodaClockService.getInstance().toAPIFormat(today)
    if(tt == 0){
      dayText = dayText+" Empty Day"
    }
    if(tt == 1){
      dayText = dayText+" Leave"
    }
    if(tt == 2){
      dayText = dayText+" Shift"
    }
    if(tt == 3){
      dayText = dayText+" Availability"
    }
    let day: RotaListUI = {
      type: tt,
      key: "key"+x,
      text: dayText
    }
    days.push(day)
    today = today.plusDays(1)
  }
  return days
}

export interface RotaListUI{
  type: RotaDayTypes,
  key: string,
  text: string
}

export enum RotaDayTypes {EMPTY, LEAVE, SHIFT, AVAILABILITY}
