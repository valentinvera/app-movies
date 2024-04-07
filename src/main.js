import "@fontsource-variable/inter"

const searchInput = document.querySelector("#searchInput")
const moviesList = document.querySelector("#movies")
const urlImg = "https://image.tmdb.org/t/p/w200"
const API_KEY = import.meta.env.VITE_API_KEY
const allMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

let allMovies = []

window.addEventListener("DOMContentLoaded", () => {
  fetchData(allMoviesURL)
    .then(response => {
      allMovies = response.results
      const sortedMoviesbyDate = allMovies.slice().sort((firstDate, secondDate) => {
        return new Date(secondDate.release_date) - new Date(firstDate.release_date)
      })
      displayMovies(sortedMoviesbyDate)
    })
    .catch(error => console.error("Error: ", error))
})

searchInput.addEventListener("keyup", () => {
  const queryParams = searchInput.value.trim()

  if (queryParams.length === 0) {
    displayMovies(
      allMovies.slice().sort((firstDate, secondDate) => {
        return new Date(secondDate.release_date) - new Date(firstDate.release_date)
      }),
    )
    return
  }

  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryParams}`

  fetchData(searchURL)
    .then(response => {
      const sortedMoviesbyDate = response.results.sort((firstDate, secondDate) => {
        return new Date(secondDate.release_date) - new Date(firstDate.release_date)
      })
      displayMovies(sortedMoviesbyDate)
    })
    .catch(error => console.error("Error: ", error))
})

const fetchData = async url => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Error fetching data: ${response.status}`)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("Error: ", error)
    throw error
  }
}

const displayMovies = movies => {
  moviesList.innerHTML = ""

  if (movies.length === 0) {
    moviesList.innerHTML = "<p class='center'>No se encontraron resultados para tu búsqueda</p>"
  } else {
    const moviesHTML = movies
      .map(movie => {
        let movieClass = "movies__item"
        if (movies.length === 1) {
          movieClass += " movie__single"
        }
        return `
        <li class="movies__items">

          <a href="./movie-detail.html?id=${movie.id}" target="_blank" class="movies__link ${movieClass}">
            
            <figure class="movies__figure">
              <img src="${urlImg + movie.poster_path}" class="movies__img" alt="Image not found">
            </figure>

          </a>

          <h2 class="movies__name">${movie.title}</h2>
        </li>
      `
      })
      .join("")

    moviesList.innerHTML = moviesHTML
  }
}
