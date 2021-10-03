import { loginUserAction } from 'store/action-creators/login-user.action'
import { registerUserAction } from 'store/action-creators/register-user.action'
import { loadUserAction } from 'store/action-creators/load-user.action'
import { deleteSubscriptionAction } from 'store/action-creators/delete-subscription.action';
import { addSubscriptionAction } from 'store/action-creators/add-subscription.action';
import { updateUserProfitAction } from 'store/action-creators/update-user-profit.action';

export default {
  loginUserAction,
  registerUserAction,
  loadUserAction,
  deleteSubscriptionAction,
  addSubscriptionAction,
  updateUserProfitAction
}
