import React from 'react'
import { Link } from 'react-router-dom';

import Footer from './Footer';
const Login = () => {
    document.title = "Login";
    return (
        <>

            <header class="header">

                <nav class="navbar nav-1">
                    <section class="flex">
                        <Link to="home" class="logo"><i class="fas fa-house"></i>MyHome</Link>

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
                    </section >
                </nav >

            </header >
            <section class="form-container">

                <form action="" method="post">
                    <h3>welcome back!</h3>
                    <input type="email" name="email" required maxlength="50" placeholder="enter your email" class="box" />
                    <input type="password" name="pass" required maxlength="20" placeholder="enter your password" class="box" />
                    <p>don't have an account? <Link to="/register">register new</Link></p>
                    <input type="submit" value="login now" name="submit" class="btn" />
                </form>

            </section>

            <Footer/>



        </>
    )
}

export default Login
