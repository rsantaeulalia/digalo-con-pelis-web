import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebase: AngularFirestore) {
  }

  public createCat(data: { nombre: string, url: string }) {
    return this.firebase.collection('cats').add(data);
  }

  public getCat(documentId: string) {
    return this.firebase.collection('cats').doc(documentId).snapshotChanges();
  }

  public getCats() {
    return this.firebase.collection('cats').snapshotChanges();
  }

  public updateCat(documentId: string, data: any) {
    return this.firebase.collection('cats').doc(documentId).set(data);
  }
}
