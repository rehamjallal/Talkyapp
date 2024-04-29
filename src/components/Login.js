import React from 'react';
import { AiOutlineUserSwitch } from "react-icons/ai";


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <MDBContainer fluid className='body loginBody'
                style={{ padding: '1rem  40rem 0 15rem', height: "100%", overflow: "hidden" }}>
                <MDBCard style={{ boxShadow: '50px 40px 20px rgba(0,0, 0, 1)' }}
                    className='card'>
                    <MDBCardBody>
                        <MDBRow className="no-gutters"
                            style={{ justifyContent: 'center' }}>
                            <MDBCol sm='10' md='10' lg='7' className='order-1 order-lg-1'
                            >
                                <div className='welcome'>
                                    <h2>Welcome To <span className='spanLogin'>Talky</span></h2>
                                    <AiOutlineUserSwitch
                                        style={{
                                            fontSize: "4rem"
                                        }}
                                    />
                                    <h3>Sign up</h3>
                                    <p>To Use And Benift From<span className='spanLogin'>The Application</span></p>
                                    <Link to={"sign up"} >
                                        <MDBBtn className='loginBtn' style={{ background: '#333333', border: 'none', outline: 'none', color: 'white', margin: '2rem 0', width: '8rem', height: '3rem', padding: '12px' }}>Sign up</MDBBtn>
                                    </Link>

                                    <div className="divider welcomeDivider">
                                        <hr className="divider-line" />
                                        <span className="divider-text">OR</span>
                                        <hr className="divider-line" />
                                    </div>
                                    <Link to={"/start"}>
                                    <MDBBtn className='loginBtn loginBtnGuest'
                                        type="button"

                                        style={{
                                            background: '#333333',
                                            border: 'none',
                                            outline: 'none',
                                            color: 'white',
                                            margin: '2rem 0',
                                            width: '15rem',
                                            height: '3rem',
                                            padding: '12px 0'
                                        }}
                                    >Continue As a Guest</MDBBtn>
                                    </Link>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </>
    )
};



export default Login; 