import {Store, Dispatch, AnyAction} from 'redux';
import {AxiosError, AxiosResponse} from 'axios';

import {postLogin} from './configs';
import * as Types from '../constants/index';

export default (store: Store) => (next: Dispatch) => (action: AnyAction) => {
  if (action.type === Types.REQUEST_LOGIN) {
    next(action);
    const {product, data} = action.payload;
    postLogin(action.payload)
      .then((res: AxiosResponse) => {
        return store.dispatch({type: Types.LOGIN_SUCCESS});
      })
      .catch((err: AxiosError) => {
        return store.dispatch({type: Types.LOGIN_FAIL});
      });
  }
};
