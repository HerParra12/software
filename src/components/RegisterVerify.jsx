import React from "react";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

export const RegisterVerify = () => {
    const location = useLocation();
    const user = location.state && location.state.user;

    return (
        <section
            className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 d-flex flex-column align-items-center justify-content-center">
                        <div className="card mb-3">
                            <div className="card-body">

                                <div className="pt-4 pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">¿Eres una persona real? -_-</h5>
                                    <p className="text-center small">¡Tu cuenta ha sido creada
                                        satisfactoriamente!<br/> Se ha enviado un enlace de activación a la dirección de
                                        correo electrónico <span className='card-title'>{user.email}</span>.
                                    </p>
                                    <div className='text-center'>
                                        <Link to={'/login'} className={'btn btn-primary'}>Volver</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}