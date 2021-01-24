import {Leave} from '../classes/Leave';
import AxiosClient from '../AxiosClient';
import {ILeave} from '../../../Screens/features/leave/ILeave';

export default class LeaveAPI extends AxiosClient implements ILeave {
  private static instance: LeaveAPI;

  private constructor() {
    super();
  }

  static getInstance(): LeaveAPI {
    if (!LeaveAPI.instance) {
      LeaveAPI.instance = new LeaveAPI();
    }

    return LeaveAPI.instance;
  }

  public getLeave(startDate: string, endDate: string): Promise<Leave[]> {
    return this.instance.get<Leave[], Leave[]>(
      'leave?expand[]=type&include_denied=false',
      { params: { start: startDate, end: endDate } }
    );
  }
}
