export interface IActionRequest {
  type: string;
  payload?: IPayload;
}
export interface IActionOut {
  type: string;
  payload?: any;
}

export interface IPayload {
  product: string;
  data: any;
}

export interface IRequestLogin {
  phone: string;
  password: string;
}
export interface ILoginSuccess {
  id: string;
  type: string;
  name: string;
  phone: string;
  mobile_pay_id: string;
  email: string;
  photo: {
    url: 'string';
    thumb: {
      url: 'string';
    };
  };
  age?: number;
  birthdate?: string;
  country: string;
  postal: string;
  city: string;
  lang: string;
  platform: string;
  market: string;
  pgw_name?: string;
  sign?: string;
}
export interface ILoginFail {
  code: string;
  reason: string;
  data: any;
}
