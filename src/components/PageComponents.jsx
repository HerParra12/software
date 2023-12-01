import {Link} from "react-router-dom";

export const useHeader = () => {
    return (
        <header id="header" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                    <h1><Link to={'/'}>ChibchaWeb</Link></h1>
                    {/* <a href="index.html"><img src={logo} alt="" className="img-fluid" /></a> */}
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to={'/'} className={'active'}>Inicio</Link></li>
                        <li><Link to={'/about'}>Nosotros</Link></li>
                        <li><Link to={'/hostings'}>Paquetes de Hosting</Link></li>
                        <li><Link to={'/domains'}>Registro de Dominios</Link></li>
                        <li><Link to={'/domains'}>Transferencia de Dominios</Link></li>
                        <li className="dropdown ps-3">
                            <button className={'btn btn-sm btn-primary'}>Cuenta <i
                                className="fa-solid fa-2xs fa-chevron-down"></i></button>
                            <ul>
                                <Link to={'/panel'}>Área de Cliente</Link>
                                <Link to={'/domains'}>Mis Dominios</Link>
                                <Link to={'/services'}>Mis Servicios</Link>
                                <Link to={'/tickets'}>Mis Tickets</Link>
{/*                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i
                                    className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>*/}
                            </ul>
                        </li>

                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export const useFooter = () => {
    return (
        <footer id='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Navegación</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to={'/'}>Inicio</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to={'/'}>Nosotros</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to={'/'}>Mi Cuenta</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to={'/'}>Términos y condiciones</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to={'/'}>Política de privacidad</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Nuestros Servicios</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to={'/'}>Paquetes de hosting</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to={'/'}>Registro de dominios</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to={'/'}>Transferencia de dominios</Link></li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contáctanos</h4>
                            <p>
                                Ak. 9 #131a-2 <br/>
                                Usaquén, Bogotá<br/>
                                Colombia <br/><br/>
                                <strong>Teléfono:</strong> +57 313 235 1692<br/>
                                <strong>Email:</strong> contact@chibchaweb.com<br/>
                            </p>
                            <div className="social-links mt-3">
                                <a href="https://web.whatsapp.com" className="google-plus"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="https://instagram.com" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://twitter.com" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                                <a href="https://facebook.com" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                                <a href="https://tiktok.com" className="linkedin"><i className="fa-brands fa-tiktok"></i></a>
                                <a href="https://linkedin.com" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-info">
                            <h4>Acerca de ChibchaWeb</h4>
                            <p>Bienvenido a ChibchaWeb, tu socio confiable para alojamiento y registro de dominios. Nosotros
                                ofrecemos servicios de alta calidad con una sólida infraestructura para mejorar tu experiencia en línea.
                                Ya sea que seas un emprendedor o una corporación, confía en ChibchaWeb para elevar
                                tu éxito en línea. ¡Tu satisfacción es nuestra prioridad!</p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

