import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export async function addReview(data) {
  try {
    const ref = await addDoc(collection(db, "reviews"), data);
    return ref.id;
  } catch (error) {
    console.error("Erro ao adicionar review:", error);
    throw error;
  }
}

export async function getReviews(bookId) {
  try {
    const q = query(collection(db, "reviews"), where("bookId", "==", bookId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Erro ao buscar reviews:", error);
    return [];
  }
}