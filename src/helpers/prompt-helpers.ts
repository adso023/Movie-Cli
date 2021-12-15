import chalk from "chalk";
import { IMovieSearch } from "../models/search";

export const makeMovieSearchChoice = (result: IMovieSearch) => {
  return `${chalk.blue.bold(result.title)} - (${result.release_date})\n${
    result.overview
  }\n`;
};
