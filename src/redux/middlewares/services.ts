import * as f from 'string-template';

import {IPostLogin} from './index.d';
import {request, AUTHEN_URL} from './configs';

export const postLogin = ({product = '', data}: IPostLogin): Promise<any> =>
  request.post(
    f(AUTHEN_URL, {
      product: product,
    }),
    data,
  );
