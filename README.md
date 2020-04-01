# Movie-Cli

A commandline application that uses Omdb Database Api and Node technologies

# Usage

#### Required Keys and file
To use this app you must have node, npm and npx installed. Check versions
This program also requires a Omdb Api key
https://www.omdbapi.com/apikey.aspx to get a apikey
Make a helper.js file in misc/ with the following code
``` javascript
const apiKey = () => {
    return "Your Api Key Here...";
}

const baseUrl = () => {
    return "https://www.omdbapi.com/";
}

module.exports = {
    apiKey,
    baseUrl
};
```

``` bash
$ node -v
v13.5.0 (My Version)
$ npm -v
6.13.4
$npx -v
6.13.4
```

#### Required Packages
``` bash
$ npm install chalk
$ npm install clear
$ npm install figlet
$ npm install commander
$ npm install clui
$ npm install node-fetch
$ npm install inquirer

$ node src/index.js
  __  __            _                 ____ _     ___ 
 |  \/  | _____   _(_) ___           / ___| |   |_ _|
 | |\/| |/ _ \ \ / / |/ _ \  _____  | |   | |    | | 
 | |  | | (_) \ V /| |  __/ |_____| | |___| |___ | | 
 |_|  |_|\___/ \_/ |_|\___|          \____|_____|___|

Usage: index [options] [command]

A cli app that gets movie and tv-show details

Options:
  -V, --version                                    output the version number
  -h, --help                                       display help for command

Commands:
  --movie|movie                                    get the movie details for specified name
  --tv|tv                                          get the tv show description for specified name    
  --tv-episode-list|tv-episode-list                get tv show episode list for specified name       
  --tv-episode-information|tv-episode-information  get tv show episode details for name and
                                                   episode num
  --search|search                                  get search results with particular search
  help [command]                                   display help for command
```

##### To be Completed
- [ ] Implement json data into models for display
