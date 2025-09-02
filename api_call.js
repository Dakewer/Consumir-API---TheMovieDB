import { token } from "../Consumir-API---TheMovieDB/token.js"

async function buscaPeli(titulo) {
    let url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(titulo)}&include_adult=false&language=en-US&page=1`;
    let moviesArray = [];

    let request = await fetch(url, {
        method : "GET",
        headers : {
            accept : "application/json",
            Authorization : `Bearer ${token}`
        }
    });

    if (!request.ok) {
        throw new Error(`Request call failed: ${request.status}`);
    }

    let response = await request.json();

    response.results.map((movie) => {
        moviesArray.push(movie.title);
    });

    return moviesArray;
}

let movies = await buscaPeli("manchester by the sea");
console.log(movies);