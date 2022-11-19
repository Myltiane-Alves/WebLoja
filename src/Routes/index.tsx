import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart";
import AuthEmail from "../Pages/Auth/AuthEmail";
import AuthForget from "../Pages/Auth/AuthForget";
import AuthLogin from "../Pages/Auth/AuthLogin";
import AuthMain from "../Pages/Auth/AuthLogin";
import AuthRegister from "../Pages/Auth/AuthRegister";
import AuthReset from "../Pages/Auth/AuthReset";
import Checkout from "../Pages/Checkout";
import Contact from "../Pages/Contact";
import { Home } from "../Pages/Home";
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
                <Route path="/contact" element={<Contact />} />
            </Routes>
           <Routes>
                <Route path="/login" element={<AuthLogin />} />
            </Routes>
           <Routes>
                <Route path="/auth" element={<AuthEmail />} />
            </Routes>
           <Routes>
                <Route path="/register" element={<AuthRegister />} />
            </Routes>
           <Routes>
                <Route path="/forget" element={<AuthForget />} />
            </Routes>
           <Routes>
                <Route path="/reset" element={<AuthReset />} />
            </Routes>
            <Routes>
                <Route path="/cart" element={<PageCart />} />
            </Routes>
            <Routes>
                <Route path="/checkout" element={<Checkout />} />
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
