import {Component, OnInit, ViewChild} from '@angular/core';
import {SpinnerComponent} from '../spinner/spinner.component';
import {GenreService} from '../../services/genre/genre.service';
import {Genre} from '../../model/Genre';
import {ComboSelector} from '../../model/ComboSelector';
import {DecadeService} from '../../services/decade/decade.service';
import {Decade} from '../../model/Decade';
import {MovieService} from '../../services/movie/movie.service';
import {Movie} from '../../model/Movie';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.scss']
})
export class SlotMachineComponent implements OnInit {


  constructor(private movieService: MovieService,
              private genreService: GenreService,
              private decadeService: DecadeService) {
  }

  @ViewChild('spinner1') spinner1: SpinnerComponent;
  @ViewChild('spinner2') spinner2: SpinnerComponent;

  private genres = Array<Genre>();
  private decades = Array<Decade>();

  private movies = Array<Movie>();
  private pastSelectedMovies = Array<number>();

  private selectedGenre: Genre;
  private selectedDecade: Decade;
  private selectedMovie: Movie;
  private errorMessage: any;
  private pickingMovie = false;

  private static countWords(title: string): string {
    const words = title.trim().split(' ').length;
    return words > 1 ? `${words} palabras` : `${words} palabra`;
  }

  ngOnInit(): any {
    this.genres = this.genreService.getGenres();
    this.decades = this.decadeService.getDecades();
  }

  getMovie(): void {
    if (this.selectedDecade && this.selectedGenre) {
      this.movieService.getMoviesByCriteria(this.selectedGenre, this.selectedDecade).subscribe(response =>
          this.movies = response
        , error => {
          this.handleError(error);
        }, () => {
          this.pickRandomMovie();
        }
      );
    }
  }

  runSpinner(): any {
    this.clear();
    this.pickingMovie = true;
    this.spinner1.spinning(this.getTimeOutSpinner());
    this.spinner2.spinning(this.getTimeOutSpinner());
  }

  private clear(): void {
    this.selectedDecade = null;
    this.selectedGenre = null;
    this.selectedMovie = null;
  }

  getPositionOne($event: ComboSelector): void {
    this.selectedGenre = new Genre($event.name, $event.value);
    this.getMovie();
  }

  getPositionTwo($event: ComboSelector): void {
    this.selectedDecade = new Decade($event.name);
    this.getMovie();
  }

  getMovieGenres(): Array<ComboSelector> {
    return this.genres.map(genre => new ComboSelector(genre.name, genre.value));
  }

  getMovieDecades(): Array<ComboSelector> {
    return this.decades.map(decade => new ComboSelector(decade.name, decade.name));
  }

  private handleError(error: any): void {
    this.errorMessage = error;
  }

  private pickRandomMovie(): void {
    do {
      const randomNum1 = Math.floor(Math.random() * (this.movies.length - 1));
      this.selectedMovie = this.movies[randomNum1];
      this.pastSelectedMovies.push(this.selectedMovie.id);
    }
    while (!this.pastSelectedMovies.some(id => id === this.selectedMovie.id));
    this.pickingMovie = false;
  }

  getSelectedMovie(): Movie {
    return this.selectedMovie;
  }

  isMovieSelected(): boolean {
    return isNotNullOrUndefined(this.selectedMovie);
  }

  isMovieLoading(): boolean {
    return this.pickingMovie;
  }

  getSelectedMovieTitle(): string {
    return `${this.selectedMovie.title} (${SlotMachineComponent.countWords(this.selectedMovie.title)})`;
  }

  getTimeOutSpinner(): number {
    return Math.floor(Math.random() * 100) + 40;
  }
}
