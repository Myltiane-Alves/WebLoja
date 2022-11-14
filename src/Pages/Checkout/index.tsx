import { Fragment } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import SectionCheckout from "../../Components/SectionCheckout";

export default function Checkout() {
    return (
        <Fragment>
            <Header />
            <SectionCheckout />
            <Footer />
        </Fragment>
    )
}
