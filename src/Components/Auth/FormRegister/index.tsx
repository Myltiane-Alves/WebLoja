import { Link } from 'react-router-dom';
import * as S from '../styles/styles';
import logo from '../../../assets/images/favicon.png'
import { useForm } from 'react-hook-form';

export default function FormRegister() {
    const {register, handleSubmit, reset , formState: { errors }} = useForm();

    return (
        <S.Container>
            <div className="contactForm">
                <header>
                    <Link to="/home">
                        <a>
                            <img src={logo} alt="logo" />
                        </a>
                    </Link>
                </header>
                <form action="">
                    <h2>Login</h2>
                    <div className="fields">
                        <div className="field">
                            <input
                                type="text"
                                placeholder="email"
                                {...register("Email", {
                                    required: "Email é Obrigatório",
                                    // onChange: (e) =>
                                })}
                            />
                        </div>
                        <div className="field">
                            <input
                                type="password"
                                placeholder="Senha"
                                {...register("Senha", {
                                    required: "Email é Obrigatório",
                                    // onChange: (e) =>
                                })}
                            />
                        </div>
                    </div>
                    <div className="containerBtn">
                        <button type="submit" className="btn">Entrar</button>
                        <span>Ainda não tem uma conta?</span>
                        <Link to="/signup">
                            <a href="">Criar Conta</a>
                        </Link>
                    </div>
                </form>
            </div>
        </S.Container>
    )
}
