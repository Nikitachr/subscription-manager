import firebase from 'firebase/compat';
import { auth } from 'services/firebaseSetup';

export default async function createUser(password: string, email: string): Promise<firebase.User> {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password)
    if (!response?.user) {
      console.log(response);
      throw 'User already exist'
    }
    return response.user
  } catch (e) {
    throw e
  }
}
