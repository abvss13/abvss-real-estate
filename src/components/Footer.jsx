import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <footer class="bg-gray-800 text-white p-">


                <section class="flex">

                    <div class="container mx-auto text-center">

                        <h1 class="text-uppercase fw-bold mb-4">
                            Contact</h1>
                        <p>
                            <h3>
                                <i class="fas fa-phone me-3"></i>7023672100 </h3></p>
                        <p>
                            <h3>
                                <i class="fas fa-phone me-3"></i>9458340172 </h3></p>
                        <p>
                            <h3>
                                <i class="fas fa-envelope me-3"></i>
                                estate3@gmail.com
                            </h3></p>
                        <p><h3><i class="fas fa-home me-3"></i>Jaipur, India-302001 </h3></p>
                    </div>
                    <br />


                    <div class="container mx-auto text-center">

                        <div class="row mt-3">



                            <div class="container mx-auto text-center">

                                <h1 class="text-uppercase fw-bold mb-4">
                                    Useful Links
                                </h1>
                                <p>
                                    <h3>
                                        <Link to="/home"><span>home</span></Link>
                                    </h3></p>
                                <p>
                                    <h3>
                                        <Link to="/about"><span>about</span></Link>
                                    </h3></p>
                                <p>
                                    <h3>
                                        <Link to="/contact"><span>contact</span></Link>

                                    </h3> </p>
                                <p>
                                    <h3>
                                        <Link to="#"><span>saved properties</span></Link>
                                    </h3>
                                </p>
                            </div>
                            <br />

                            <div class="container mx-auto text-center">

                                <h1 class="text-uppercase fw-bold mb-4">
                                    Social Media Handles
                                </h1>
                                <p>

                                    <h3>
                                        <Link to="#"> <i class="fab fa-facebook-f"></i><span>facebook</span></Link>
                                    </h3>
                                </p>
                                <p>
                                    <h3>
                                        <Link to="#"><i class="fab fa-twitter"></i><span>twitter</span></Link>
                                    </h3>
                                </p>
                                <p>
                                    <h3>
                                        <Link to="#"><i class="fab fa-linkedin"></i><span>linkedin</span></Link>

                                    </h3>  </p>
                                <p>
                                    <h3>
                                        <Link to="#"><i class="fab fa-instagram"></i><span>instagram</span></Link>

                                    </h3> </p>
                            </div>

                        </div>

                    </div >
                </section >

                <div class="container mx-auto text-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2023 Copyright reserved to : Kunal Saxena

                </div>

            </footer >

        </>
    )
}

export default Footer
