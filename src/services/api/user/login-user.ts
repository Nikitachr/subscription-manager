import { ILogin } from 'interfaces/login.interface';
import { IUser } from 'interfaces/user.interface';
import getUser from 'services/api/user/get-user';
import { db } from 'services/firebaseSetup';

export default async function loginUser({ email, password }: ILogin): Promise<IUser> {
  try {
    const { uid } = await getUser(email, password)
    const userData = await db.collection('users').doc(uid).get()
    if (!userData) {
      throw 'Invalid email or password'
    }
    return userData.data() as unknown as IUser
  } catch (e) {
    throw 'Invalid email or password'
  }
}
