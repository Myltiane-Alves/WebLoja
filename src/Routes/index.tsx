import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";


export function AppRoutes () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}