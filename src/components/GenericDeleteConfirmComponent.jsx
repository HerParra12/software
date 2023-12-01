import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {request} from "../helpers/axios_helper";

const GenericDeleteConfirmComponent = ({nameField, mapper, navigateLink}) => {
    const {recordId} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        request("GET", `/${mapper}/${recordId}`).then(response => setData(response.data));
    }, [mapper, recordId]);

    const submit = () => {
        request("DELETE", `/${mapper}/${recordId}`).then(() => {
            navigate(navigateLink);
        })
    }

    return (
        <section
            className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 d-flex flex-column align-items-center justify-content-center">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="pt-4 pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">¡Espera! D:</h5>
                                    <p className="text-center small">¿Realmente quieres eliminar
                                        el registro "<strong className="text-primary-emphasis">{data[nameField]}</strong>"?
                                    </p>
                                    <div className='text-center'>
                                        <Link
                                            to={navigateLink.replace(":id", recordId)}
                                            className="btn btn-primary"
                                            onClick={submit}
                                        >Confirmar</Link>
                                        <Link
                                            to={navigateLink.replace(":id", recordId)}
                                            className="btn btn-secondary"
                                        >Cancelar</Link>
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
export default GenericDeleteConfirmComponent;