const startAddMovie = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelAddMovie = addMovieModal.querySelector(".btn--passive");
const confirmAddMovie = cancelAddMovie.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.querySelector("#entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

let movies = [];

const deleteMovieElementHandler = (movieId) => {
  let index = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    index++;
  }
  movies.splice(index, 1);
  const list = document.getElementById("movie-list");
  list.children[index].remove();
  closeMovieDeletionModel();
  updateUI();
};

const closeMovieDeletionModel = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  addBackdrop();

  const cancelDeletionBtn = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));

  confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionBtn.removeEventListener("click", closeMovieDeletionModel);

  cancelDeletionBtn.addEventListener("click", closeMovieDeletionModel);
  confirmDeletionBtn.addEventListener(
    "click",
    deleteMovieElementHandler.bind(null, movieId)
  );
};

const displayMovies = (id, title, image, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.classList = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
      <img src="${image}" alt=${title} />
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const list = document.getElementById("movie-list");
  list.append(newMovieElement);
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const clearAddMovieInputs = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid input and give rating (between 1 and 5)");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  displayMovies(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  closeMovieModal();
  toggleBackdrop();
  updateUI();
  clearAddMovieInputs();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const addBackdrop = () => backdrop.classList.add("visible");

const showMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModel();
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearAddMovieInputs();
};

startAddMovie.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovie.addEventListener("click", cancelAddMovieHandler);
confirmAddMovie.addEventListener("click", addMovieHandler);
