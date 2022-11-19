import { Fragment } from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header/Header";
import FormLogin from "../../../Components/Auth/FormLogin";
import AuthProvider, { useAuth } from "../../../Components/Auth/AuthContext";

export default function AuthLogin() {
    const { currentForm } = useAuth()
    return (
        <Fragment>
            <Header />
            <main>
                 <FormLogin />
            </main>
            <Footer />
        </Fragment>
    )
}
