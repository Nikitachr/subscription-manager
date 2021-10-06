import firebase from 'firebase/compat';
import { auth } from 'services/firebaseSetup';

export default async function createUser(password: string, email: string): Promise<firebase.User> {
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
