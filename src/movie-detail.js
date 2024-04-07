const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get("id")
const API_KEY = "2a4e4a2f96c67501bdac45acc06cddc9"
const urlImg = "https://image.tmdb.org/t/p/w200"

const movieDetailURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`

document.addEventListener("DOMContentLoaded", () => {
  fetchData(movieDetailURL)
    .then(movie => {
      renderMovieDetails(movie)
    })
    .catch(error => console.error("Error: ", error))
})

function renderMovieDetails(movie) {
  const movieDetailsContainer = document.getElementById("movie-details")

  const movieHTML = `
        <h2>${movie.title}</h2>
        <figure>
          <img src="${urlImg + movie.poster_path}" alt="Image not found">
        </figure>
        <p>${movie.overview}</p>
      `

  movieDetailsContainer.innerHTML = movieHTML
}

async function fetchData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error: ", error)
    throw error
  }
}
