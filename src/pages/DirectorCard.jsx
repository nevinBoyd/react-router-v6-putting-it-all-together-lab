import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"

function DirectorCard() {
    const { id } = useParams()
    const { directors } = useOutletContext()
    // convert id from string - number to match data
    const director = directors.find((d) => d.id === Number(id))
    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
            <h2>{director.name}</h2>
            <p>{director.bio}</p>

            <h3>Movies:</h3>
            <ul>
                {director.movies.map((movie) => (
                    <li key={movie.id}>
                        {/* Link for navigation to nested route */}
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>

            {/* route for adding new movies */}
            <Link to={`movies/new`}>Add New Movie</Link>

            {/* nested routes rendered */}
            <Outlet context={{ director }} />
        </div>
    )
}

export default DirectorCard
