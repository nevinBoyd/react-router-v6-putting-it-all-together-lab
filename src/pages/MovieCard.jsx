import { useParams, useOutletContext } from "react-router-dom"

function MovieCard() {
  const { movieId } = useParams()
  const { director } = useOutletContext()

  // handle missing director context
  if (!director) return <h2>Director not found.</h2>

  // find movie by id (string match covers both string/number IDs)
  const movie = director.movies.find((m) => String(m.id) === String(movieId))

  // handle invalid movie id
  if (!movie) return <h2>Movie not found.</h2>

  // render movie details
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  )
}

export default MovieCard
