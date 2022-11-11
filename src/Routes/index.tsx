import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart";
import { Home } from "../Pages/Home";
import Login from "../Pages/Login";
import PageCart from "../Pages/PageCart";


export function AppRoutes () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="/cart" element={<PageCart />} />
            </Routes>
        </Router>
    )
}
