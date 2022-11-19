import { Fragment } from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header/Header";
import FormReset from "../../../Components/Auth/FormReset";
import AuthProvider, { useAuth } from "../../../Components/Auth/AuthContext";

export default function AuthReset() {
    const { currentForm } = useAuth()
    return (
        <Fragment>
            <Header />
            <main>
                <FormReset />
            </main>
            <Footer />
        </Fragment>
    )
}
