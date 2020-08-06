import {Injectable} from '@angular/core';
import {Decade} from '../../model/Decade';

@Injectable({
  providedIn: 'root'
})
export class DecadeService {

  constructor() {
  }

  private decades = [1960, 1970, 1980, 1990, 2000, 2010, 2020];

  getDecades(): Array<Decade> {
    return this.decades.map(decade => new Decade(decade));
  }
}
