import {Callback} from './Callback';

export function setCallBack(error: Function, loading: Function, result: Function): Callback {
  return {
    onError(errorCallback: string): void {
      error(errorCallback);
    },
    onLoading(loadingCallback: boolean): void {
      loading(loadingCallback);
    },
    onResult(data: any): void {
      result(data);
    }
  };
}
