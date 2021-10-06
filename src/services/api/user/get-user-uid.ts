export default async function getUid(): Promise<string> {
  try {
    const uid = localStorage.getItem('uid');
    if (!uid) {
      throw 'Unauthorized';
    }
    return uid;
  } catch (e) {
    throw e;
  }
}
