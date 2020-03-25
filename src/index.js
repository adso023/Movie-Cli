const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const program = require('commander');
const commands = require('./commands');

clear();

console.log(
    chalk.yellow(
        figlet.textSync("Movie - CLI")
    )
);

program
    .version('0.0.1')
    .description('A cli app that gets movie and tv-show details')

program
    .command("--movie")
    .alias('movie')
    .description('get the movie details for specified name')
    .action(() => commands.movie_details())

program
    .command("--tv")
    .alias("tv")
    .description("get the tv show description for specified name")
    .action(() => commands.tv_details())

program
    .command("--tv-episode-list")
    .alias("tv-episode-list")
    .description("get tv show episode list for specified name")
    .action(() => commands.tv_episode_list())

program
    .command("--tv-episode-information")
    .alias("tv-episode-information")
    .description("get tv show episode details for name and episode num")
    .action(() => commands.tv_episode_info())

program
    .command('--search')
    .alias('search')
    .description('get search results with particular search')
    .action(() => console.log('Search'))

program.parse(process.argv);