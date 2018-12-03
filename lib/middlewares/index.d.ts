import { Store, Dispatch, AnyAction } from 'redux';
declare const _default: (store: Store<any, AnyAction>) => (next: Dispatch<AnyAction>) => (action: AnyAction) => void;
export default _default;
