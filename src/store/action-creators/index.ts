import { loginUserAction } from 'store/action-creators/user-actions/login-user.action'
import { registerUserAction } from 'store/action-creators/user-actions/register-user.action'
import { loadUserAction } from 'store/action-creators/user-actions/load-user.action'
import { deleteSubscriptionAction } from 'store/action-creators/subscriptions-actions/delete-subscription.action';
import { addSubscriptionAction } from 'store/action-creators/subscriptions-actions/add-subscription.action';
import { updateUserProfitAction } from 'store/action-creators/user-actions/update-user-profit.action';
import { loadSubscriptionsAction } from 'store/action-creators/subscriptions-actions/load-subscriptions.action';

export default {
  loginUserAction,
  registerUserAction,
  loadUserAction,
  deleteSubscriptionAction,
  addSubscriptionAction,
  updateUserProfitAction,
  loadSubscriptionsAction
}
