import React from 'react';
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import logoSvg from '../images/logoSvg.svg';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
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
                            <Nav.Link href="#home" className="navLink" style={{ color: '#ffffff', fontSize: '1.3rem', padding: '1.2rem' }}>Home</Nav.Link>
                            <Nav.Link href="#home" className="navLink" style={{ color: '#ffffff', fontSize: '1.3rem', padding: '1.2rem' }}>About</Nav.Link>
                            <Nav.Link href="#home" className="navLink roma" style={{ color: '#ffffff', fontSize: '1.3rem', padding: '1.2rem' }}>Contact Us</Nav.Link>


                            <NavDropdown title="Available Languages" id="basic-nav-dropdown" className="custom-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Technical Support" id="basic-nav-dropdown" className="custom-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to={"sign up"} >
                                <MDBBtn className='signBtn' style={{ background: 'transparent', border: '2px solid #0F7771', outline: 'none', color: 'white', margin: '1.2rem 0', padding: '2px 0', width: '6rem', height: '2rem' }}>Log in</MDBBtn>
                            </Link>
                            <Link>
                                <MDBBtn style={{ background: '#0F7771', border: 'none', outline: 'none', color: 'white', margin: '1.2rem 5px', padding: '2px 0', width: '6rem', height: '2rem' }}>sign up</MDBBtn>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
}

export default AppNavbar;
