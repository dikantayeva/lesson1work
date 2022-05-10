const NumOfFilms = prompt('How many films you have watched?', '');
const personalMovieDB = {
	count: NumOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('what', ''),
	b = prompt('num', '');

personalMovieDB.movies[a] = b;
console.log(personalMovieDB);