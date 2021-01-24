import {Leave} from '../../../services/api/classes/Leave';

export interface ILeave {
  getLeave(startDate: string, endDate: string): Promise<Leave[]>;
}
