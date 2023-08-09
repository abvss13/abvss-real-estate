import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from './images/about-img.svg';
import step1 from './images/step-1.png';
import step2 from './images/step-2.png';
import step3 from './images/step-3.png';
import pic1 from './images/pic-1.png';
import pic2 from './images/pic-2.png';
import pic3 from './images/pic-3.png';
import Footer from './Footer';

const About = () => {
    document.title = "About Us"
    return (
        <>

            <header class="header">

                <nav class="navbar nav-1">
                    <section class="flex">
                        <Link to="/home" class="logo"><i class="fas fa-house"></i>MyHome</Link>

                        <ul>
                            <li><Link to="#">post property<i class="fas fa-paper-plane"></i></Link></li>
                        </ul>
                    </section>
                </nav>

                <nav class="navbar nav-2">
                    <section class="flex">
                        <div id="menu-btn" class="fas fa-bars"></div>

                        <div class="menu">
                            <ul>
                                <li><Link to="#">buy<i class="fas fa-angle-down"></i></Link>
                                    <ul>
                                        <li><Link to="#">house</Link></li>
                                        <li><Link to="#">flat</Link></li>
                                        <li><Link to="#">shop</Link></li>
                                        <li><Link to="#">ready to move</Link></li>
                                        <li><Link to="#">furnished</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">sell<i class="fas fa-angle-down"></i></Link>
                                    <ul>
                                        <li><Link to="#">post property</Link></li>
                                        <li><Link to="#">dashboard</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">rent</Link>
                                    <ul>
                                        <li><Link to="#">house</Link></li>
                                        <li><Link to="#">flat</Link></li>
                                        <li><Link to="#">shop</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">help<i class="fas fa-angle-down"></i></Link>
                                    <ul>
                                        <li><Link to="/about">about us</Link></li>
                                        <li><Link to="/contact">contact us</Link></li>
                                        <li><Link to="/contact#faq">FAQ</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <ul>
                            <li><Link to="#">saved <i class="far fa-heart"></i></Link></li>
                            <li><Link to="#">account <i class="fas fa-angle-down"></i></Link>
                                <ul>
                                    <li><Link to="/login">login</Link></li>
                                    <li><Link to="/register">register</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </nav>

            </header>


            <section class="about">

                <div class="row">
                    <div class="image">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div class="content">
                        <h3>why choose us?</h3>
                        <p>We have a proven track record of successful real estate transactions and satisfied clients. Our reputation speaks for itself, and we have built a strong presence in the market based on our reliable and efficient services.</p>
                        <Link to="/contact" class="inline-btn">contact us</Link>
                    </div>
                </div>

            </section>

            <section class="steps">

                <h1 class="heading">3 simple steps</h1>

                <div class="box-container">

                    <div class="box">
                        <img src={step1} alt="" />
                        <h3>search property</h3>

                    </div>

                    <div class="box">
                        <img src={step2} alt="" />
                        <h3>contact agents</h3>

                    </div>

                    <div class="box">
                        <img src={step3} alt="" />
                        <h3>enjoy property</h3>

                    </div>

                </div>

            </section>


            <section class="reviews">

                <h1 class="heading">client's reviews</h1>

                <div class="box-container">

                    <div class="box">
                        <div class="user">
                            <img src={pic1} alt="" />
                            <div>
                                <h3>shubham</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p>The houses and apartments are perfect fully furnished and all facilities are provided no need to worry after purchasing houses from them. </p>
                    </div>

                    <div class="box">
                        <div class="user">
                            <img src={pic2} alt="" />
                            <div>
                                <h3>shrey</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p>Best facilities are provided by them in these particular areas</p>
                    </div>

                    <div class="box">
                        <div class="user">
                            <img src={pic3} alt="" />
                            <div>
                                <h3>Rishab</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p>Perfect houses</p>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default About
