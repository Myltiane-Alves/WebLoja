import { Fragment } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import SectionLogin from "../../Components/Auth/FormEmail";
import FormEmail from "../../Components/Auth/FormEmail";
import FormLogin from "../../Components/Auth/FormLogin";
import FormRegister from "../../Components/Auth/FormRegister";
import FormForget from "../../Components/Auth/FormForget";
import FormReset from "../../Components/Auth/FormReset";
import AuthProvider, { useAuth } from "../../Components/Auth/AuthContext";
export default function AuthMain() {
    const { currentForm } = useAuth()
    return (
        <Fragment>
            <Header />
            <main>
                {/* {currentForm === 'email' && <FormEmail />}
                {currentForm === 'email' && <FormLogin />}
                {currentForm === 'email' && <FormRegister />}
                {currentForm === 'email' && <FormForget />}
                {currentForm === 'email' && <FormReset />} */}
                 {currentForm === 'email' && <FormEmail />}
                {currentForm === 'login' && <FormLogin />}
                {currentForm === 'register' && <FormRegister />}
                {currentForm === 'forget' && <FormForget />}
                {currentForm === 'reset' && <FormReset />}
            </main>
            {/* <FormLogin /> */}
            <Footer />
        </Fragment>
    )
}
