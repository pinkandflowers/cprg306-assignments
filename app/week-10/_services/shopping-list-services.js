import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
  
    try {
      // Reference to: users/{userId}/items
      const itemsCollection = collection(db, "users", userId, "items");
  
      const q = query(itemsCollection);
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
      });
  
      return items;
    } catch (error) {
      console.error("Error getting items:", error);
      return [];
    }
  }

  export async function addItem(userId, item) {
    try {
      // Reference to: users/{userId}/items
      const itemsCollection = collection(db, "users", userId, "items");
  
      const docRef = await addDoc(itemsCollection, item);
  
      return docRef.id;
    } catch (error) {
      console.error("Error adding item:", error);
      return null;
    }
  }