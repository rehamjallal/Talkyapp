import React, { useState, useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AiTwotoneAudio } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { BsRecord2 } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";
import { IoShareOutline } from "react-icons/io5";
import { ImPhoneHangUp } from "react-icons/im";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineSend } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import call1 from '../images/call1.png';
import call2 from '../images/call2.png';
import call3 from '../images/call3.png';
import call4 from '../images/call4.png';

const Call = () => {
    const [isAudioMuted, setIsAudioMuted] = useState(false);
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const [isCameraFront, setIsCameraFront] = useState(true);
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [mediaStream, setMediaStream] = useState(null);
    const videoRef = useRef();

    const toggleAudio = () => {
        setIsAudioMuted(!isAudioMuted);
    };

    const toggleVideo = () => {
        setIsVideoMuted(!isVideoMuted);
    };

    const toggleCamera = () => {
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            setMediaStream(null);
        } else {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    setMediaStream(stream);
                    const video = videoRef.current;
                    if (video) {
                        video.srcObject = stream;
                    }
                })
                .catch((err) => console.error('Error accessing camera:', err));
        }
        setIsCameraFront((prevState) => !prevState);
    };

    const endCall = () => { };

    const shareForClassroom = () => { };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };


    // لما احط رسالع ف ال الفيلد ويحصل اى تغيير بودى الؤساله اللى انا كتبتها دى ف اليوز ستات واخلى اسمها ماسسج
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    // هنا لما ضغط على زرار الارسال عمل ترم للماسدج ووخلاها ف ارراى المسيجات الجمع بحيث لستخدمها ف الشات 
    const sendMessage = () => {
        if (message.trim() !== '') {
            // هعمل هنا بعد م الرسايل كلها اتخزنت هنا اناتحت هعمل عليها ماب واستخدمها
            setMessages([...messages, message]);
            // ف الاخر بفضى الحق من الماسيج
            setMessage('');
        }
    };

    return (

        <Container fluid className="call-screen">
            <div className="video-feed">
                <video ref={videoRef} autoPlay muted style={{ width: '15%', height: '15%', borderRadius: '50%', position: 'absolute', left: '0px' }}></video>
                <div style={{ color: '#ffffff', fontSize: '1.5rem', position: 'absolute', top: '5rem', left: '17rem', justifyContent: 'space-between', width: '30rem', display: 'flex' }} className='callSetting'>
                    <p style={{ display: 'flex' }}>Live<span>01:39:18</span></p>
                    <div className='callIcons'>
                        <CiSettings />
                        <HiDotsHorizontal />

                    </div>
                </div>

                <div className='callCards'>

                    <div className='callContainer'>

                        <div className='callCard'>
                            <div className='callImg'>

                                <img src={call1}></img>
                            </div>
                            <div className='callContents'>
                                <span>name</span>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className="camera-button" onClick={toggleCamera}><IoVideocam style={{ fontSize: '1rem', top: '25%', left: '25%', position: 'absolute', transform: isCameraFront ? 'none' : 'rotateY(180deg)' }} /></Button>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className={`audio-button ${isAudioMuted ? 'muted' : ''} CallButton`} onClick={toggleAudio}><AiTwotoneAudio style={{ fontSize: '1rem', top: '25%', left: '25%', position: 'absolute' }} /></Button>
                            </div>
                        </div>

                        <div className='callCard'>
                            <div className='callImg'>

                                <img src={call2}></img>
                            </div>
                            <div className='callContents'>
                                <span>name</span>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className="camera-button" onClick={toggleCamera}><IoVideocam style={{ fontSize: '1rem', top: '25%', left: '25%', position: 'absolute', transform: isCameraFront ? 'none' : 'rotateY(180deg)' }} /></Button>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className={`audio-button ${isAudioMuted ? 'muted' : ''} CallButton`} onClick={toggleAudio}><AiTwotoneAudio style={{ fontSize: '1rem', top: '25%', left: '25%', position: 'absolute' }} /></Button>
                            </div>
                        </div>

                        <div className='callCard'>
                            <div className='callImg'>

                                <img src={call4}></img>
                            </div>
                            <div className='callContents'>
                                <span>name</span>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className="camera-button" onClick={toggleCamera}><IoVideocam style={{ fontSize: '1rem', top: '25%', left: '25%', position: 'absolute', transform: isCameraFront ? 'none' : 'rotateY(180deg)' }} /></Button>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className={`audio-button ${isAudioMuted ? 'muted' : ''} CallButton`} onClick={toggleAudio}><AiTwotoneAudio style={{ fontSize: '1rem', top: '25%', left: '25%', position: 'absolute' }} /></Button>
                            </div>
                        </div>

                        <div className='callCard'>
                            <div className='callImg'>

                                <img src={call3}></img>
                            </div>
                            <div className='callContents'>
                                <span>name</span>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className="camera-button" onClick={toggleCamera}><IoVideocam style={{ fontSize: '1rem', top: '25%', left: '25%', position: 'absolute', transform: isCameraFront ? 'none' : 'rotateY(180deg)' }} /></Button>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className={`audio-button ${isAudioMuted ? 'muted' : ''} CallButton`} onClick={toggleAudio}><AiTwotoneAudio style={{ fontSize: '1rem', top: '25%', left: '25%', position: 'absolute' }} /></Button>
                            </div>
                        </div>

                    </div>

                </div>




                <div className="controls-overlay">
                    <Row>
                        <Col>
                            <div className="control-buttons">
                                <Button style={{ backgroundColor: '#0F7771', padding: '1.6rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }}><BsRecord2 style={{ fontSize: '1.8rem', top: '24%', left: '22%', position: 'absolute', color: 'red' }} /></Button>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1.6rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className="camera-button" onClick={toggleCamera}><IoVideocam style={{ fontSize: '1.5rem', top: '25%', left: '25%', position: 'absolute', transform: isCameraFront ? 'none' : 'rotateY(180deg)' }} /></Button>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1.6rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className={`audio-button ${isAudioMuted ? 'muted' : ''} CallButton`} onClick={toggleAudio}><AiTwotoneAudio style={{ fontSize: '1.5rem', top: '25%', left: '25%', position: 'absolute' }} /></Button>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1.6rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className="chat-button" onClick={toggleChat}><HiOutlineChat style={{ fontSize: '1.5rem', top: '25%', left: '25%', position: 'absolute' }} /></Button>
                                <Button style={{ backgroundColor: '#0F7771', padding: '1.6rem', position: 'relative', textAlign: 'center', outline: 'none', border: 'none', marginRight: '1rem', borderRadius: '50%', color: '#ffffff' }} className="share-button" onClick={shareForClassroom}><IoShareOutline style={{ fontSize: '1.5rem', top: '25%', left: '25%', position: 'absolute' }} /></Button>
                            </div>
                        </Col>
                        <Col>
                            <Button variant="danger" className="end-call-button" style={{ paddingBottom: '2rem' }} onClick={endCall}><ImPhoneHangUp style={{ fontSize: '1.9rem' }} /></Button>
                        </Col>
                    </Row>

                </div>
            </div>


            {isChatOpen && (
                <ChatBox setIsChatOpen={setIsChatOpen} message={message}
                    messages={messages} setMessage={setMessage}
                    handleMessageChange={handleMessageChange} sendMessage={sendMessage} />)}

        </Container>
    );
};

const ChatBox = ({ setIsChatOpen, message, messages, setMessage, handleMessageChange, sendMessage }) => {
    return (
        <div className="chat-box">

            <div className="chat-header">
                <div className='members'>

                    <h4>Conversation</h4><p>Members</p>
                </div>

                <button className="close-chat" onClick={() => setIsChatOpen(false)}><IoMdCloseCircleOutline /></button>
            </div>

            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>

            <div className="chat-input">
                <input type="text" placeholder="Type your message..." style={{ border: 'none', outline: 'none', caretColor: "#0F7771" }} value={message} onChange={handleMessageChange} />
                <button style={{ backgroundColor: '#0F7771', marginLeft: '0.5rem' }} onClick={sendMessage}><MdOutlineSend style={{ fontSize: '1.5rem' }} /></button>
            </div>
        </div>
    );
};

export default Call;
