import {Injectable} from '@angular/core';
import {Movie} from '../../model/Movie';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../../model/Category';
import {Genre} from '../../model/Genre';
import {Decade} from '../../model/Decade';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}&language=es-AR"
  "&sort_by={ranking}&include_adult=false&include_video=false&page=1&"
  "primary_release_date.gte={releaseDateFrom}&primary_release_date.lte={releaseDateTo}"`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getMoviesByCriteria(ranking: Category, genre: Genre, decade: Decade): Observable<Movie> {
    let url: string;
    url = this.baseUrl.replace('{ranking}', ranking.value).replace('{releaseDateFrom}', decade.from).replace('{releaseDateTo}', decade.to);
    return this.http.get<Movie>(url, this.httpOptions);
  }

}
