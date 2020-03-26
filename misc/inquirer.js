const inquirer = require('inquirer');

module.exports = {

    askMovieName: () => {
        const question = {
            name: 'moviename',
            type: 'input',
            message: 'Enter movie name for details: ',
            validate: function(value) {
                if(value.length) {
                    return true;
                } else {
                    return 'Please enter a movie name for details.'
                }
            }
        };

        return inquirer.prompt(question);
    },
    askTvName: () => {
        const question = {
            name: 'tvname',
            type: 'input',
            message: 'Enter tv name: ',
            validate: function(value) {
                if(value.length) {
                    return true;
                } else {
                    return 'Please enter a tv name.'
                }
            }
        };

        return inquirer.prompt(question);
    },
    askTvEpisodeList: (num) => {
        const question = {
            name: 'seasonnum',
            type: 'input',
            message: `Enter season number [1, ${num}]: `,
            validate: function(value) {
                if(value.length && value >= 1 && value <= num) {
                    return true;
                } else {
                    return 'Invalid season number.';
                }
            }
        };

        return inquirer.prompt(question);
    },
    askTvEpisodeNum: (num) => {
        const question = {
            name: 'episodenum',
            type: 'input',
            message: `Enter episode numer [1, ${num}]: `,
            validate: function(value) {
                if(value.length && value >= 1 && value <= num) {
                    return true;
                } else {
                    return 'Invalid season number.';
                }
            }
        }

        return inquirer.prompt(question);
    },
    askSearchParam: () => {
        const question = [
            {
                name: 'title',
                type: 'input',
                message: 'Please enter a title to search: ',
                validate: function(value) {
                    if(value.length){
                        return true;
                    } else {
                        return "Enter a title to search."
                    }
                }
            },
            {
                name: 'type',
                type: 'input',
                message: 'Type for search [movie, series, episode]: ',
                validate: function(value) {
                    if(value.length && (value === 'movie' || value === 'series' || value === 'episode')) {
                        return true;
                    } else {
                        return 'Invalid type search [movie, series].'
                    }
                }
            },
            {
                name: 'page',
                type: 'input',
                message: 'Enter page number [1,100]: ',
                validate: function(value) {
                    if (value.length && value >= 1 && value.length <= 100) {
                        return true;
                    } else {
                        return "Enter valid page number [1,100]."
                    }
                }
            }
        ];

        return inquirer.prompt(question);
    }
};