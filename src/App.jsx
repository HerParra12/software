import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useHeader, useFooter} from './components/PageComponents';
import {LoginComponent} from "./components/LoginComponent";
import {PanelComponent} from "./components/PanelComponent";
import RegisterComponent from "./components/RegisterComponent";
import {RegisterVerify} from "./components/RegisterVerify";
import {DomainEmailListComponent} from "./components/DomainEmailListComponent";
import {HomeComponent} from "./components/HomeComponent";
import {SubdomainFormComponent} from "./components/SubdomainFormComponent";
import GenericDeleteConfirmComponent from "./components/GenericDeleteConfirmComponent";
import GenericListComponent from "./components/GenericListComponent";
import {useState} from "react";
import {getUserData} from "./helpers/axios_helper";
import {TicketFormComponent} from "./components/TicketFormComponent";
import TicketDetailComponent from "./components/TicketDetailComponent";
import {DomainEmailsFormComponent} from "./components/DomainEmailsFormComponent";

function App() {
    const header = useHeader();
    const footer = useFooter();
    const [user] = useState(getUserData);

    return (
        <BrowserRouter>
            <div>
                {header}
                <main id='main' className='main'>
                    <Routes>
                        <Route path="/login" element={<LoginComponent/>}></Route>
                        <Route path="/register" element={<RegisterComponent/>}></Route>
                        <Route path="/register/verify" element={<RegisterVerify/>}></Route>
                        <Route path="/panel" element={<PanelComponent/>}></Route>
                        <Route path="/tickets/new" element={<TicketFormComponent/>}></Route>
                        <Route path="/domains" element={<GenericListComponent
                            cardTitle='Mis Dominios'
                            requestUrl={`/domain/${user ? user.id : 0}/list`}
                            columns={[
                                {label: "Dominio", field: "name"},
                                {label: "Fecha de Registro", field: "registerDate", format: (value) => `${value[2]}/${value[1]}/${value[0]}`},
                                {label: "Fecha de Vencimiento", field: "expireDate", format: (value) => `${value[2]}/${value[1]}/${value[0]}`},
                            ]}
                            actions={[
                                {label: "Registrar Dominio", link: "/domains/register", icon: "bi bi-info-circle", section: "card"},
                                {label: "Gestionar Correos", link: "/domains/emails/:id", icon: "bi bi-info-circle", section: "dropdown"},
                                {label: "Gestionar Subdominios", link: "/domains/subdomains/:id", icon: "bi bi-info-circle", section: "dropdown"},
                            ]}
                        />}></Route>

                        <Route path="/domains/subdomains/:recordId" element={<GenericListComponent
                            cardTitle='Lista de Subdominios'
                            requestUrl={`/domain/{RECORD_ID}/subdomains`}
                            columns={[
                                {label: "Dominio", field: "domain", format: (value) => value.name},
                                {label: "Subdominio", field: "subdomain"},
                            ]}
                            actions={[
                                {label: "Crear Dominio", link: `/domains/subdomains/{RECORD_ID}/add`, icon: "bi bi-info-circle", section: "card"},
                                {label: "Modificar Registro", link: `/domains/subdomains/{RECORD_ID}/edit/:id`, icon: "bi bi-info-circle", section: "dropdown"},
                                {label: "Eliminar Registro", link: `/domains/subdomains/{RECORD_ID}/delete/:id`, icon: "bi bi-info-circle", section: "dropdown"},
                            ]}
                        />}></Route>

                        <Route path="/domains/emails/:recordId" element={<GenericListComponent
                            cardTitle='Lista de Correos'
                            requestUrl={`/domain/{RECORD_ID}/emails`}
                            columns={[
                                {label: "Correo Electrónico", field: "email"},
                            ]}
                            actions={[
                                {label: "Crear Correo", link: `/domains/emails/{RECORD_ID}/add`, icon: "bi bi-info-circle", section: "card"},
                                {label: "Modificar Correo", link: `/domains/emails/{RECORD_ID}/edit/:id`, icon: "bi bi-info-circle", section: "dropdown"},
                                {label: "Eliminar Correo", link: `/domains/emails/{RECORD_ID}/delete/:id`, icon: "bi bi-info-circle", section: "dropdown"},
                            ]}
                        />}></Route>

                        <Route path="/tickets" element={<GenericListComponent
                            cardTitle='Mis Tickets'
                            requestUrl={`/ticket`}
                            columns={[
                                {label: "Fecha de Creación", field: "creationDate", format: (value) => `${value[2]}/${value[1]}/${value[0]}`},
                                {label: "Asunto", field: "subject"},
                                {label: "Fecha de Última Actualización", field: "lastReplyDate", format: (value) => `${value[2]}/${value[1]}/${value[0]}`},
                                {label: "Prioridad", field: "ticketPriority", format: (value) => value.name},
                                {label: "Estado", field: "ticketStatus", format: (value) => value.name},
                            ]}
                            actions={[
                                {label: "Detalles", link: "/tickets/details/:id", icon: "bi bi-info-circle", section: "dropdown"},
                            ]}
                        />}></Route>
                        <Route path="/tickets/details/:ticketId" element={<TicketDetailComponent/>}></Route>

                        {/*<Route path="/domains/subdomains/:domainId" element={<SubdomainListComponent/>}></Route>*/}
                        <Route path="/domains/subdomains/:domainId/add" element={<SubdomainFormComponent/>}></Route>
                        <Route path="/domains/emails/:domainId/add" element={<DomainEmailsFormComponent/>}></Route>
                        <Route path="/domains/subdomains/:domainId/edit/:subdomainId"
                               element={<SubdomainFormComponent/>}></Route>
                        <Route path="/domains/emails/:domainId/edit/:subdomainId"
                               element={<DomainEmailsFormComponent/>}></Route>
                        <Route path="/domains/subdomains/:domainId/delete/:recordId"
                               element={<GenericDeleteConfirmComponent nameField='subdomain' mapper='subdomain'
                                                                       navigateLink='/domains'/>}></Route>
                        <Route path="/domains/emails/:id" element={<DomainEmailListComponent/>}></Route>

                        <Route path="/domains/emails/:domainId/delete/:recordId"
                               element={<GenericDeleteConfirmComponent nameField='email' mapper='domain_email'
                                                                       navigateLink='/domains'/>}></Route>


                        <Route path="/users" element={<GenericListComponent
                            cardTitle='Lista de Usuarios'
                            requestUrl={`/user`}
                            columns={[
                                {label: "Nombre", field: "name"},
                                {label: "Tipo de Documento", field: "documentType", format: (value) => `${value.name}`},
                                {label: "Número de Documento", field: "document"},
                                {label: "Correo Electrónico", field: "email"},
                                {label: "Teléfono", field: "phone"},
                                {label: "Dirección", field: "address"},
                                {label: "País", field: "city", format: (value) => `${value.name}, ${value.country.name}`},
                            ]}
                            actions={[
                                {label: "Crear Usuario", link: "/domains/emails/:id", icon: "bi bi-info-circle", section: "card"},
                                {label: "Detalles", link: "/domains/emails/:id", icon: "bi bi-info-circle", section: "dropdown"},
                                {label: "Modificar", link: "/domains/emails/:id", icon: "bi bi-info-circle", section: "dropdown"},
                                {label: "Eliminar", link: "/domains/subdomains/:id", icon: "bi bi-info-circle", section: "dropdown"},
                            ]}
                        />}></Route>
                        <Route path="/" element={<HomeComponent/>}></Route>
                    </Routes>
                </main>
                {footer}
            </div>
        </BrowserRouter>
    );
}

export default App;
