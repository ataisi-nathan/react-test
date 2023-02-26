// import * as genreAPI from './fakeGenreService';

const  movies = [
    {
        _id: "0a01",
        title: "Terminator",
        genre: {_id: "44e21", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "5b02",
        title: "Die Hard",
        genre: {_id: "44e21", name: "Action"},
        numberInStock: 5,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-04T21:24:02.312Z"
    },
    {
        _id: "4c03",
        title: "Get Out",
        genre: {_id: "89e12", name: "Thriller"},
        numberInStock: 8,
        dailyRentalRate: 3.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "5d04",
        title: "Trip to Italy",
        genre: {_id: "68e14", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "95e05",
        title: "Airplane",
        genre: {_id: "68e14", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "27o06",
        title: "Wedding Crashers",
        genre: {_id: "68e14", name: "Comedy"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "45g07",
        title: "Gone Girl",
        genre: {_id: "89e12", name: "Thriller"},
        numberInStock: 6,
        dailyRentalRate: 4.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "7f8d",
        title: "The Sixth Sense",
        genre: {_id: "89e12", name: "Thriller"},
        numberInStock: 5,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "5df77",
        title: "The Avengers",
        genre: {_id: "44e21", name: "Action"},
        numberInStock: 16,
        dailyRentalRate: 3.5,
        publishDate: "2013-01-03T19:04:28.809Z"
    },
    {
        _id: "54s45",
        title: "9 Bullets",
        genre: {_id: "44e21", name: "Action"},
        numberInStock: 4,
        dailyRentalRate: 2.5,
        publishDate: "2022-01-03T19:04:28.809Z"
    },
    {
        _id: "87d89",
        title: "A Madea Homecoming",
        genre: {_id: "68e14", name: "Comedy"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2022-01-03T19:04:28.809Z"
    },
    {
        _id: "45u01",
        title: "About Last Night",
        genre: {_id: "89e12", name: "Thriller"},
        numberInStock: 6,
        dailyRentalRate: 2.2,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "59rf1",
        title: "After Ever Happy",
        genre: {_id: "11z22", name: "Romance"},
        numberInStock: 5,
        dailyRentalRate: 3.5,
        publishDate: "2022-01-03T19:04:28.809Z"
    },
    {
        _id: "5d9df",
        title: "Army of Thieves",
        genre: {_id: "00d12", name: "Crime"},
        numberInStock: 6,
        dailyRentalRate: 2.8,
        publishDate: "2021-01-03T19:04:28.809Z"
    },
    {
        _id: "d879df",
        title: "Avengers Endgame",
        genre: {_id: "44e21", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 3.5,
        publishDate: "2019-01-03T19:04:28.809Z"
    },
    {
        _id: "67dfd",
        title: "Avengers Infinity War",
        genre: {_id: "44e21", name: "Action"},
        numberInStock: 7,
        dailyRentalRate: 3.2,
        publishDate: "2018-06-03T19:04:28.809Z"
    },
    {
        _id: "67df",
        title: "Avengers Age of Ultron",
        genre: {_id: "44e21", name: "Action"},
        numberInStock: 4,
        dailyRentalRate: 3.0,
        publishDate: "2015-11-03T19:04:28.809Z"
    },
    {
        _id: "w1v8d",
        title: "Black Widow",
        genre: {_id: "44e21", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.8,
        publishDate: "2021-01-03T19:04:28.809Z"
    },
    {
        _id: "73a5d9",
        title: "Carter",
        genre: {_id: "89e12", name: "Thriller"},
        numberInStock: 6,
        dailyRentalRate: 2.6,
        publishDate: "2022-01-03T19:04:28.809Z"
    },
    {
        _id: "5c87",
        title: "Chip 'n Dale",
        genre: {_id: "11a06", name: "Animation"},
        numberInStock: 3,
        dailyRentalRate: 2.9,
        publishDate: "2022-01-03T19:04:28.809Z"
    },
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.name = movie.name;
    // movieInDb.genre = genreAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    if (!movieInDb._id) {

    }
}