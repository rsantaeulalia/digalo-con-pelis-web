import {Component, OnInit, ViewChild} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {SpinnerComponent} from '../spinner/spinner.component';

@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./cats.component.scss']
})
export class SlotMachineComponent implements OnInit {
  @ViewChild('spinner1') spinner1: SpinnerComponent;
  @ViewChild('spinner2') spinner2: SpinnerComponent;
  @ViewChild('spinner3') spinner3: SpinnerComponent;
  private matches = [];
  private position1Stopped = false;
  private position2Stopped = false;
  private position3Stopped = false;

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit(): any {
    this.firebaseService.getCats().subscribe((catsSnapshot) => {
      return;
    });
  }

  finishHandler(value): any {
    this.matches.push(value);
  }

  getMovie(): void{
    if (this.position1Stopped && this.position2Stopped && this.position3Stopped) {
      console.log('Se frenaron los 3, hay que ir al servicio de pelis');
    }
  }

  runSpinner(): any {
    this.emptyArray();
    this.spinner1.spinning();
    this.spinner2.spinning();
    this.spinner3.spinning();
  }

  private emptyArray(): void {
    this.matches = [];
  }

  getPositionOne($event: any): void {
    console.log($event);
    this.position1Stopped = true;
    this.getMovie();
  }

  getPositionTwo($event: any): void {
    console.log($event);
    this.position2Stopped = true;
    this.getMovie();
  }

  getPositionThree($event: any): void {
    console.log($event);
    this.position3Stopped = true;
    this.getMovie();
  }

  getMovieCategories(): string[] {
    return ['Drama', 'Terror', 'Sarasa 1', 'Sarasa 2'];
  }

  getMovieDecade(): string[] {
    return ['1970', '1980', '1990', '2000'];
  }

  getMoviePopularity(): string[] {
    return ['Sarasa 4', 'Pindonga', 'Popitui'];
  }
}
