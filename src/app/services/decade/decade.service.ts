import {Injectable} from '@angular/core';
import {Decade} from '../../model/Decade';

@Injectable({
  providedIn: 'root'
})
export class DecadeService {

  constructor() {
  }

  private decades = [1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020];

  getDecades(): Array<Decade> {
    return this.decades.map(decade => new Decade(decade));
  }
}
