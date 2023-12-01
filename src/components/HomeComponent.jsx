export const HomeComponent = () => {
    return (
        <>
            <section id="hero">
                <div className="hero-container">
                    <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade"
                         data-bs-ride="carousel">

                        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                        <div className="carousel-inner" role="listbox">

                            <div className="carousel-item active"
                                 /*style="background-image: url(assets/img/slide/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.jpg)"*/>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate_animated animate_fadeInDown">Welcome
                                            to <span>ChibchaWeb</span></h2>
                                        <p className="animate_animated animate_fadeInUp">Our hosting solutions are
                                            designed to give you the speed and reliability you need to keep your website
                                            up and running smoothly. </p>
                                        <a href="contact.html"
                                           className="btn-get-started animate_animated animate_fadeInUp">Get Started</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate_animated fanimate_adeInDown">Learn to keep
                                            it <span>Simple</span></h2>
                                        <p className="animate_animated animate_fadeInUp">At ChibchaWeb, we're committed
                                            to helping you take your website to the next level. Our web hosting
                                            solutions are designed to provide you with the speed, flexibility, and
                                            reliability you need to succeed online.</p>
                                        <a href="" className="btn-get-started animate_animated animate_fadeInUp">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate_animated animate_fadeInDown">Reliable and Fast <span>Hosting Solutions</span>
                                        </h2>
                                        <p className="animate_animated animate_fadeInUp">At ChibchaWeb, we offer a range
                                            of hosting solutions designed to give you the speed and reliability you need
                                            to keep your website up and running. From shared hosting to dedicated
                                            servers, we have the right solution for your needs. Our team of experts is
                                            dedicated to providing you with the best possible service and support,
                                            ensuring that your website is always online and running smoothly.</p>
                                        <a href="" className="btn-get-started animate_animated animate_fadeInUp">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                        </a>

                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                        </a>

                    </div>
                </div>
            </section>

            <main id="main">
                <div id="buscar" className="input-group">
                    <input type="text" className="form-control" placeholder="Find your perfect Domain"
                           aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn" type="button" id="button-addon2">Search</button>
                </div>

                <section id="featured" className="featured">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <i className="bi bi-card-checklist"></i>
                                    <h3><a href="">Easy-to-Use Platform</a></h3>
                                    <p>Our platform is designed with ease-of-use in mind. Whether you're a seasoned web
                                        developer or you're just starting out, our platform makes it easy to manage your
                                        website and hosting.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="bi bi-bar-chart"></i>
                                    <h3><a href="">24/7 Support</a></h3>
                                    <p>At ChibchaWeb, we understand that your website is an important part of your
                                        business. That's why we offer 24/7 support to help you with any issues or
                                        questions you may have.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="bi bi-binoculars"></i>
                                    <h3><a href="">Affordable Pricing</a></h3>
                                    <p>We believe that everyone should have access to reliable and affordable hosting
                                        solutions. That's why we offer a range of pricing options to fit your needs and
                                        budget.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-6">
                                <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                                <br/>
                                <h3>Our Mission</h3>
                                <p className="fst-italic">
                                    ChibchaWeb is a technology company focused on providing reliable and affordable
                                    domain hosting services for individuals and groups. Our mission is to make it
                                    easy for anyone to establish a strong online presence. We believe that everyone
                                    should have access to professional and secure web hosting. That's why we offer a
                                    simple and straightforward registration process, as well as flexible pricing
                                    plans to fit any budget.
                                </p>
                                <br/>
                                <br/>
                                <h3>About us</h3>
                                <p className="fst-italic">At ChibchaWeb, we're passionate about technology
                                    and its potential to transform lives. Our team of experienced
                                    professionals is dedicated to providing the best possible service to our
                                    customers. We understand that your website is your online identity, and
                                    we take that responsibility seriously. That's why we offer 24/7
                                    technical support and a user-friendly platform to manage your domain
                                    hosting. Whether you're a blogger, entrepreneur, or small business
                                    owner, we're here to help you succeed online.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="services" className="services">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4><a href="">Lorem Ipsum</a></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4><a href="">Sed ut perspiciatis</a></h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4><a href="">Magni Dolores</a></h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4><a href="">Nemo Enim</a></h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-slideshow"></i></div>
                                    <h4><a href="">Dele cardo</a></h4>
                                    <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-arch"></i></div>
                                    <h4><a href="">Divera don</a></h4>
                                    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="clients" className="clients">
                    <div className="container">

                        <div className="section-title">
                            <h2>Clients</h2>
                            <p>Trust is the most important action for us, that's why we focus on giving the best
                                performance and thanks to all our clients we can asure that you can trust on us.</p>
                        </div>

                        <div className="clients-slider swiper">
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide"><img src="assets/img/clients/client-1.png"
                                                                   className="img-fluid" alt=""/></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-2.png"
                                                                   className="img-fluid" alt=""/></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-3.png"
                                                                   className="img-fluid" alt=""/></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-4.png"
                                                                   className="img-fluid" alt=""/></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-5.png"
                                                                   className="img-fluid" alt=""/></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-6.png"
                                                                   className="img-fluid" alt=""/></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-7.png"
                                                                   className="img-fluid" alt=""/></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-8.png"
                                                                   className="img-fluid" alt=""/></div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}