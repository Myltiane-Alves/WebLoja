import { Fragment } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import SectionLogin from "../../Components/Auth/FormLogin";

export default function Login() {
    return (
        <Fragment>
            <Header />
            <SectionLogin />
            <Footer />
        </Fragment>
    )
}
