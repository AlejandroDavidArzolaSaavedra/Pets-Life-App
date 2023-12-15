import {Injectable, Query} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, where, query, getDocs, getDoc, DocumentData, QuerySnapshot, DocumentSnapshot
} from '@angular/fire/firestore';
import {Observable, from, of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  

  constructor(private firestore: Firestore, private auth: AngularFireAuth) {
  }
  
 getAllDocs(coll: string): Observable<any> {
  const usersRef = collection(this.firestore, coll);
  return from(getDocs(usersRef)).pipe(
    switchMap((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return of(data);
    })
  );
}

async getUsersByEmail(userId: string, coleccion: string) {
  const q = query(collection(this.firestore, coleccion), where("email", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
}

  createDoc(coll: string, data: {}) {
    const collRef = collection(this.firestore, coll)
    return addDoc(collRef, data);
  }

  deleteDoc(coll: string, docId: string) {
    const collRef = doc(this.firestore, coll, docId)
    return deleteDoc(collRef);
  }

  updateDoc(coll: string, data: {}) {
    const collRef = doc(this.firestore, coll)
    return updateDoc(collRef, data);
  }

  createDocWithId(coll: string, data: { }, id: string) {
    const collRef = doc(this.firestore, coll, id)
    return setDoc(collRef, data)
  }

  getDocById(coll: string) {
    const docRef = doc(this.firestore, coll)
    return docData(docRef, {idField: 'id'})
  }
  

  getUserDataByUID(uid: string): DocumentReference<DocumentData> {
    return doc(this.firestore, `users/${uid}`);
  }

  async getDocsByFieldUserId(userId: string, coleccion: string) {
    const q = query(collection(this.firestore, coleccion), where("id", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }

  async getDocsByFieldOwnerId(userId: string, coleccion: string) {
    const q = query(collection(this.firestore, coleccion), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }

  getAllDocuments(coll: string): Observable<any[]> {
    const collectionRef = collection(this.firestore, coll);
    return from(getDocs(collectionRef)).pipe(
      switchMap((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return of(data);
      })
    );
  }

  getDocByIdentify(coll: string): Observable<any> {
    const docRef: DocumentReference<DocumentData> = doc(this.firestore,`${coll}`);
    return from(getDoc(docRef)).pipe(
      switchMap((docSnapshot) => {
        if (docSnapshot.exists()) {
          return of({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log('No such document!');
          return of(undefined);
        }
      })
    );
  }

  async getDocByIdSnapshot(coll: string){
    const docRef = doc(this.firestore, coll);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("No such document!");
      return undefined
    }
  }  
}
