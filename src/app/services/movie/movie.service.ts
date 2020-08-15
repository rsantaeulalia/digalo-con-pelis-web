import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Genre} from '../../model/Genre';
import {Decade} from '../../model/Decade';
import {environment} from '../../../environments/environment';

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

  getMoviesByCriteria(genre: Genre, decade: Decade): Observable<any> {
    let url: string;
    url = this.baseUrl
      .replace('{releaseDateFrom}', decade.from)
      .replace('{releaseDateTo}', decade.to)
      .replace('{genre}', genre.value)
      .replace('{pageNumber}', '1');
    debugger;
    return this.http.get<any>(url, this.httpOptions);
  }

}
