import {
  ISubscriptionsState, SubscriptionsAction,
  SubscriptionsActionTypes,
} from 'store/actions/subscriptions-actions'
import { v4 as uuidv4 } from 'uuid'

const initialState: ISubscriptionsState = {
  subscriptions: [],
  loading: false,
  error: null,
}

export const subscriptionsReducer = (state: ISubscriptionsState = initialState, action: SubscriptionsAction) => {
  switch (action.type) {
    case SubscriptionsActionTypes.LOAD_DATA:
      return { ...state, loading: true, error: false }
    case SubscriptionsActionTypes.LOAD_DATA_SUCCESS:
      return { subscriptions: action.payload, loading: false, error: false }
    case SubscriptionsActionTypes.LOAD_DATA_ERROR:
      return { ...state, loading: false, error: action.payload }
    case SubscriptionsActionTypes.ADD_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: [...state.subscriptions, {
          ...action.payload,
          uid: uuidv4(),
        }],
      }
    default:
      return state
  }
}
