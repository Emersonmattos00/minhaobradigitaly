import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

export async function saveBook(data) {
  const ref = await addDoc(collection(db, "books"), data);
  return ref.id;
}

export async function getBooks() {
  const snapshot = await getDocs(collection(db, "books"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function updateBook(id, data) {
  const ref = doc(db, "books", id);
  await updateDoc(ref, data);
}
