import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export async function addToCart(data) {
  const ref = await addDoc(collection(db, "cart"), data);
    return ref.id;
    }

    export async function getCartItems() {
      const snapshot = await getDocs(collection(db, "cart"));
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }