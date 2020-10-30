import {Injectable} from '@angular/core';
import {Observable, zip} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Genre} from '../../model/Genre';
import {Decade} from '../../model/Decade';
import {environment} from '../../../environments/environment';
import {MovieResponse} from './MovieResponse';
import {map} from 'rxjs/operators';
import {Movie} from '../../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}&language=es-MX&region=US&include_adult=false&include_video=false&page={pageNumber}&release_date.gte={releaseDateFrom}&release_date.lte={releaseDateTo}&with_genres={genre}`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getMoviesByCriteria(genre: Genre, decade: Decade): Observable<Movie[]> {
    let url: string;
    let response: Observable<MovieResponse>;
    let response2: Observable<MovieResponse>;
    url = this.baseUrl
      .replace('{releaseDateFrom}', decade.from)
      .replace('{releaseDateTo}', decade.to)
      .replace('{genre}', genre.value)
      .replace('{pageNumber}', '1');
    response = this.http.get<MovieResponse>(url, this.httpOptions);

    url = this.baseUrl
      .replace('{releaseDateFrom}', decade.from)
      .replace('{releaseDateTo}', decade.to)
      .replace('{genre}', genre.value)
      .replace('{pageNumber}', '2');
    response2 = this.http.get<MovieResponse>(url, this.httpOptions);

    return zip(response, response2).pipe(map(x => x[0].results.concat(x[1].results)));
  }


}
