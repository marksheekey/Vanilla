import {Leave} from '../../../services/api/classes/Leave';
import {ShiftStartTime} from '../../../services/api/classes/ShiftStartTime';

export interface IRotas {
  getLeave(startDate: string, endDate: string): Promise<Leave[]>;

  getShiftStartTimes(
    startDate: number,
    endDate: number
  ): Promise<ShiftStartTime[]>;
}
