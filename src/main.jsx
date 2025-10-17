import "./index.css"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

// wrap app BrowserRouter enabe routing
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
