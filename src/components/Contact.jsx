import React from 'react';
import Nav from './Nav';
import imgs from "./images/contact-img.svg";
import Footer from './Footer';

const Contact = () => {
    document.title = "Contact Us";

    return (
        <>
            <Nav />
            <section className="contact">
                <div className="row">
                    <div className="image">
                        <img src={imgs} alt="" />
                    </div>
                    <div className="contact-form">
                        <h3>Get in Touch</h3>
                        <form action="" method="post">
                            <input type="text" name="name" required maxLength="50" placeholder="Enter your name" className="box" />
                            <input type="email" name="email" required maxLength="50" placeholder="Enter your email" className="box" />
                            <input type="number" name="number" required maxLength="10" max="9999999999" min="0" placeholder="Enter your number" className="box" />
                            <textarea name="message" placeholder="Enter your message" required maxLength="1000" cols="30" rows="10" className="box"></textarea>
                            <input type="submit" value="Send Message" name="send" className="btn" />
                        </form>
                    </div>
                </div>
            </section>
            
            <div className="contact-info">
                <h3>Contact Information</h3>
                <ul>
                    <li>Phone: +254798491946</li>
                    <li>Email: abdulabass1738@gmail.com</li>
                    <li>Address: Nairobi, Kenya</li>
                </ul>
            </div>

            <div className="useful-links">
                <h3>Useful Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/saved-properties">Saved Properties</a></li>
                </ul>
            </div>

            <div className="social-media-handles">
                <h3>Social Media Handles</h3>
                <ul>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://www.twitter.com/">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                </ul>
            </div>

            <div className="copyright">
                <p>&copy; 2023 Copyright reserved to: Kunal Sa</p>
            </div>
            
            <Footer />
        </>
    )
}

export default Contact;
