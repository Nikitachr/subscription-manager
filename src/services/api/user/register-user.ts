import { IRegister } from 'interfaces/register.interface';
import { IUser } from 'interfaces/user.interface';
import createUser from 'services/api/user/create-user';
import { db } from 'services/firebaseSetup';

export default async function registerUser({ username, password, email }: IRegister): Promise<IUser> {
  try {
    const { uid } = await createUser(password, email)
    await db.collection('users').doc(uid).set({
      uid: uid,
      username: username,
      profit: 0
    })
    await db.collection('subscriptions').doc(uid).set([])
    return { username, uid, profit: 0 }
  } catch (e) {
    throw 'User already exist'
  }
}
