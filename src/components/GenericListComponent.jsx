import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuthToken, getUserData, request} from "../helpers/axios_helper";
import {useSidebar} from "./PanelComponent";

const GenericListComponent = ({cardTitle, requestUrl, columns, actions}) => {
    const [user] = useState(getUserData);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const sidebar = useSidebar();
    const {recordId} = useParams();

    useEffect(() => {
        if (getAuthToken() == null && getAuthToken() === "null") {
            navigate("/login");
        } else {
            request("GET", requestUrl.replace("{RECORD_ID}", recordId)).then(response => setData(response.data));
        }
    }, [user, navigate]);

    const formatValue = (record, field, format) => {
        const value = record[field];
        if (value == null) {
            return "";
        }

        if (format) {
            return format(value);
        }
        return value;
    }

    return (
        <div className='section dashboard min-vh-100'>
            <div className='row'>
                <div className='col-lg-3'>{sidebar}</div>

                <div className='col-lg-9'>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title">{cardTitle}</h5>
                                <div className='btn-group'>
                                    {actions
                                        .filter(action => action.section === "card")
                                        .map((filteredAction, index) => (
                                            <Link to={filteredAction.link.replace("{RECORD_ID}", recordId)} key={index}
                                                  className="btn btn-primary">
                                                <i className={`${filteredAction.icon} pe-2`}></i><span>{filteredAction.label}</span>
                                            </Link>
                                        ))}
                                </div>
                            </div>

                            <table className="table">
                                <thead>
                                <tr>
                                    {columns.map((column, index) =>
                                        <th key={index} scope='col'>{column.label}</th>
                                    )}
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    data.map(record =>
                                        <tr key={record.id} className={'align-middle'}>
                                            {columns.map((column, index) =>
                                                <td key={index}>{formatValue(record, column.field, column.format)}</td>)}

                                            <td>
                                                {actions.filter(action => action.section === "dropdown").length === 1 ? (
                                                    actions
                                                        .filter(action => action.section === "dropdown")
                                                        .map((filteredAction, index) => (
                                                            <Link
                                                                to={filteredAction.link.replace(":id", record.id).replace("{RECORD_ID}", recordId)}
                                                                key={index}
                                                                className="btn btn-sm rounded-0 btn-primary"
                                                            >
                                                                <i className={`${filteredAction.icon} pe-2`}></i>
                                                                <span>{filteredAction.label}</span>
                                                            </Link>
                                                        ))
                                                ) : (
                                                    <>
                                                        <button className="btn btn-default border-0"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <h6 className="dropdown-header">Opciones</h6>
                                                            </li>
                                                            <li>
                                                                <hr className="dropdown-divider"/>
                                                            </li>
                                                            {actions
                                                                .filter(action => action.section === "dropdown")
                                                                .map((filteredAction, index) => (
                                                                    <Link
                                                                        to={filteredAction.link.replace(":id", record.id).replace("{RECORD_ID}", recordId)}
                                                                        key={index}
                                                                        className="dropdown-item d-flex align-items-center"
                                                                    >
                                                                        <i className={`${filteredAction.icon}`}></i>
                                                                        <span>{filteredAction.label}</span>
                                                                    </Link>
                                                                ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </td>


                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GenericListComponent;