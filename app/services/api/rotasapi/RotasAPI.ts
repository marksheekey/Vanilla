import {IRotas} from '../../../Screens/features/rotas/IRotas';
import {Leave} from '../classes/Leave';
import {ShiftStartTime} from '../classes/ShiftStartTime';
import AxiosClient from '../AxiosClient';

export default class RotasAPI extends AxiosClient implements IRotas {
  public getLeave(startDate: string, endDate: string): Promise<Leave[]> {
    return this.instance.get<Leave[], Leave[]>(
      'leave?expand[]=type&include_denied=false',
      {
        params: {
          start: startDate,
          end: endDate
        }
      }
    );
  }

  public getShiftStartTimes(
    startDate: number,
    endDate: number
  ): Promise<ShiftStartTime[]> {
    return this.instance.get<ShiftStartTime[], ShiftStartTime[]>('shifts', {
      params: {
        start: startDate,
        end: endDate
      }
    });
  }
}
