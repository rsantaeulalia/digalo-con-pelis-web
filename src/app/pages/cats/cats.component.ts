import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  public cats = [];

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.firebaseService.getCats().subscribe((catsSnapshot) => {
      this.cats = [];
      catsSnapshot.forEach((catData: any) => {
        this.cats.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      });
    });
  }

}
