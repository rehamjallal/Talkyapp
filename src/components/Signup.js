import React from 'react';
import {
    Button, Container,
    Row,
    Col,
    Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavbar';

function Signup() {
    return (
        <>
            <AppNavbar />
            <Container fluid className='loginBody'>
                <Row className="justify-content-center align-items-center h-100">
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <div className="login-container">
                            <div className="login-header text-center">
                                <h2>Welcome Back!</h2>
                                <p>Please login to your account</p>
                            </div>
                            <div className="login-form">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button style={{outline:'none',border:'none',backgroundColor:'#0F7771',marginTop:'1rem'}} type="submit" block>
                                        Login
                                    </Button>
                                </Form>
                            </div>
                            <div className="login-footer text-center">
                                <p>Don't have an account? <Link to={"/sign up"}>Sign Up</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Signup;
