import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  ranking = '';
  releaseDateFrom = '1970-01-01';
  releaseDateTo = '1980-01-01';
  baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=$apiKey&language=es-AR"
  "&sort_by=$ranking&include_adult=false&include_video=false&page=1&"
  "primary_release_date.gte=$releaseDateFrom&primary_release_date.lte=$releaseDateTo"`;

  constructor(private firebase: AngularFirestore) {
  }

  public getCats() {
    return this.firebase.collection('cats').snapshotChanges();
  }
}
