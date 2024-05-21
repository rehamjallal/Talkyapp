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
    <MDBContainer fluid className='body loginBody'>
      <MDBCard className='card'>
        <MDBCardBody>
          <MDBRow className="justify-content-center">
            <MDBCol sm='10' md='10' lg='12'>
              <div className='welcome'>
                <h2>Welcome To <span className='spanLogin'>Talky !</span></h2>
                <AiOutlineUserSwitch style={{ fontSize: "4rem" }} />
                <h3>Sign up</h3>
                <p>To Use And Benefit From<span className='spanLogin'>The Application</span></p>
                <Link to={"sign up"}>
                  <MDBBtn className='loginBtn' style={{outline:'none',border:'none',backgroundColor:'#0F7771',paddingTop:'10px'}}>Sign up</MDBBtn>
                </Link>

                <div className="divider welcomeDivider my-4">
                  <div className="divider-line"></div>
                  <span className="divider-text mx-2">OR</span>
                  <div className="divider-line"></div>
                </div>
                <Link to={"/start"}>
                <MDBBtn className='loginBtn loginBtnGuest' type="button" style={{ outline: 'none', border: 'none', backgroundColor: '#0F7771', width: '70%',paddingTop:'10px' }}>Continue As a Guest</MDBBtn>
                </Link>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer >
  )
}
export default Login;
