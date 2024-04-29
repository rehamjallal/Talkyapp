import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import logo from '../images/logo.png';
import logoSvg from '../images/logoSvg.svg';
import home from '../images/home.jpg';
function Footer() {
    return (
        <footer className="footer" style={{ backgroundColor: '#f9f9f9', paddingTop: '50px', paddingBottom: '50px' }}>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={3} className="footer-col">
                        <div className='logoDiv'>
                            <img className='logo' src={logoSvg} alt="Logo" />
                            <h4>Talky</h4>
                            <span>.com</span>
                        </div>
                        {/* <img src={logo} alt="Talky Logo" className="footer-logo" /> */}
                        <p style={{ color: '#555', marginTop: '20px' }}>Talky is a free platform that helps you learn different languages in a fun and interactive way. Our mission is to make language learning simple, enjoyable, and accessible to everyone.</p>
                    </MDBCol>
                    <MDBCol md={3} className="footer-col">
                        <h3 style={{ color: '#0F7771' }}>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Languages</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </MDBCol>
                    <MDBCol md={3} className="footer-col">
                        <h3 style={{ color: '#0F7771' }}>Contact Us</h3>
                        <p style={{ color: '#555' }}>123 Talky Street, Languageville, LV 12345</p>
                        <p style={{ color: '#555' }}>Email: info@talky.com</p>
                    </MDBCol>
                    <MDBCol md={3} className="footer-col">
                        <h3 style={{ color: '#0F7771' }}>Follow Us</h3>
                        <ul className="social-icons d-flex" style={{}}>
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                        </ul>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md={6} className="footer-col">
                        <h3 style={{ color: '#0F7771' }}>Subscribe to Our Newsletter</h3>
                        <form className="form-inline align-items-center">
                            <input
                                className="form-control mb-3"
                                id="inlineFormInput"
                                style={{ width: '15rem' }}
                                placeholder="Enter your email"
                            />
                            <MDBBtn type="submit" style={{ backgroundColor: '#0F7771', outline: 'none', border: 'none' }} className="mb-2 btn-subscribe">
                                Subscribe
                            </MDBBtn>
                        </form>
                    </MDBCol>
                    <MDBCol md={6} className="footer-col">
                        <h3 style={{ color: '#0F7771' }}>Our Partners</h3>
                        <p style={{ color: '#555' }}>Join Talky's community of language learners and partners to get access to exclusive offers and discounts from our partners.</p>
                        <ul className="partner-logos d-flex">
                            <li><img src={home} style={{ width: '3rem', marginLeft: '20px', borderRadius: '5px' }} alt="Partner 1" /></li>
                            <li><img src={home} style={{ width: '3rem', marginLeft: '20px', borderRadius: '5px' }} alt="Partner 2" /></li>
                            <li><img src={home} style={{ width: '3rem', marginLeft: '20px', borderRadius: '5px' }} alt="Partner 3" /></li>
                            <li><img src={home} style={{ width: '3rem', marginLeft: '20px', borderRadius: '5px' }} alt="Partner 4" /></li>
                        </ul>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="text-center">
                        <hr></hr>
                        <p className="footer-bottom-text" style={{ color: '#555', marginTop: '20px' }}>&copy; 2024 Talky. All rights reserved.</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </footer>
    );
}

export default Footer;
