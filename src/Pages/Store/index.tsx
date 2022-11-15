import { Fragment } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import SectionLogin from "../../Components/Auth/FormEmail";
import Cart from "../../Components/Cart";
import SectionStore from "../../Components/SectionStore";

export default function Store() {
    return (
        <Fragment>
            <Header />
            <SectionStore />
            <Footer />
        </Fragment>
    )
}
