import * as I from './index.d';
import * as Types from '../constants/index';

type IActionOut = I.IActionOut;
type IActionRequest = I.IActionRequest;
export const actionRequestLogin = (payload: I.IPayload): IActionRequest => ({
  type: Types.REQUEST_LOGIN,
  payload,
});
export const actionLogicSuccess = (payload: I.ILoginSuccess): IActionOut => ({
  type: Types.LOGIN_SUCCESS,
  payload,
});
export const actionLoginFail = (payload: I.ILoginFail): IActionOut => ({
  type: Types.LOGIN_FAIL,
  payload,
});
export const actionAuthenFail = (): IActionOut => ({
  type: Types.AUTHENTICATE_FAIL,
});
export const actionAuthenSuccess = (): IActionOut => ({
  type: Types.AUTHENTICATE_SUCCESS,
});
