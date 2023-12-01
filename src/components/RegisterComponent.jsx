import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuthToken, request} from "../helpers/axios_helper";

export const RegisterComponent = () => {
    const [documentType, setDocumentType] = useState('');
    const [document, setDocument] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [documentTypes, setDocumentTypes] = useState([]);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (getAuthToken() != null && getAuthToken() !== "null") {
            navigate("/panel")
        } else {
            request("GET", "/util/countries", {}).then(response => setCountries(response.data));
            request("GET", "/util/documentTypes", {}).then(response => setDocumentTypes(response.data));
            if (country && country !== "Seleccionar...") {
                request("GET", "/util/countries/" + country + "/cities").then(response => setCities(response.data));
            }
        }
    }, [country, navigate]);

    const submitForm = async (e) => {
        e.preventDefault();
        let record = {
            documentType: {id: parseInt(documentType, 10)},
            document: document,
            name: name,
            city: {id: parseInt(city, 10)},
            address: address,
            phone: phone,
            email: email,
            password: password
        };
        request("POST", "/user", record).then(response => navigate("/register/verify", { state: {user: response.data }}));
    }

    return (
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center py-4">
                            <Link to={'/'} className={'d-flex align-items-center w-auto'}>
                                {/*<img src={logo} width={100} height={80} alt=""/>*/}
                            </Link>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">

                                <div className="pt-4 pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">¡Bienvenido! :D</h5>
                                    <p className="text-center small">Ingresa tus datos personales para continuar</p>
                                </div>

                                <form className="row g-3 needs-validation">
                                    <div className='col-12 col-md-6'>
                                        <label htmlFor='documentType' className="form-label text-muted">Tipo de
                                            Documento</label>
                                        <select name='documentType' /* value={this.state[name]} */
                                                onChange={(e) => setDocumentType(e.target.value)}
                                                className="form-select shadow-none"
                                                id='documentType'
                                        >
                                            <option defaultValue="">Seleccionar...</option>
                                            {
                                                documentTypes.map(option =>
                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label htmlFor="document" className="form-label text-muted">Número de
                                            Documento</label>
                                        <input
                                            id='document'
                                            type='text'
                                            name='document'
                                            className='form-control shadow-none'
                                            value={document}
                                            onChange={(e) => setDocument(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="name" className="form-label text-muted">Nombre</label>
                                        <input
                                            id='name'
                                            type='text'
                                            name='name'
                                            className='form-control shadow-none'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className='col-12 col-md-6'>
                                        <label htmlFor='country' className="form-label text-muted">País</label>
                                        <select name='country' /* value={this.state[name]} */
                                                onChange={(e) => setCountry(e.target.value)}
                                                className="form-select shadow-none"
                                                id='country'
                                        >
                                            <option defaultValue="">Seleccionar...</option>
                                            {
                                                countries.map(option =>
                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>

                                    <div className='col-12 col-md-6'>
                                        <label htmlFor='city' className="form-label text-muted">Ciudad</label>
                                        <select name='city' /* value={this.state[name]} */
                                            // disabled='true'
                                                onChange={(e) => setCity(e.target.value)}
                                                className="form-select shadow-none"
                                                id='city'
                                        >
                                            <option defaultValue="">Seleccionar...</option>
                                            {
                                                cities.map(option =>
                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <label htmlFor="address" className="form-label text-muted">Dirección</label>
                                        <input
                                            id='address'
                                            type='text'
                                            name='address'
                                            className='form-control shadow-none'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <label htmlFor="phone" className="form-label text-muted">Número de
                                            Teléfono</label>
                                        <input
                                            id='phone'
                                            type='number'
                                            name='phone'
                                            className='form-control shadow-none'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-12 col-md-7">
                                        <label htmlFor="email" className="form-label text-muted">Correo
                                            Electrónico</label>
                                        <input
                                            id='email'
                                            type='email'
                                            name='email'
                                            className='form-control shadow-none'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-12 col-md-5">
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
                                            <input className="form-check-input shadow-none rounded-0" name="terms"
                                                   type="checkbox" value="" id="acceptTerms" required=""/>
                                            <label className="form-check-label" htmlFor="acceptTerms">Estoy de acuerdo y
                                                acepto los <Link to={'/terms-and-conditions'} className={'a-primary'}>términos
                                                    y condiciones</Link>.</label>
                                            <div className="invalid-feedback">You must agree before submitting.</div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100" type="submit" onClick={(e) => submitForm(e)}>Crear Cuenta</button>
                                    </div>
                                    <div className="col-12">
                                        <p className="small mb-0">¿Ya eres nuestro cliente? :O <Link to={'/login'} className={'a-primary'}>Inicia sesión aquí</Link>.</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterComponent;