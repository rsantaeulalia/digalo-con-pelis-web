import {Injectable} from '@angular/core';
import {Decade} from '../../model/Decade';

@Injectable({
  providedIn: 'root'
})
export class DecadeService {

  constructor() {
  }

  getDecades(): Array<Decade> {
    return this.generateArrayOfYears().map(year => new Decade(year));
  }

  generateArrayOfYears(): Array<number> {
    const max = new Date().getFullYear();
    const min = max - 50;
    const years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }
}
