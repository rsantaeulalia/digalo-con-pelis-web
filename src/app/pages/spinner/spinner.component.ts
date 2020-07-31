import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Output()
  dispatchPosition = new EventEmitter<string>();
  @Input()
  items: string[];

  stopSpin;
  currentSym1: string;
  symbolReel: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.symbolReel = this.items;
    this.currentSym1 = this.symbolReel[2];
  }

  stopSpinning(): void {
    clearInterval(this.stopSpin);
    this.dispatchPosition.emit(this.currentSym1);
  }

  spinning(): void {
    this.stopSpin = setInterval(() => {
      this.spin();
    }, 30);
  }

  private spin(): void {
    const randomNum1 = Math.floor(Math.random() * (this.symbolReel.length - 1));
    this.currentSym1 = this.symbolReel[randomNum1];
  }

}
