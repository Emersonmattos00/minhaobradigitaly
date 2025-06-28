import { db } from '../lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export async function saveAuthor(data) {
  const ref = await addDoc(collection(db, "authors"), data);
  return ref.id;
}

export async function getAuthors() {
  const snapshot = await getDocs(collection(db, "authors"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}