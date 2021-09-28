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
  LOAD_USER_DATA = 'LOAD_USER_DATA'
}

interface LoginUserAction {
  type: UserActionTypes.LOGIN;
}

interface SetUserDataAction {
  type: UserActionTypes.SET_USER_DATA;
  payload: IUser | null;
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

export type UserAction =
  SetUserDataAction
  | LoginUserAction
  | LoadUserDataAction
  | LoginUserErrorAction
  | RegisterUserAction
  | RegisterUserErrorAction;


