import {Movie} from '../../model/Movie';

export interface MovieResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}
