import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import home from '../images/home.jpg';
import { FaFaceGrinWide } from "react-icons/fa6";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { FaArrowPointer } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import About from './About';
import Chatting from './Chatting';
import Talking from './Talking';
import Download from './Download';
// import More from './More';
import Footer from './Footer';

import connection from '../images/connection.png'
function Home() {
    return (
        <>
            <div className='homeContent' >
                <div className="container">
                    <div className="homeText">
                        <h2>Welcome! To <span>Talky</span> For  Distance Learning Different Languages In A Fun And Useful way <FaFaceGrinWide className='hIcon' /></h2>
                        <p>Finding An Interesting and Enjoyable Way For Learning  Multiple Languages shouldn't be overwhelming. We make it simple and match your Desires And Interests.</p>
                        <Link><MDBBtn style={{ border: 'none', outline: 'none', display: 'flex', width: '18rem', height: '3rem', justifyContent: 'center', alignItems: 'center', background: '#0F7771' }} >Learn Different Languages<span><FaLongArrowAltRight className='spanIcon' /></span></MDBBtn></Link>
                        <div className="
                        homeFind">
                            <p><TiTick className="iconFind" />Completely free</p>
                            <p><TiTick className="iconFind" />Recommended Learning Languages App  </p>
                        </div>
                    </div>
                    <div className='homeImg'>
                        <img className='imgHome' src={home} />
                    </div>
                </div>
            </div>
            <div className='howToFind'>
                <div className='container'>
                    <img src={connection} style={{ width: '40rem', marginLeft: '-10rem', marginTop: '-8rem' }} />
                    <div className='finding'>
                        <h1>How to Find & Use Talky </h1>
                        <p>Talky.com is a free Distance Learning Languages APP Talky search platform that matches you to Suitable language you Want.</p>
                        <Link><MDBBtn style={{ textDecoration: 'none', border: 'none', outline: 'none', display: 'flex', width: '10rem', height: '3rem', justifyContent: 'center', alignItems: 'center', background: '#0F7771' }}>Get Started ⟶</MDBBtn></Link>
                    </div>
                    <div className='findingText'>
                        <div className='cart'>
                            <BsFillSearchHeartFill className='findIcon' />
                            <div className='cartContent'>
                                <div className='text'>
                                    <h3>Find Talky Easily</h3>
                                    <p>Discover the Talky app with our advanced matching system. Simply complete your profile and select different languages to find the ones best suited for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className='cart'>
                            <SiBookstack className='findIcon' />
                            <div className='cartContent'>
                                <div className='text'>
                                    <h3>Organize Your Talky Matches</h3>
                                    <p>Stay organized with your Talky matches. Easily keep track of your conversations and language partners, making learning even more effective.</p>
                                </div>
                            </div>
                        </div>
                        <div className='cart'>
                            <FaArrowPointer className='findIcon' />
                            <div className='cartContent'>
                                <div className='text'>
                                    <h3>Using Talky Easily</h3>
                                    <p>Utilize Talky effortlessly. Engage in seamless conversations with your language partners through text, voice, and video calls, and enjoy effective language learning.</p>
                                </div>
                            </div>
                        </div>
                        <div className='cart'>
                            <IoGiftOutline className='findIcon' />
                            <div className='cartContent'>
                                <div className='text'>
                                    <h3>How to Get Gifts</h3>
                                    <p>Unlock rewards with Talky. Engage in language exchange and reach your learning milestones to receive exciting gifts and incentives along the way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />

            <Chatting />
            <Talking />
            <Download />

            {/* <More /> */}
            <Footer />

        </>)
}

export default Home;