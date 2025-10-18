import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"

function DirectorCard() {
    const { id } = useParams()
    const { directors, setDirectors } = useOutletContext()

    // match director ID safely (string/number compatible)
    const director = directors.find((d) => String(d.id) === String(id))

    return (
        <div>
            {director ? (
                <>
                    <h2>{director.name}</h2>
                    <p>{director.bio}</p>

                    <h3>Movies:</h3>
                    <ul>
                        {director.movies.map((movie) => (
                            <li key={movie.id}>
                                {/* link for navigation to nested route */}
                                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* link for adding new movies */}
                    <Link to="movies/new">Add New Movie</Link>
                </>
            ) : (
                <h2>Director not found.</h2>
            )}

            {/* always render nested routes so movie error displays correctly */}
            <Outlet context={{ director, setDirectors }} />
        </div>
    )
}

export default DirectorCard
