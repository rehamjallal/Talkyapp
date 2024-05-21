import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple, FaTwitter } from "react-icons/fa";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoSvg from '../images/logoSvg.svg';
import Tosignimg from '../images/Tosignimg.png';

import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

function SocialLoginButton({ icon, text, color }) {
    return (
        <MDBBtn className='social-btn' style={{ outline: "none", borderRadius: '20px', border: "none", backgroundColor: color ? color : "white", color: color ? "white" : "#7DAC76", width: '100%', height: '3rem', marginBottom: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', position: "relative" }}>
            {icon} <span style={{ marginLeft: '10px' }}>{text}</span>
        </MDBBtn>
    )
}

function Tosign() {
    return (
        <MDBContainer fluid className='toSignBody' style={{ backgroundColor: '#ffffff' }}>
            <MDBCard className='toSignCard'>
                <MDBCardBody>
                    <MDBRow className="no-gutters">
                        <MDBCol md='12' lg='6' className='order-2 order-lg-2 d-flex flex-column'>
                            <div className="inputs" style={{ textAlign: "center", justifyContent: 'center', alignItems: "center" }}>
                                <div className='logoCreate'>
                                    <Navbar.Brand href="#home">
                                        <div className='logoDiv'>
                                            <img className='logo' src={logoSvg} alt="Logo" />
                                            <h4>Talky</h4>
                                            <span>.com</span>
                                        </div>
                                    </Navbar.Brand>
                                    <p style={{ paddingTop: '1rem'}}>Already have an account? <Link style={{ color: '#0F7771', textDecoration: 'none', paddingLeft: '5px' }}>log in</Link> </p>
                                </div>
                                <MDBInput className='input' placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon1" type='input' />
                                <MDBInput className="input" type='password' placeholder="Enter your password" aria-label="Enter your password" aria-describedby="basic-addon2" />
                                <MDBBtn className='loginBtn' style={{ outline: 'none', backgroundColor: '#7DAC76', border: 'none', width: '30%', height: "2.4rem", marginTop: '20px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>Sign Up</MDBBtn>
                                <div className="divider">
                                    <hr className="divider-line" />
                                    <span className="divider-text">OR</span>
                                    <hr className="divider-line" />
                                </div>

                                <div className='buttons'>
                                    <SocialLoginButton icon={<FcGoogle />} text="Continue With Google" style={{marginTop:'400rem',backgroundColor:'red'}} />
                                    <SocialLoginButton icon={<FaFacebook />} text="Continue With Facebook" color="#1877F2" />
                                    <SocialLoginButton icon={<FaApple />} text="Continue With Apple" />
                                    <SocialLoginButton icon={<FaTwitter />} text="Continue With Twitter" color="#1DA1F2" />
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md='12' lg='6' className='order-2 order-lg-2 d-flex flex-column'>
                            <img className='Tosignimg' src={Tosignimg} alt="Sign up" />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default Tosign;
