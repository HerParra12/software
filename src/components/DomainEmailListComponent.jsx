import {useEffect, useState} from "react";
import {getAuthToken, getUserData, request} from "../helpers/axios_helper";
import {useNavigate, useParams} from "react-router-dom";
import {useSidebar} from "./PanelComponent";
import GenericListComponent from "./GenericListComponent";

export const DomainEmailListComponent = () => {
    const [emails, setemails] = useState([]);
    const [user] = useState(getUserData);
    const navigate = useNavigate();
    const sidebar = useSidebar();
    const {id} = useParams();

    const columns = [
        {label: "Dominio", field: "domain", format: (value) => value.name},
        {label: "Dirección de Correo", field: "email"},
    ];

    const actions = [
        {label: "Crear Dirección", link: "/", icon: "bi bi-info-circle", section: "card"},
        {label: "Modificar Dirección", link: "/", icon: "bi bi-info-circle", section: "dropdown"},
        {label: "Eliminar Dirección", link: "/", icon: "bi bi-info-circle", section: "dropdown"},
    ];

    useEffect(() => {
        if (getAuthToken() == null && getAuthToken() === "null") {
            navigate("/login");
        } else {
            request("GET", `/domain/${id}/emails`).then(response => setemails(response.data));
        }
    }, [id, user, navigate]);

    return (
        <div className='section dashboard min-vh-100'>
            <div className='row'>
                <div className='col-lg-3'>{sidebar}</div>

                <div className='col-lg-9'>
                    <GenericListComponent cardTitle={'Lista de Correos'} records={emails} columns={columns} actions={actions}/>
                </div>
            </div>
        </div>
    );
}