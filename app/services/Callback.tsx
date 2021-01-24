export interface Callback {
  onError: (error: string) => void;
  onLoading: (loading: boolean) => void;
  onResult: (data: any) => void;
}
