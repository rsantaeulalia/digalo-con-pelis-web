import {Injectable} from '@angular/core';
import {Category} from '../../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories = [
    {
      name: 'La mas popular',
      value: 'popularity.asc'
    },
    {
      name: 'La menos popular',
      value: 'popularity.desc'
    },
    {
      name: 'Mayor fecha de estreno',
      value: 'release_date.asc'
    },
    {
      name: 'Menor fecha de estreno',
      value: 'release_date.desc'
    },
    {
      name: 'Mas guita',
      value: 'revenue.asc'
    },
    {
      name: 'Menos guita',
      value: 'revenue.desc'
    }
  ];

  constructor() {
  }

  public getCategories(): Array<Category> {
    return this.categories.map(category => new Category(category.name, category.value));
  }
}
