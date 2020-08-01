import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  ranking = '';
  releaseDateFrom = '1970-01-01';
  releaseDateTo = '1980-01-01';
  baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=$apiKey&language=es-AR"
  "&sort_by=$ranking&include_adult=false&include_video=false&page=1&"
  "primary_release_date.gte=$releaseDateFrom&primary_release_date.lte=$releaseDateTo"`;

  constructor() { }
}
