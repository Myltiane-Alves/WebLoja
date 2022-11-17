import { Link } from 'react-router-dom';
import * as S from '../styles/styles';
import logo from '../../../assets/images/favicon.png'
import { useForm } from 'react-hook-form';

export default function FormRegister() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
                <form id="auth-register">
                    <h2>Criar Conta</h2>
                    <div className="fields">
                        <div className="field">
                            <input
                                type="text"
                                placeholder="E-mail"
                                {...register("Email", {
                                    required: "Preencha o e-mail",
                                })} readOnly
                            />
                            {/* <label htmlFor="email">E-mail</label> */}
                        </div>

                        <div className="field">
                            <input type="date" id="birth_at" {...register('birthAt')}
                                placeholder="Data de Nascimento"
                            />
                            {/* <label htmlFor="birth_at">Data de Nascimento</label> */}
                        </div>

                        <div className="field">
                            <input type="password" placeholder="Senha"
                                {...register("Senha", {
                                    required: "Preencha a senha",
                                })}
                            />
                            {/* <label htmlFor="password_new">Criar Senha</label> */}
                        </div>

                        <div className="field">
                            <input type="password" placeholder="Confirme a Senha"
                                {...register('passwordConfirm', {
                                    required: 'Preencha o campo confirmação de senha.',
                                })}
                            />
                            {/* <label htmlFor="password_confirm">Confirme a Senha</label> */}
                        </div>
                    </div>


                    <div className="containerBtn">
                        <div>
                            <Link to="/auth#forget">
                                <a href="">Já tem uma conta?</a>
                            </Link>
                            <button type="submit" className="btn">Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </S.Container>
    )
}
