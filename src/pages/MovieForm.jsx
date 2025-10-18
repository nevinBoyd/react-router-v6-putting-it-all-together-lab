import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useParams, useNavigate, useOutletContext } from "react-router-dom"

function MovieForm() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [genres, setGenres] = useState("")

  const { id } = useParams()
  const outletContext = useOutletContext() || {}  // safe fallback for undefined context
  const { directors = [], setDirectors = () => { } } = outletContext
  const navigate = useNavigate()

  // find the matching director
  const director = directors.find((d) => Number(d.id) === Number(id))
  if (!director) return <h2>Director not found.</h2>

  const handleSubmit = (e) => {
    e.preventDefault()

    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(",").map((g) => g.trim()),
    }

    // patch request with safe fallback if director.movies is undefined
    fetch(`http://localhost:4000/directors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movies: [...(director.movies || []), newMovie] }),
    })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to add movie")
        return r.json()
      })
      .then((updatedDirector) => {

        // update local state with the new director data
        const updatedList = directors.map((d) =>
          d.id === updatedDirector.id ? updatedDirector : d
        )
        setDirectors(updatedList)

        // redirect to the new movie’s page
        navigate(`/directors/${id}/movies/${newMovie.id}`)
      })
      .catch((err) => console.error("Error adding movie:", err))
  }

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genres (comma-separated)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default MovieForm
