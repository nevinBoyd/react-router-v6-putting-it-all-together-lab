import { BrowserRouter, Routes, Route, useInRouterContext } from "react-router-dom"
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
        <BrowserRouter>
            <Routes>
                {/* root route */}
                <Route path="/" element={<Home />} />

                {/* about route */}
                <Route path="/about" element={<About />} />

                {/* Directors parent route */}
                <Route path="/directors" element={<DirectorContainer />}>

                    {/* nested routes for directors */}
                    <Route index element={<DirectorList />} />
                    <Route path="new" element={<DirectorForm />} />

                    {/* DirectorCard child route */}
                    <Route path=":id" element={<DirectorCard />}>

                        {/* nested movie routes under specific director */}
                        <Route path="movies/new" element={<MovieForm />} />
                        <Route path="movies/:movieId" element={<MovieCard />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
