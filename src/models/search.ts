import { AxiosError } from "axios";

export interface ISearch {
  page: number;
  results: IMovieSearch[];
  total_pages: number;
  total_results: number;
}

export interface ISearchResponse {
  results?: ISearch;
  error?: AxiosError;
}

export interface IQuery {
  query: string;
  endoint: string;
  page: number;
}

export interface IMovieSearch {
  id: number;
  title: string;
  overview: string;
  original_title: string;
  release_date: string;
}
