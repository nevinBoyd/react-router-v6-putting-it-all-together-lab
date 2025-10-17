import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DirectorContainer from "./pages/DirectorContainer"
import DirectorList from "./pages/DirectorList"
import DirectorForm from "./pages/DirectorForm"
import DirectorCard from "./pages/DirectorCard"
import MovieForm from "./pages/MovieForm"
import MovieCard from "./pages/MovieCard"

const App = () => {
    return (
        <Routes>
            {/* root route */}
            <Route path="/" element={<Home />} />

            {/* about route */}
            <Route path="/about" element={<About />} />

            {/* directors parent route */}
            <Route path="/directors" element={<DirectorContainer />}>

                {/* nested routes */}
                <Route path index element={<DirectorList />} />
                <Route path="new" element={<DirectorForm />} />
                <Route path=":id" element={<DirectorCard />}>
                    <Route path="movies/new" element={<MovieForm />} />
                    <Route path="movies/:movieId" element={<MovieCard />} />
                </Route>
            </Route>
        </Routes >
    )
}

export default App
