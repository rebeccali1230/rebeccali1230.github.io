function createMovieTitle(title, year) {
    const movieTitle = document.createElement('h3');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = `${title} (${year})`;
    return movieTitle;
}

function createMovieDescription(description) {
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('movie-description-container');

    const movieDescription = document.createElement('p');
    movieDescription.classList.add('movie-description');
    movieDescription.textContent = description;
    movieDescription.style.display = 'none'; // Initially hide the description

    descriptionContainer.appendChild(movieDescription);
    return descriptionContainer;
}

function createMovie(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.appendChild(createMovieTitle(movie.title, movie.year));
    movieElement.appendChild(createMovieDescription(movie.description));
    return movieElement;
}

function renderMovies(movies) {
    $movies.innerHTML = '<table id="moviesTable"></table>'; // Create a table
    const moviesTable = document.getElementById('moviesTable');

    for (const movie of movies) {
        const movieRow = createMovie(movie);
        moviesTable.appendChild(movieRow);
    }
}

const $movies = document.getElementById('movies');
renderMovies(movies); // Initial rendering of movies

$movies.addEventListener('click', function (e) {
    if (e.target && e.target.matches('.movie-title')) {
        // The movie description is within the same cell as the title
        const movieCell = e.target.closest('td');
        const movieDescription = movieCell.querySelector('.movie-description');

        // Toggle display
        movieDescription.style.display = movieDescription.style.display === 'none' ? 'block' : 'none';
    }
});

const $form = document.getElementById('form');
const $search = document.getElementById('search'); // Corrected variable name

$form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Search functionality handled in input event listener
});

$search.addEventListener('input', function () {
    const searchTerm = $search.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    renderMovies(filteredMovies);
});

function createMovie(movie) {
    const movieRow = document.createElement('tr');
    const movieCell = document.createElement('td');
    
    movieCell.appendChild(createMovieTitle(movie.title, movie.year));
    movieCell.appendChild(createMovieDescription(movie.description));

    movieRow.appendChild(movieCell);
    return movieRow;
}
