import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { BsFillSearchHeartFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { FaArrowPointer } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import connection from '../images/connection.png';

function HowToFind() {
    const cartsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = `${index * 1}s`;
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cartsRef.current.forEach(cart => {
            if (cart) observer.observe(cart);
        });

        return () => {
            if (cartsRef.current) {
                cartsRef.current.forEach(cart => {
                    if (cart) observer.unobserve(cart);
                });
            }
        };
    }, []);

    return (
        <div className='howToFind'>
            <div className='container'>
                <img src={connection} alt='Connection illustration' className='findImg' />
                <div className='finding'>
                    <h1>How to Find & Use Talky</h1>
                    <p>Talky.com is a free Distance Learning Languages APP Talky search platform that matches you to Suitable language you Want.</p>
                    <Link style={{textDecoration:'none'}} to='/get-started'>
                        <MDBBtn className='findBtn' style={{ textDecoration: 'none', border: 'none', outline: 'none', display: 'flex', width: '10rem', height: '3rem', justifyContent: 'center', alignItems: 'center', background: '#0F7771' }}>
                            Get Started
                        </MDBBtn>
                    </Link>
                </div>
                <div className='findingText'>
                    <div className='cart' ref={el => cartsRef.current[0] = el}>
                        <BsFillSearchHeartFill className='findIcon' />
                        <div className='cartContent'>
                            <div className='text'>
                                <h3>Find Talky Easily</h3>
                                <p>Discover the Talky app with our advanced matching system. Simply complete your profile and select different languages to find the ones best suited for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className='cart' ref={el => cartsRef.current[1] = el}>
                        <SiBookstack className='findIcon' />
                        <div className='cartContent'>
                            <div className='text'>
                                <h3>Organize Your Talky Matches</h3>
                                <p>Stay organized with your Talky matches. Easily keep track of your conversations and language partners, making learning even more effective.</p>
                            </div>
                        </div>
                    </div>
                    <div className='cart' ref={el => cartsRef.current[2] = el}>
                        <FaArrowPointer className='findIcon' />
                        <div className='cartContent'>
                            <div className='text'>
                                <h3>Using Talky Easily</h3>
                                <p>Utilize Talky effortlessly. Engage in seamless conversations with your language partners through text, voice, and video calls, and enjoy effective language learning.</p>
                            </div>
                        </div>
                    </div>
                    <div className='cart' ref={el => cartsRef.current[3] = el}>
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
    );
}

export default HowToFind;
