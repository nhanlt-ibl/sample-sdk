import {IActionOut} from '../actions/index.d';
import {IReducer} from './index.d';
import * as Types from '../constants/index';

const initState: IReducer = {
  isFetching: false,
  isFetched: false,
  isAuthen: false,
  data: {},
  error: {},
};
export const authen = (state = initState, action: IActionOut) => {
  switch (action.type) {
    case Types.REQUEST_LOGIN: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case Types.LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        isAuthen: true,
        data: action.payload,
      };
    }
    case Types.LOGIN_FAIL: {
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        error: action.payload,
      };
    }
    case Types.AUTHENTICATE_FAIL: {
      return {
        ...initState,
      };
    }
    case Types.AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        isAuthen: true,
      };
    }
  }
  return state;
};
