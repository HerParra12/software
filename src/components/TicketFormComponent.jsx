import {useSidebar} from "./PanelComponent";
import SimpleMDE from "react-simplemde-editor";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {getAuthToken, getUserData, request} from "../helpers/axios_helper";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

export const TicketFormComponent = () => {
    const [user] = useState(getUserData);
    const [message, setMessage] = useState("");
    const [ticketPriorities, setTicketPriorities] = useState([]);
    const navigate = useNavigate();
    const {
        register,
        formState: {errors},
        handleSubmit,
        setValue
    } = useForm({
        mode: "onChange",
    });

    const simpleMDERef = useRef(null);

    useEffect(() => {
        if (getAuthToken() == null && getAuthToken() === "null") {
            navigate("/login");
        } else {
            request("GET", "/ticket/ticketPriorities").then(response => setTicketPriorities(response.data));
        }
    }, [user, navigate]);

    const getSimpleMDEContent = () => {
            return simpleMDERef.current.value();
    }

    const onEditorChange = useCallback((value) => {
        setMessage(value);
    }, []);

    const onSubmit = (data) => {
        request("POST", "/ticket", {
            ticketPriority: {
                id: data.ticketPriority
            },
            user: {
                id: user.id
            },
            subject: data.subject,
            message: message
        }).then(() => navigate("/tickets"));
    }

    return (
        <div className='section dashboard min-vh-100'>
            <div className="row">
                <div className="col-lg-3">{useSidebar()}</div>

                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Abrir Ticket</h5>
                            <form className="row g-3 needs-validation" noValidate='true'
                                  onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control shadow-none" disabled id="name"
                                           value={user.name}/>
                                </div>

                                <div className="col-12 col-md-6">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control shadow-none" disabled id="email"
                                           value={user.email}/>
                                </div>

                                <div className="col-12 col-md-8">
                                    <label htmlFor="subject" className="form-label">Asunto</label>
                                    <input
                                        {...register("subject", {
                                            required: 'Este campo es obligatorio',
                                            maxLength: {
                                                value: 100,
                                                message: 'La longitud máxima permitida es de 100 caracteres'
                                            },
                                        })}
                                        id='subject'
                                        className={`form-control shadow-none ${errors.subject ? 'is-invalid' : 'is-valid'}`}
                                    />
                                    <div className={`${errors.subject ? 'invalid' : 'valid'}-feedback`}>
                                        {errors.subject && <p>{errors.subject.message}</p>}
                                    </div>
                                </div>

                                {/*
                                <div className="col-6 col-md-2">
                                    <label htmlFor="service" className="form-label">Servicio</label>
                                    <select
                                        {...register("service", {
                                            required: 'Este campo es obligatorio',
                                        })}
                                        id="service"
                                        className="form-select shadow-none"
                                    >
                                        <option selected="">Seleccionar...</option>
                                        <option></option>
                                    </select>
                                </div>*/}

                                <div className="col-6 col-md-2">
                                    <label htmlFor="ticketPriority" className="form-label">Prioridad</label>
                                    <select
                                        {...register("ticketPriority", {
                                            required: 'Este campo es obligatorio',
                                        })}
                                        id="ticketPriority"
                                        className="form-select shadow-none"
                                    >
                                        <option selected disabled>Seleccionar...</option>
                                        {
                                            ticketPriorities.map(option =>
                                                <option key={option.id} value={option.id}>{option.name}</option>
                                            )
                                        }
                                    </select>
                                    <div className={`${errors.subject ? 'invalid' : 'valid'}-feedback`}>
                                        {errors.subject && <p>{errors.subject.message}</p>}
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="message">Mensaje</label>
                                    <SimpleMDE value={message} onChange={onEditorChange}/>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="file" className="form-label">Archivo Adjunto</label>
                                    <input type="file" className="form-control shadow-none" id="file"/>
                                    <small className="text-muted">Extensiones permitidas: .jpg, .gif, .jpeg, .png,
                                        .pdf,
                                        .txt,
                                        .xml, .doc, .docx, .xlsx, .zip, .sql, .tar, .rar, .mp4, .csr, .tat.gz (Tamaño
                                        máximo permitido: 4096MB)</small>
                                </div>

                                <div className="d-flex flex-row-reverse">
                                    <button type="button" className="btn btn-secondary m-1">Cancelar</button>
                                    <button type="submit" className="btn btn-primary m-1">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}