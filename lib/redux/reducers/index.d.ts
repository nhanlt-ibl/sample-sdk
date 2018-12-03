import { IActionOut } from '../actions/index.d';
import { IReducer } from './index.d';
export declare const authen: (state: IReducer | undefined, action: IActionOut) => {
    isFetching: boolean;
    isFetched: boolean;
    error: any;
    data: any;
    isAuthen: boolean;
};
