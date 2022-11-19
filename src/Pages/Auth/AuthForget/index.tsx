import { Fragment } from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header/Header";
import FormForget from "../../../Components/Auth/FormForget";
import AuthProvider, { useAuth } from "../../../Components/Auth/AuthContext";

export default function AuthForget() {
    const { currentForm } = useAuth()
    return (
        <Fragment>
            <Header />
            <main>
                <FormForget />
            </main>
            <Footer />
        </Fragment>
    )
}
