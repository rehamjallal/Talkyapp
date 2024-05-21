import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import home from '../images/home.jpg';
import { FaFaceGrinWide } from "react-icons/fa6";

function HomeContent() {
    return (
        <>
            <div className='homeContent'>
                <div className="container">
                    <div className="homeText">
                        <h2>Welcome! To <span>Talky</span> For  Distance Learning Different Languages In A Fun And Useful way <FaFaceGrinWide className='hIcon' /></h2>
                        <p>Finding An Interesting and Enjoyable Way For Learning  Multiple Languages shouldn't be overwhelming. We make it simple and match your Desires And Interests.</p>
                        <Link to={'/sign up'} style={{ textDecoration: 'none' }}><MDBBtn className='homeBtn' style={{ border: 'none', outline: 'none', display: 'flex', width: '15rem', height: '2rem', justifyContent: 'center', alignItems: 'center', background: '#0F7771' }} >Learn Different Languages<span style={{ paddingBottom: '3px' }}><FaLongArrowAltRight className='spanIcon'/></span></MDBBtn></Link>
                        <div className="homeFind">
                            <p><TiTick className="iconFind" />Completely free</p>
                            <p><TiTick className="iconFind" />Recommended Learning Languages App  </p>
                        </div>
                    </div>
                    <div className='homeImg'>
                        <img className='imgHome' src={home} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeContent;