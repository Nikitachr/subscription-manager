import {
  ISubscriptionsState, SubscriptionsAction,
  SubscriptionsActionTypes,
} from 'store/actions/subscriptions-actions';

const initialState: ISubscriptionsState = {
  subscriptions: [],
  loading: false,
  error: null,
};

export const subscriptionsReducer = (state: ISubscriptionsState = initialState, action: SubscriptionsAction): ISubscriptionsState => {
  switch (action.type) {
    case SubscriptionsActionTypes.LOAD_DATA:
      return { ...state, loading: true, error: null };
    case SubscriptionsActionTypes.LOAD_DATA_SUCCESS:
      return { subscriptions: action.payload, loading: false, error: null };
    case SubscriptionsActionTypes.LOAD_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SubscriptionsActionTypes.ADD_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload]
      };
    case SubscriptionsActionTypes.DELETE_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: state.subscriptions.filter(el => el.uid !== action.payload)
      };
    case SubscriptionsActionTypes.EDIT_SUBSCRIPTION:
      const newSubscriptions = [...state.subscriptions];
      const index = newSubscriptions.findIndex(el => el.uid === action.payload.uid);
      newSubscriptions[index] = action.payload;
      return {
        ...state,
        subscriptions: newSubscriptions
      };
    default:
      return state;
  }
};
