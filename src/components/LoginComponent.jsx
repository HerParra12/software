import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuthToken, request, setAuthHeader, setUserData} from "../helpers/axios_helper";

export const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (getAuthToken() != null && getAuthToken() !== "null") {
            navigate("/panel");
        }
    }, [navigate]);

    const submitForm = async (e) => {
        e.preventDefault();
        request(
            "POST",
            "/auth/authenticate",
            {
                username: username,
                password: password
            }
        )
            .then((response => {
                    setAuthHeader(response.data.token);
                    setUserData(response.data.user);
                    navigate("/panel");
                })
            );
    }

    return (
        <section
            className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                        {/*             <div className="d-flex justify-content-center py-4">
                            <a href="index.html" className="logo d-flex align-items-center w-auto">
                                <img src="assets/img/logo.png" alt="">
                                    <span className="d-none d-lg-block">NiceAdmin</span>
                            </a>
                        </div>*/}

                        <div className="card mb-3">

                            <div className="card-body">

                                <div className="pt-4 pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">¡Bienvenido! :)</h5>
                                    <p className="text-center small">Ingresa tus credenciales de acceso para
                                        continuar</p>
                                </div>

                                <form className="row g-3 needs-validation" noValidate>
                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label text-muted">Correo
                                            Electrónico</label>
                                        <input
                                            id='username'
                                            type='email'
                                            name='username'
                                            className='form-control shadow-none'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="password" className="form-label text-muted">Contraseña</label>
                                        <input
                                            id='password'
                                            type='password'
                                            name='password'
                                            className='form-control shadow-none'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="remember"
                                                   value="true" id="rememberMe"/>
                                            <label className="form-check-label" htmlFor="rememberMe">Mantener sesión
                                                iniciada</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button type='submit' className='btn btn-primary w-100'
                                                onClick={(e) => submitForm(e)}>Iniciar Sesión
                                        </button>
                                    </div>

                                    <div className="col-12">
                                        <p className="small mb-0">¿Aún no eres cliente nuestro? D:
                                            <Link to='/register'> ¡¿Qué esperas?!</Link></p>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}