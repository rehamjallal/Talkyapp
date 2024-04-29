import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGlobe, FaUsers, FaLightbulb, FaComments, FaVideo, FaHeadphones } from "react-icons/fa";

function About() {
    return (
        <div className='aboutSection'>
            <Container>
                <div className="aboutContent">
                    <h2>About Talky</h2>
                    <p>Talky is a language learning platform that connects you with native speakers around the world for free. Learn a language by chatting and calling native speakers. With Talky, you can practice languages through text, voice, video calls, and more!</p>
                </div>
                <div className="aboutFeatures">
                    <div className="feature">
                        <div className="icon"><FaGlobe /></div>
                        <h3>Learn Anywhere, Anytime</h3>
                        <p>Access Talky from anywhere in the world, whenever you want. Learn at your own pace and on your own schedule.</p>
                    </div>
                    <div className="feature">
                        <div className="icon"><FaUsers /></div>
                        <h3>Connect with Native Speakers</h3>
                        <p>Connect with native speakers from around the world to practice your target language. Learn directly from those who speak it best.</p>
                    </div>
                    <div className="feature">
                        <div className="icon"><FaLightbulb /></div>
                        <h3>Varied Learning Methods</h3>
                        <p>Enjoy a variety of learning methods including text, voice, and video calls. Choose the method that best fits your learning style.</p>
                    </div>
                    <div className="feature">
                        <div className="icon"><FaComments /></div>
                        <h3>Interactive Conversations</h3>
                        <p>Engage in interactive conversations with native speakers to practice your language skills in real-life scenarios.</p>
                    </div>
                    <div className="feature">
                        <div className="icon"><FaVideo /></div>
                        <h3>Live Video Sessions</h3>
                        <p>Participate in live video sessions with language experts and other learners to improve your speaking and listening skills.</p>
                    </div>
                    <div className="feature">
                        <div className="icon"><FaHeadphones /></div>
                        <h3>Listen and Learn</h3>
                        <p>Enhance your listening skills by listening to native speakers and mimicking their pronunciation and intonation.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;
