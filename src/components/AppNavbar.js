import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logoSvg from '../images/logoSvg.svg';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import italianflag from '../images/italianflag.png';
import englishFlag from '../images/englishFlag.png';
import arabicFlag from '../images/egypt.png';
import chineseFlag from '../images/chineseFlag.png';
import KoreanFlag from '../images/corean.png';
import frenchFlag from '../images/frenchFlag.png';
import GermanFlag from '../images/germanflag.png';
import russian from '../images/Russian.png';

function AppNavbar() {
    return (
        <>
            <Navbar expand="lg" className="navbar" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='logoDiv'>
                            <img className='logo' src={logoSvg} alt="Logo" />
                            <h4>Talky</h4>
                            <span>.com</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={"/start"} className="navLink" style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1.3rem', padding: '1.2rem' }}>Home</Link>
                            <Link href="#about" className="navLink" style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1.3rem', padding: '1.2rem' }}>About</Link>
                            <Link href="#home" className="navLink roma" style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1.3rem', padding: '1.1rem' }}>Contact Us</Link>

                            <Nav.Link className="navLink hoverLink" style={{ color: '#ffffff', fontSize: '1.1rem', padding: '1.2rem' }}>
                                Available Languages
                                <div className='listContainer'>
                                    <div className='list'>
                                        <div className='lista'>
                                            <div className='slice'>
                                                <img src={italianflag} alt="Italian" />
                                                <p>Italian Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={russian} alt="Russian" />
                                                <p>Russian Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={frenchFlag} alt="French" />
                                                <p>French Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={englishFlag} alt="English" />
                                                <p>English Language </p>
                                            </div>
                                        </div>
                                        <div className='lista'>
                                            <div className='slice'>
                                                <img src={arabicFlag} alt="Arabic" />
                                                <p>Arabic Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={KoreanFlag} alt="Korean" />
                                                <p>Korean Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={GermanFlag} alt="German" />
                                                <p>German Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={chineseFlag} alt="Chinese" />
                                                <p>Chinese Language</p>
                                            </div>
                                        </div>
                                        <div className='lista'>
                                            <div className='slice'>
                                                <img src={italianflag} alt="Italian" />
                                                <p>Italian Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={russian} alt="Russian" />
                                                <p>Russian Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={frenchFlag} alt="French" />
                                                <p>French Language </p>
                                            </div>
                                            <div className='slice'>
                                                <img src={englishFlag} alt="English" />
                                                <p>English Language </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Link to={"/Signup"} >
                                <MDBBtn className='signBtn' style={{ background: 'transparent', border: '2px solid #0F7771', outline: 'none', color: 'white', margin: '1.2rem 0', padding: '2px 0', width: '6rem', height: '2rem' }}>Log in</MDBBtn>
                            </Link>
                            <Link to={'/sign up'} >
                                <MDBBtn style={{ background: '#0F7771', border: 'none', outline: 'none', color: 'white', margin: '1.2rem 5px', padding: '2px 0', width: '6rem', height: '2rem' }}>sign up</MDBBtn>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

export default AppNavbar;
