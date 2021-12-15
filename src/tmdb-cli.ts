import commander from "commander";
import chalk from "chalk";
import types from "./commands/search";

commander
  .version("0.0.1")
  .description("A cli app that gets details about movies and tv-shows");

const search = commander
  .command("search")
  .description("Searches for tv in a list")
  .action(() => {
    console.log(chalk.bgWhite.red("Additional commands are missing"));
    search.help();
  });

search
  .command("movie")
  .description("Search for movies")
  .action(types.searchMovie);

search
  .command("tv")
  .description("Search for tv")
  .action(() => {});

commander
  .command("movie")
  .option("")
  .description("Gets movie details for a specified movie")
  .action((args) => {
    console.log(args);
  });

commander.parse(process.argv);
