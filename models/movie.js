class Movie{
    constructor(json) {
        this.title = json['Title'];
        this.year = json['Year'];
        this.rated = json['Rated'];
        this.released = json['Released'];
        this.runtime = json['Runtime'];
        this.genre = json['Genre'];
        this.director = json['Director'];
        this.writer = json['Writer'];
        this.actors = json['Actors'];
        this.plot = json['Plot'];
        this.language = json['Language'];
        this.country = json['Country'];
        this.awards = json['Awards'];
        this.poster = json['Poster'];
        this.ratings = json['Ratings'];
        this.metascore = json['Metascore'];
        this.imdbRating = json['imdbRating'];
        this.imdbVotes = json['imdbVotes'];
        this.imdbID = json['imdbID'];
        this.type = json['Type'];
        this.dvd = json['DVD'];
        this.boxOffice = json['BoxOffice'];
        this.production = json['Production'];
        this.website = json['Website'];
        this.response = json['Response'];
    }

    get printDetails() {
        return "";
    }
}