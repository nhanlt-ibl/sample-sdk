export interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
  isAuthen: boolean;
  error: {
    code?: string | number;
    reason?: string;
    data?: any;
  };
}
