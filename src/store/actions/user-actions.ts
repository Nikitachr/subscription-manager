import { IUser } from 'interfaces/user.interface'

export interface IUserState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

export enum UserActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_ERROR = 'LOGIN_ERROR',
  REGISTER = 'REGISTER',
  REGISTER_ERROR = 'REGISTER_ERROR',
  SET_USER_DATA = 'SET_USER_DATA',
  LOAD_USER_DATA = 'LOAD_USER_DATA',
  SET_USER_PROFIT = 'SET_USER_PROFIT',
  LOGOUT = 'LOGOUT'
}

interface LoginUserAction {
  type: UserActionTypes.LOGIN;
}

interface SetUserDataAction {
  type: UserActionTypes.SET_USER_DATA;
  payload: IUser | null;
}

interface SetUserProfitAction {
  type: UserActionTypes.SET_USER_PROFIT;
  payload: number;
}

interface LoadUserDataAction {
  type: UserActionTypes.LOAD_USER_DATA;
}

interface LoginUserErrorAction {
  type: UserActionTypes.LOGIN_ERROR;
  payload: string;
}

interface RegisterUserAction {
  type: UserActionTypes.REGISTER;
}

interface RegisterUserErrorAction {
  type: UserActionTypes.REGISTER_ERROR;
  payload: string;
}

interface LogoutAction {
  type: UserActionTypes.LOGOUT;
}

export type UserAction =
  SetUserDataAction
  | SetUserProfitAction
  | LoginUserAction
  | LoadUserDataAction
  | LoginUserErrorAction
  | LogoutAction
  | RegisterUserAction
  | RegisterUserErrorAction;


