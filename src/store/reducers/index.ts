import { userReducer } from 'store/reducers/user-reducer'
import { combineReducers } from 'redux'
import { subscriptionsReducer } from 'store/reducers/subscriptios-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  subscriptions: subscriptionsReducer
});

export type RootState = ReturnType<typeof rootReducer>

