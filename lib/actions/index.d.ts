import * as I from './index.d';
export declare const actionRequestLogin: (payload: I.IPayload) => I.IActionRequest;
export declare const actionLogicSuccess: (payload: I.ILoginSuccess) => I.IActionOut;
export declare const actionLoginFail: (payload: I.ILoginFail) => I.IActionOut;
export declare const actionAuthenFail: () => I.IActionOut;
export declare const actionAuthenSuccess: () => I.IActionOut;
