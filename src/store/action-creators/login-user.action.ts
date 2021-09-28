import { ILogin } from 'interfaces/login.interface'
import { Dispatch } from 'redux'
import { UserAction, UserActionTypes } from 'store/actions/user-actions'
import { loginUser } from 'services/api'
import { history } from 'App'
import alertsService from 'services/alerts.service'

export const loginUserAction = (value: ILogin) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.LOGIN });
      const response = await loginUser(value);
      localStorage.setItem('uid', response.uid);
      dispatch({ type: UserActionTypes.SET_USER_DATA, payload: response })
      history.push('/main')
    } catch (e)  {
      dispatch({ type: UserActionTypes.LOGIN_ERROR, payload: e as string })
      alertsService.onError(e as string, 5000)
    }
  }
}
