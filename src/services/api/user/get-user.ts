import firebase from 'firebase/compat';
import { auth } from 'services/firebaseSetup';

export default async function getUser(email: string, password: string): Promise<firebase.User> {
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
