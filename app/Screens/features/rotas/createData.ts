import JodaClockService from '../../../services/clock/JodaClockService'
import {LocalDate} from 'js-joda'

const daysToGet = 30

export function createData() {
  let today = LocalDate.now()
  return generateData(today)
}

export function addDataToEnd(date: string){
  let day = LocalDate.parse(date)
  return generateData(day)
}

export function addDataToStart(date: string){
  let day = LocalDate.parse(date)
  day = day.minusDays(daysToGet)
  return generateData(day)
}

export interface RotaListUI{
  type: RotaDayTypes,
  key: string,
  text: string,
  date: string
}

function generateData(from: LocalDate){
  console.log("generate from:", JodaClockService.getInstance().toAPIFormat(from))
  let days: RotaListUI[] = []
  for (let x = 0; x < daysToGet; x++) {
    let tt = Math.floor(Math.random() * 4)
    let date = JodaClockService.getInstance().toAPIFormat(from)
    let dayText = date
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
      text: dayText,
      date: date
    }
    days.push(day)
    from = from.plusDays(1)
  }
  return days
}

export enum RotaDayTypes {EMPTY, LEAVE, SHIFT, AVAILABILITY}
