import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart";
import { Home } from "../Pages/Home";
import Login from "../Pages/Login";
import PageCart from "../Pages/PageCart";
import { Products } from "../Pages/Products";
import Store from "../Pages/Store";


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
            <Routes>
                <Route path="/product" element={<Products />} />
            </Routes>
            <Routes>
                <Route path="/shop" element={<Store />} />
            </Routes>
        </Router>
    )
}
