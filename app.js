// Movie constructor

function Movie(movieName, yearOfRelease, description) {
	this.movieName = movieName
	this.yearOfRelease = yearOfRelease
	this.description = description
}

// UI constructor

function Ui() {}

// Event listeners

const movieInput = document.querySelector('#moviename')
const yearInput = document.querySelector('#releaseyear')
const descriptionInput = document.querySelector('#descri')

console.log(movieInput, yearInput, descriptionInput)
