// Your code here
const API = "http://localhost:3000/films"
const movieInfo = document.querySelector('.card');
const movieTitle = document.querySelector('#title-title');
const movieRuntime = document.querySelector('#runtime.meta');
const movieShowtime = ('#showtime.ui.label')
const movieCapacity = ('#ticket-num')
const movieDescription = ('#film-info')

fetch(API)
    .then(response => response.json())
    .then(movieData => movieData.forEach(renderMovie));

function renderMovie(movie) {
    console.log(movie);
    const moviePoster = document.querySelector('#poster');
    moviePoster.src = movie.poster
    moviePoster.alt = movie.title
    movieTitle.innerHTML = movie.title;
    movieRuntime.innerHTML = movie.runtime;
    movieShowtime.innerHTML = movie.showtime;
    movieCapacity.innerHTML = (movie.capacity - movie.tickets_sold);
    movieDescription.innerHTML = movie.description;

    const buyButton = document.querySelector('#buy-ticket');
    buyButton.addEventListener('click', () => {
        movie.tickets_sold -+ 1
        moviePoster.querySelector('.ui orange button').textContent = movie.tickets_sold
        
    });
}

fetch(API)
    .then(response => response.json())
    .then(movieList => movieList.forEach(listMovies));

function listMovies(movieData) {
    const moviePlaceholder = document.querySelector('.film item')
    const list = document.querySelector('#films')
    list.innerHTML = movieData.title
}