import {Injectable} from '@angular/core';
import {Genre} from '../../model/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private genres = [
    {
      id: 28,
      name: 'Acción'
    },
    {
      id: 12,
      name: 'Aventura'
    },
    {
      id: 16,
      name: 'Animación'
    },
    {
      id: 35,
      name: 'Comedia'
    },
    {
      id: 80,
      name: 'Crimen'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Familia'
    },
    {
      id: 14,
      name: 'Fantasia'
    },
    {
      id: 27,
      name: 'Terror'
    },
    {
      id: 9648,
      name: 'Misterio'
    },
    {
      id: 10749,
      name: 'Amor'
    },
    {
      id: 878,
      name: 'Ciencia Ficción'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'Guerra'
    },
    {
      id: 37,
      name: 'Western'
    }
  ];

  constructor() {
  }

  public getGenres(): Array<Genre> {
    return this.genres.map(genre => new Genre(genre.name, genre.id));
  }
}
