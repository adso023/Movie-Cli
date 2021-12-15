import axios, { AxiosError, AxiosInstance } from "axios";
import env from "../../env";
import { IQuery, ISearch, ISearchResponse } from "../models/search";

export class APIService {
  private _baseUrl: string;

  private client: AxiosInstance;

  constructor() {
    this._baseUrl = "https://api.themoviedb.org/3/";
    this.client = axios.create({
      baseURL: this._baseUrl,
    });
  }

  async getSearch(query: IQuery) {
    let response: ISearchResponse = {};
    try {
      const res = await this.client.get(query.endoint, {
        params: {
          api_key: env.API_KEY,
          query: query.query,
          page: query.page,
        },
      });
      response.results = res.data as ISearch;
    } catch (e) {
      response.error = e as AxiosError;
    }

    return response;
  }
}
