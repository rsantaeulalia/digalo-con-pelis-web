import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ComboSelector} from '../../model/ComboSelector';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Output()
  dispatchPosition = new EventEmitter<ComboSelector>();

  @Input()
  timeoutSpinner: number;
  @Input()
  items: Array<ComboSelector>;

  stopSpin;
  currentSym1: ComboSelector;
  symbolReel: Array<ComboSelector>;

  private times = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.symbolReel = this.items;
    this.currentSym1 = this.symbolReel[2];
  }

  stopSpinning(): void {
    clearInterval(this.stopSpin);
    this.times = 0;
    this.dispatchPosition.emit(this.currentSym1);
  }

  spinning(): void {
    this.stopSpin = setInterval(() => {
      this.spin();
      this.times++;
      if (this.times === this.timeoutSpinner) {
        this.stopSpinning();
      }
    }, 30);
  }

  private spin(): void {
    const randomNum1 = Math.floor(Math.random() * (this.symbolReel.length - 1));
    this.currentSym1 = this.symbolReel[randomNum1];
  }

}
