import {
  IUserState,
  UserAction,
  UserActionTypes,
} from 'store/actions/user-actions'

const initialState: IUserState = {
  user: null,
  loading: false,
  error: null
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { user: null, loading: true, error: null };
    case UserActionTypes.SET_USER_DATA:
      return { user: action.payload, loading: false, error: null };
    case UserActionTypes.LOGIN_ERROR:
      return { user: null, loading: false, error: action.payload };
    case UserActionTypes.REGISTER:
      return { user: null, loading: true, error: null };
    case UserActionTypes.REGISTER_ERROR:
      return { user: null, loading: false, error: action.payload };
    case UserActionTypes.LOAD_USER_DATA:
      return { user: null, loading: true, error: null };
    default: return state;
  }
}
