import { Link, useOutletContext } from "react-router-dom"

const DirectorList = () => {
    const { directors } = useOutletContext()

    // Show loading state until data is fetched
    if (!directors || directors.length === 0) {
        return <p>Loading directors...</p>
    }

    return (
        <ul>
            {directors.map((d) => (
                <li key={d.id}>
                    <Link to={`/directors/${d.id}`}>{d.name}</Link>
                </li>
            ))}
            <li>
                <Link to="/directors/new">Add New Director</Link>
            </li>
        </ul>
    )
}

export default DirectorList;
