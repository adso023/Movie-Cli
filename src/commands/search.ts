import clui from "clui";
import { APIService } from "../helpers/api";
import { IArg } from "../models/args";
import inquirer from "inquirer";
import { IMovieSearch, IQuery, ISearch } from "../models/search";
import chalk from "chalk";
import { makeMovieSearchChoice } from "../helpers/prompt-helpers";
import Choice from "inquirer/lib/objects/choice";

interface SearchPrompt {
  name: string;
  type: "choice" | "separator";
}

const Spinner = clui.Spinner;

const api = new APIService();

const _movieRest = async (query: IQuery) => {
  const status = new Spinner(`Fetching details for specified movie`);
  status.start();
  const res = await api.getSearch(query);
  status.stop();

  if (res.error) {
    throw res.error;
  }

  return res.results;
};

const _moviePrompts = async (searchResult: ISearch) => {
  console.log(
    chalk.bgWhite.blue("Scroll through list to view details of movie")
  );
  console.log(`Page ${searchResult.page} / ${searchResult.total_pages}`);
  const questions = searchResult.results.map<Choice>((value: IMovieSearch) => {
    return {
      name: makeMovieSearchChoice(value),
      type: "choice",
      disabled: false,
      short: `${value.id}`,
      value,
    };
  });
  return await inquirer.prompt({
    type: "list",
    name: "Movies: ",
    pageSize: 10,
    loop: false,
    choices: [
      ...questions,
      {
        type: "separator",
      },
      {
        name: "Exit",
        type: "choice",
      },
    ],
  });
};

const searchMovie = async (args: IArg) => {
  const query: IQuery = { query: "", endoint: "search/movie", page: 1 };
  if (args.args.length === 0) {
    const res = await inquirer.prompt([
      { message: "Enter a query", type: "input", name: "searchText" },
    ]);
    query.query = res.searchText;
  } else {
    query.query = args.args.join(" ");
  }

  let stoppingCondition = false;

  const movieRes = await _movieRest(query);
  const promptRes = await _moviePrompts(movieRes!);
  console.log(promptRes);
};

export default {
  searchMovie,
};
