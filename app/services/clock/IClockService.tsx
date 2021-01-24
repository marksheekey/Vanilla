export interface IClockService {
  apiDateToPrettyDate(apiDate: string): string;

  addMonthToAPIDate(date: string): string;

  subMonthFromAPIDate(date: string): string;

  finalAPIDateOfMonth(date: string): string;

  apiDateToMillis(date: string): number;

  now(): number;
}
