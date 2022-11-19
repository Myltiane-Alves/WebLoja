import { Fragment } from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header/Header";
import FormEmail from "../../../Components/Auth/FormEmail";
import AuthProvider, { useAuth } from "../../../Components/Auth/AuthContext";

export default function AuthEmail() {
    const { currentForm } = useAuth()
    return (
        <Fragment>
            <Header />
            <main>
                <FormEmail />
            </main>
            <Footer />
        </Fragment>
    )
}
