import { ISubscription } from 'interfaces/subscription.interface'

export interface ISubscriptionsState {
  subscriptions: ISubscription[];
  loading: boolean;
  error: string | null;
}

export enum SubscriptionsActionTypes {
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  LOAD_DATA_ERROR = 'LOAD_DATA_ERROR',
  ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION',
  DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION',
  EDIT_SUBSCRIPTION = 'EDIT_SUBSCRIPTION'
}

interface LoadDataAction {
  type: SubscriptionsActionTypes.LOAD_DATA;
}

interface LoadDataSuccessAction {
  type: SubscriptionsActionTypes.LOAD_DATA_SUCCESS;
  payload: ISubscription[];
}

interface LoadDataErrorAction {
  type: SubscriptionsActionTypes.LOAD_DATA_ERROR;
  payload: string;
}

interface AddSubscriptionAction {
  type: SubscriptionsActionTypes.ADD_SUBSCRIPTION;
  payload: ISubscription;
}

interface DeleteSubscriptionAction {
  type: SubscriptionsActionTypes.DELETE_SUBSCRIPTION;
  payload: string;
}

interface EditSubscriptionAction {
  type: SubscriptionsActionTypes.EDIT_SUBSCRIPTION;
  payload: ISubscription;
}

export type SubscriptionsAction =
  LoadDataAction
  | LoadDataSuccessAction
  | LoadDataErrorAction
  | AddSubscriptionAction
  | DeleteSubscriptionAction
  | EditSubscriptionAction;

