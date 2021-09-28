import { IRegister } from 'interfaces/register.interface'
import { auth, db } from 'services/firebaseSetup'
import firebase from 'firebase/compat'
import { IUser } from 'interfaces/user.interface'
import { ILogin } from 'interfaces/login.interface'

async function createUser(password: string, email: string): Promise<firebase.User> {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password)
    if (!response.user) {
      throw 'invalid response'
    }
    return response.user
  } catch (e) {
    throw e
  }
}

async function getUser(email: string, password: string): Promise<firebase.User> {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password)
    if (!response.user) {
      throw 'User not found'
    }
    return response.user
  } catch (e) {
    throw e
  }
}

export async function registerUser({ username, password, email }: IRegister): Promise<IUser> {
  try {
    const { uid } = await createUser(password, email)
    await db.collection('users').doc(uid).set({
      uid: uid,
      username: username,
    })
    await db.collection('subscriptions').doc(uid).set([])
    return { username, uid }
  } catch (e) {
    throw 'User already exist'
  }
}

export async function loginUser({ email, password }: ILogin): Promise<IUser> {
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

export async function isLoginUser(): Promise<IUser | null> {
  try {
    const uid = localStorage.getItem('uid')
    if (!uid) {
      return null;
    }
    const user = await db.collection('users').doc(uid).get()
    const data = await user.data()
    if (!data) {
      return null;

    }
    return data as IUser;
  } catch (e) {
    return null;
  }
}

