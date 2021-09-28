import { userReducer } from 'store/reducers/user-reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>

