import { Fragment } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import SectionLogin from "../../Components/Auth/FormLogin";
import Cart from "../../Components/Cart";

export default function PageCart() {
    return (
        <Fragment>
            <Header />
            <Cart />
            <Footer />
        </Fragment>
    )
}
