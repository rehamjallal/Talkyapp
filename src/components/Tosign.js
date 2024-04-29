import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container, Nav, Navbar, NavDropdown,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoSvg from '../images/logoSvg.svg';

import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, } from 'mdb-react-ui-kit';
import Tosignimg from '../images/Tosignimg.png'
function Tosign() {
    return (
        <>
            <MDBContainer fluid className='body toSignBody' style={{ padding: "1.4rem 40rem 1.4rem 15rem ", height: "100%", overflow: "hidden" }}>
                <MDBCard style={{ boxShadow: '40px 40px 20px rgba(0,0, 0,0.3)', backgroundColor: 'red' }}>
                    <MDBCardBody>
                        <MDBRow className="no-gutters" style={{ justifyContent: 'center', }}>
                            <MDBCol md='10' lg='7' className='order-2 order-lg-2 d-flex flex-column'>
                                <div className="inputs" style={{ textAlign: "center", justifyContent: 'center', alignItems: "canter" }}>
                                    <div className='logoCreate'>
                                        <Navbar.Brand href="#home">
                                            <div className='logoDiv'>
                                                <img className='logo' src={logoSvg} alt="Logo" />
                                                <h4>Talky</h4>
                                                <span>.com</span>
                                            </div>
                                        </Navbar.Brand>
                                        <p>Already have an account? 
                                            <Link style={{color: '#0F7771', width: '6rem',textDecoration:'none',paddingLeft:'5px',}}>log in</Link>
                                        </p>
                                    </div>
                                    <InputGroup><MDBInput className='input' placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon1" type='input' style={{ margin: '10px 0', outline: "none", borderRadius: '0', caretColor: '#7DAC76' }} /></InputGroup>
                                    <InputGroup className="mb-3" style={{ display: 'flex' }}><MDBInput className="input" type='password' placeholder="Enter your password" aria-label="Enter your password" aria-describedby="basic-addon2" style={{ width: "14rem", margin: '10px 0', borderRadius: '0', caretColor: '#7DAC76' }} /></InputGroup>
                                    <MDBBtn className='loginBtn'
                                        style={{
                                            outline: 'none', backgroundColor: '#7DAC76', border: 'none', width: '5rem', height: "2rem",
                                            alignItems: 'center',
                                            margin: "0 auto",
                                            margin: "0 auto",
                                            display: 'flex',
                                            padding: '0 1.4rem',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>Login</MDBBtn>
                                    <div className="divider">
                                        <hr className="divider-line" />
                                        <span className="divider-text">OR</span>
                                        <hr className="divider-line" />
                                    </div>

                                    <div className='buttons'>

                                        <InputGroup className="button"
                                            style={{ width: "20rem", border: "2px solid #7DAC76", alignItems: "center", backgroundColor: "white", justifyContent: 'center', borderRadius: "3rem", cursor: "pointer", marginTop: '5px' }}>
                                            <FcGoogle style={{ borderRadius: '0', border: 'none', backgroundColor: 'white', color: "black", fontSize: "1rem" }} />
                                            <MDBBtn className='mbdbtn' style={{ outline: "none", borderRadius: '0', border: "none", backgroundColor: "white", color: "#7DAC76", width: '15rem', height: '2rem' }}>Continue With Google</MDBBtn>
                                        </InputGroup>



                                        <InputGroup className="button"
                                            style={{ width: "20rem", border: "2px solid #7DAC76", alignItems: "center", backgroundColor: "white", justifyContent: 'center', borderRadius: "3rem", cursor: "pointer", marginTop: '5px' }}>
                                            <FaFacebook style={{ borderRadius: '0', border: 'none', backgroundColor: 'white', color: "black", fontSize: "1rem", color: "#1877F2" }} />
                                            <MDBBtn className='mbdbtn' style={{ outline: "none", borderRadius: '0', border: "none", backgroundColor: "white", color: "#7DAC76", width: '15rem', height: '2rem' }}>Continue With Facebook</MDBBtn>
                                        </InputGroup>


                                        <InputGroup className="button"
                                            style={{ width: "20rem", border: "2px solid #7DAC76", alignItems: "center", backgroundColor: "white", justifyContent: 'center', borderRadius: "3rem", cursor: "pointer", marginTop: '5px' }}>
                                            <FaApple style={{ borderRadius: '0', border: 'none', backgroundColor: 'white', color: "black", fontSize: "1rem" }} />
                                            <MDBBtn className='mbdbtn' style={{ outline: "none", borderRadius: '0', border: "none", backgroundColor: "white", color: "#7DAC76", width: '15rem', height: '2rem' }}>Continue With Apple</MDBBtn>
                                        </InputGroup>



                                        <InputGroup className="button"
                                            style={{ width: "20rem", border: "2px solid #7DAC76", alignItems: "center", backgroundColor: "white", justifyContent: 'center', borderRadius: "3rem", cursor: "pointer", marginTop: '5px' }}>
                                            <FaXTwitter style={{ borderRadius: '0', border: 'none', backgroundColor: 'white', color: "black", fontSize: "1rem" }} />
                                            <MDBBtn className='mbdbtn' style={{ outline: "none", borderRadius: '0', border: "none", backgroundColor: "white", color: "#7DAC76", width: '15rem', height: '2rem' }}>Continue With Twitter</MDBBtn>
                                        </InputGroup>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol md='10' lg='5' className='order-2 order-lg-2 d-flex flex-column'>
                                <img className='Tosignimg' src={Tosignimg} alt="Sign up" />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </>
    )
}
export default Tosign;
