import {Component, OnInit, ViewChild} from '@angular/core';
import {SpinnerComponent} from '../spinner/spinner.component';
import {GenreService} from '../../services/genre/genre.service';
import {Genre} from '../../model/Genre';
import {Category} from '../../model/Category';
import {CategoryService} from '../../services/category/category.service';
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
  @ViewChild('spinner1') spinner1: SpinnerComponent;
  @ViewChild('spinner2') spinner2: SpinnerComponent;
  @ViewChild('spinner3') spinner3: SpinnerComponent;

  private genres = Array<Genre>();
  private categories = Array<Category>();
  private decades = Array<Decade>();

  private movies = Array<Movie>();

  private selectedCategory: Category;
  private selectedGenre: Genre;
  private selectedDecade: Decade;
  private selectedMovie: Movie;
  private errorMessage: any;

  constructor(private movieService: MovieService,
              private genreService: GenreService,
              private categoryService: CategoryService,
              private decadeService: DecadeService) {
  }

  ngOnInit(): any {
    this.genres = this.genreService.getGenres();
    this.categories = this.categoryService.getCategories();
    this.decades = this.decadeService.getDecades();
  }

  getMovie(): void {
    if (this.selectedCategory && this.selectedGenre && this.selectedDecade) {
      this.movieService.getMoviesByCriteria(this.selectedCategory, this.selectedGenre, this.selectedDecade).subscribe(response =>
          this.movies = response.results
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
    this.spinner1.spinning();
    this.spinner2.spinning();
    this.spinner3.spinning();
  }

  private clear(): void {
    this.selectedDecade = null;
    this.selectedCategory = null;
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

  getPositionThree($event: ComboSelector): void {
    this.selectedCategory = new Category($event.name, $event.value);
    this.getMovie();
  }

  getMovieGenres(): Array<ComboSelector> {
    return this.genres.map(genre => new ComboSelector(genre.name, genre.value));
  }

  getMovieDecades(): Array<ComboSelector> {
    return this.decades.map(decade => new ComboSelector(decade.name, decade.name));
  }

  getMovieCategories(): Array<ComboSelector> {
    return this.categories.map(category => new ComboSelector(category.name, category.value));
  }

  private handleError(error: any): void {
    this.errorMessage = error;
  }

  private pickRandomMovie(): void {
    const randomNum1 = Math.floor(Math.random() * (this.movies.length - 1));
    this.selectedMovie = this.movies[randomNum1];
  }

  getSelectedMovie(): Movie {
    return this.selectedMovie;
  }

  isMovieSelected(): boolean {
    return isNotNullOrUndefined(this.selectedMovie);
  }
}
