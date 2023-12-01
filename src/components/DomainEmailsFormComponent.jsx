import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {request} from "../helpers/axios_helper";
import {useSidebar} from "./PanelComponent";
import {useForm} from "react-hook-form";

export const DomainEmailsFormComponent = () => {
    const {domainId, subdomainId} = useParams();
    const [domain, setDomain] = useState([]);
    const [emails, setEmails] = useState([]);
    const sidebar = useSidebar();
    const navigate = useNavigate();
    const {
        register,
        formState: {errors},
        handleSubmit,
        setValue
    } = useForm({
        mode: "onChange",
    });

    useEffect(() => {
        request("GET", `/domain/${domainId}`).then(response => setDomain(response.data));
        request("GET", `/domain/${domainId}/emails`).then(response => setEmails(response.data));

        if (subdomainId) {
                request("GET", `/domain_email/${subdomainId}`).then(response =>
                    setValue("domain_email", response.data.email));
        }

    }, [domainId, subdomainId, setValue, domain.name]);

    const onSubmit = (data) => {
        const requestMethod = subdomainId ? "PUT" : "POST";
        request(requestMethod, '/domain_email', {
            id: subdomainId,
            domain: {id: domain.id},
            email: data.email
        }).then(response => {
                navigate(`/domains/emails/${domainId}`)
            }
        );
    }

    return (
        <div className='section dashboard min-vh-100'>
            <div className='row'>
                <div className='col-lg-3'>{sidebar}</div>
                <div className='col-lg-9'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{subdomainId ? "Editar " : "Crear "} Correo</h5>

                            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-md-12">
                                    <label htmlFor="subdomain" className="form-label">Dirección de Correo</label>
                                    <div className="input-group has-validation">
                                        <input
                                            {...register("email", {
                                                required: 'Este campo es obligatorio',
                                                maxLength: {
                                                    value: 60,
                                                    message: 'La longitud máxima permitida es de 60 caracteres'
                                                },
                                                validate: (value) => {
                                                    return !emails.some(item => item.subdomain === (value + '.' + domain.name))
                                                        || 'Ya existe un correo con el mismo nombre';
                                                }
                                            })}
                                            id='subdomain'
                                            className={`form-control shadow-none ${errors.subdomain ? 'is-invalid' : 'is-valid'}`}
                                        />
                                        <span className="input-group-text text-muted"
                                              id="basic-addon1">.{domain.name}</span>
                                        <div className={`${errors.subdomain ? 'invalid' : 'valid'}-feedback`}>
                                            {errors.subdomain && <p>{errors.subdomain.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                    <Link to={`/domains/emails/${domainId}`}
                                          className={'btn btn-secondary'}>Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}