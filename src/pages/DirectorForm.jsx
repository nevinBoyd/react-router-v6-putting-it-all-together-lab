import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

function DirectorForm() {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const navigate = useNavigate()
  const { directors, setDirectors } = useOutletContext()

  function handleSubmit(e) {
    e.preventDefault()

    const newDirector = {
      id: directors.length + 1,
      name,
      bio,
      movies: [],
    }

    // add to list and reset form
    setDirectors([...directors, newDirector])
    setName("")
    setBio("")

    // navigate back to directors list
    navigate("/directors")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Director</h2>

      <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Director Name"
        />
      </label>

      <label>
        Bio:
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Director Bio"
        />
      </label>

      <button type="submit">Add Director</button>
    </form>
  )
}

export default DirectorForm
