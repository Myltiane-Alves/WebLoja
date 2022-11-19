import { Fragment } from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header/Header";
import FormRegister from "../../../Components/Auth/FormRegister";
import AuthProvider, { useAuth } from "../../../Components/Auth/AuthContext";

export default function AuthRegister() {
    const { currentForm } = useAuth()
    return (
        <Fragment>
            <Header />
            <main>
               <FormRegister />
            </main>
            <Footer />
        </Fragment>
    )
}
