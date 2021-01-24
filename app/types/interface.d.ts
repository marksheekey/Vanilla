export type Maybe<T> = T | undefined;

export type DeepReadonly<T> = T extends Array<infer R>
  ? DeepReadonlyArray<R>
  : T extends Function
    ? T
    : T extends object
      ? DeepReadonlyObject<T>
      : T;

export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {
}

export type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export interface LoginRequest {
  emailAddress: string;
  password: string;
}

export type AuthTokenResponse =
  | {
  api_key: string;
  accounts: Account[];
}
  | {
  two_factor_session: string;
};

export interface Account {
  id: number;
  name: string;
  partner?: any;
}
