import { db } from '../lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export async function createContest(data) {
  const ref = await addDoc(collection(db, "contests"), data);
  return ref.id;
}

export async function getContests() {
  const snapshot = await getDocs(collection(db, "contests"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}