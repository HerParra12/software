import React, {useEffect, useState} from "react";
import {LoginComponent} from './LoginComponent';
import {getAuthToken, getUserData, request} from "../helpers/axios_helper";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

export const PanelComponent = () => {
    const [services, setServices] = useState([]);
    const [domains, setDomains] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [domain, setDomain] = useState('');
    const [user] = useState(getUserData());
    const sidebar = useSidebar();
    const navigate = useNavigate();
    // const location = useLocation();
    // const user = location.state && location.state.user;

    useEffect(() => {
        if (getAuthToken() == null && getAuthToken() === "null") {
            navigate("/login")
        } else {
            request("GET", "/service/" + user.id + "/list", {}).then(response => setServices(response.data))
            request("GET", "/domain/" + user.id + "/list", {}).then(response => setDomains(response.data))
            request("GET", "/ticket/" + user.id + "/list", {}).then(response => setTickets(response.data))
        }
    }, [user]);

    return (
        <section className="section dashboard min-vh-100">
            <div className="row">
                <div className="col-lg-3">{sidebar}</div>

                <div className="col-lg-9">
                    <div className="row">

                        <div className="col-xxl-4 col-md-6">
                            <div className="card info-card sales-card">
                                <div className="card-body">
                                    <h5 className="card-title"><Link to={'/domains'}>Servicios</Link></h5>
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-server"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h6>{services.length}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-md-6">
                            <div className="card info-card revenue-card">
                                <div className="card-body">
                                    <h5 className="card-title"><Link to={'/domains'}>Dominios</Link></h5>
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-globe"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h6>{domains.length}</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-12">
                            <div className="card info-card customers-card">
                                <div className="card-body">
                                    <h5 className="card-title"><Link to={'/tickets'}>Tickets</Link></h5>
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h6>{tickets.length}</h6>
                                        </div>
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

export const useSidebar = () => {
    const [tickets, setTickets] = useState([]);
    const [user] = useState(getUserData());
    const [checkDomain, setCheckDomain] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (getAuthToken() == null && getAuthToken() === "null") {
            navigate("/login")
        } else {
            request("GET", "/ticket/" + user.id + "/list", {}).then(response => setTickets(response.data))
        }
    }, [user]);

    const {
        register,
        formState: {errors},
        handleSubmit,
        setValue
    } = useForm({
        mode: "onChange",
    });
    const findDomain = (data) => {
        request('GET', `/domain/check/${data.checkDomain}`).then(response => setCheckDomain(response.data));
    }

    return (
        <div>
            <div className="accordion accordion-flush" id="infoAccordionNavMenu">
                <div className="card">
                    <div className="card-body">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="infoAccordionNavMenu-headingOne">
                                <button className="card-title accordion-button" type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#infoAccordionNavMenu-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="infoAccordionNavMenu-collapseOne">
                                    <i className="fa-solid fa-user fa-xs pe-2"></i>Información
                                </button>
                            </h2>
                            <div id="infoAccordionNavMenu-collapseOne"
                                 className="accordion-collapse collapse show"
                                 aria-labelledby="infoAccordionNavMenu-headingOne"
                                 data-bs-parent="#infoAccordionNavMenu">
                                <div className="accordion-body">
                                    <p className={'m-0'}><span className={'fw-bold'}>Nombre: </span>{user.name}</p>
                                    <p className={'m-0'}><span
                                        className={'fw-bold'}>Documento: </span>({user.documentType.shortName}) {user.document}
                                    </p>
                                    <p className={'m-0'}><span className={'fw-bold'}>Teléfono: </span>{user.phone}</p>
                                    <p className={'m-0'}><span className={'fw-bold'}>Dirección: </span>{user.address}
                                    </p>
                                    <p className={'m-0'}><span
                                        className={'fw-bold'}>País: </span>{user.city.name}, {user.city.country.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <button className="btn btn-sm btn-primary w-100 shadow-sm"><i
                            className="fa-solid fa-pencil pe-2"></i>Actualizar
                        </button>
                    </div>
                </div>
            </div>

            <div className="accordion accordion-flush" id="recentTicketsAccordionNavMenu">
                <div className="card">
                    <div className="card-body">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="recentTicketsAccordionNavMenu-headingOne">
                                <button className="card-title accordion-button" type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#recentTicketsAccordionNavMenu-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="recentTicketsAccordionNavMenu-collapseOne">
                                    <i className="fa-solid fa-comments fa-xs pe-2"></i>Tickets Recientes
                                </button>
                            </h2>
                            <div id="recentTicketsAccordionNavMenu-collapseOne"
                                 className="accordion-collapse collapse show"
                                 aria-labelledby="recentTicketsAccordionNavMenu-headingOne"
                                 data-bs-parent="#recentTicketsAccordionNavMenu">
                                <div className="accordion-body">
                                    <div className="activity">
                                        {
                                            tickets.map(
                                                record =>
                                                    <div className="activity-item d-flex">
                                                        <div
                                                            className="activite-label pe-3">{record.creationDate[2]}/{record.creationDate[1]}/{record.creationDate[0]}</div>
                                                        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                                        <div className="activity-content">
                                                            {record.subject}
                                                        </div>
                                                    </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            -
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <Link to='/tickets/new' className='btn btn-sm btn-primary w-100 shadow-sm pe-2'>Abrir Ticket</Link>
                    </div>
                </div>
            </div>

            <div className="card recent-sales overflow-auto">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5 className="card-title"><i className="fa-solid fa-globe fa-xs pe-2"></i>Registrar Dominio</h5>
                    </div>
                    {
                        checkDomain.length > 0 && (
                            <div className="alert alert-primary alert-dismissible fade show" role="alert">

                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )
                    }


                    <form className="input-group mb-3">
                        <span className="input-group-text text-muted" id="basic-addon1">www.</span>

                        <div className="input-group has-validation">
                            <input
                                {...register("checkDomain", {
                                    required: 'Este campo es obligatorio',
                                    maxLength: {
                                        value: 60,
                                        message: 'La longitud máxima permitida es de 60 caracteres'
                                    },
                                    validate: findDomain.length === 0
                                })}
                                placeholder='dominio.com'
                                id='checkDomain'
                                className={`form-control shadow-none ${errors.checkDomain ? 'is-invalid' : 'is-valid'}`}
                            />
                            <div className={`${errors.checkDomain ? 'invalid' : 'valid'}-feedback`}>
                                {errors.checkDomain && <p>{errors.checkDomain.message}</p>}
                            </div>
                        </div>

                     {/*   <input
                            {...register("checkDomain", {
                                required: 'Este campo es obligatorio',
                                maxLength: {
                                    value: 60,
                                    message: 'La longitud máxima permitida es de 60 caracteres'
                                },
                            })}
                            placeholder='dominio.com'
                            id='checkDomain'
                            className={`form-control shadow-none ${errors.checkDomain ? 'is-invalid' : 'is-valid'}`}
                        />*/}
                        <button className="btn btn-primary" type="submit" id="button-addon1"><i
                            className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>

        </div>
    );
}