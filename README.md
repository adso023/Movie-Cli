# Movie-Cli

A commandline application that uses TMDB Database Api and Node technologies

# Usage
## Installation
Clone Repo \
`git clone https://github.com/adso023/Movie-Cli`

Install Dependencies \
`npm install`

View Program Help \
`ts-node .\src\tmdb-cli.ts`

Output
``` bash
Usage: tmdb-cli [options] [command]

A cli app that gets details about movies and tv-shows

Options:
  -V, --version    output the version number
  -h, --help       display help for command

Commands:
  search           Searches for tv in a list
  movie [options]  Gets movie details for a specified movie
  help [command]   display help for command
```

View Specific Command Help \
`ts-node .\src\tmdb-cli.ts search -h`
``` bash
Usage: tmdb-cli search [options] [command]

Searches for tv in a list

Options:
  -h, --help  display help for command

Commands:
  movie       Search for movies
  tv          Search for tv
```


# 
#### To be Completed
- [ ] Search Feature for Movies
- [ ] Search feature for Tv
- [ ] Display movie details
- [ ] Display tv details
- [ ] Add subcommands for tv (seasons, episode, etc)
