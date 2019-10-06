// Movie constructor

function Movie(movieName, yearOfRelease, description) {
	this.movieName = movieName;
	this.yearOfRelease = yearOfRelease;
	this.description = description;
}

// UI constructor

function UI() {}

// Add book to list

UI.prototype.addToMovieList = function(movie) {
	// selecting the table list
	const list = document.querySelector('.movie-list');

	// create a tr element
	const row = document.createElement('tr');

	// add the data into the tr
	row.innerHTML = `
	<td>${movie.movieName}</td>
	<td>${movie.yearOfRelease}</td>
	<td>${movie.description}</td>
	<td class="delete"><a href="#">&times;</a></td>
	`;

	// append to list
	list.appendChild(row);
};

// clear fields prototype

UI.prototype.clearFields = function() {
	document.querySelector('#moviename').value = '';
	document.querySelector('#releaseyear').value = '';
	document.querySelector('#descri').value = '';
};

// function
const form = function(event) {
	// Getting input values
	const movieInput = document.querySelector('#moviename').value,
		yearInput = document.querySelector('#releaseyear').value,
		descriptionInput = document.querySelector('#descri').value;

	// Instantiating the movie constructor
	const movie = new Movie(movieInput, yearInput, descriptionInput);

	// Instanting the UI constructor
	const ui = new UI();

	// Validation
	if (movieInput === '' || yearInput === '' || descriptionInput === '') {
		alert('All field is required');
	} else {
		// Add to movie list
		ui.addToMovieList(movie);

		// clear fields
		ui.clearFields();
	}

	event.preventDefault();
};

// Event listener
document.querySelector('#movie-form').addEventListener('submit', form);
