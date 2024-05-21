import React, { useState } from 'react';
import arabic from '../images/Arabic.png';
import italian from '../images/Italian.png';
import english from '../images/english.png';
import chinese from '../images/chinese.png';
import German from '../images/German.png';
import russianFlag from '../images/russianflag.png';
import french from '../images/French.png';
import Korean from '../images/Korean.png';
import { FaMicrophone } from "react-icons/fa6";
import { ImAttachment } from "react-icons/im";
import { MdOutlineSend } from "react-icons/md";

function ChatDashboard() {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
//  array of objects will use redux or json to stored data  from back?
    const people = [
        { id: 1, name: 'Sarah Brown', image: arabic },
        { id: 2, name: 'John Doe', image: italian },
        { id: 3, name: 'Emily Smith', image: english },
        { id: 4, name: 'Michael John', image: chinese },
        { id: 5, name: 'David Wilson', image: German },
        { id: 6, name: 'Emma Taylor', image: russianFlag },
        { id: 7, name: 'James Clark', image: french },
        { id: 8, name: 'Olivia Miller', image: Korean }
    ];

    const creativeMessages = [
        'Hello there!',
        'How can I help you?',
        'Nice to meet you!',
        'Welcome to our chat!',
        'Ask me anything!'
    ];

    const handlePersonClick = (personId) => {
        setSelectedPerson(personId);
        setMessage('');
        setChatMessages([]);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setChatMessages([...chatMessages, { sender: 'Me', message, isMe: true }]);
            setMessage('');
            setTimeout(() => {
                setChatMessages(prevMessages => [
                    ...prevMessages,
                    { sender: people.find(person => person.id === selectedPerson).name, message: creativeMessages[Math.floor(Math.random() * creativeMessages.length)], isMe: false }
                ]);
            }, 2000);
        }
    };

    return (
        <div className="dash">
            <div className="chat-container">
                <div className="people-list">
                    <div className="chat-title">
                        <h1>Welcome to Talky Chat</h1>
                        <p>Your language learning chatroom</p>
                    </div>
                    {people.map(person => (
                        // هنا بتاكد من الكلاس هو اللى تم اختياره او لا 
                        <div key={person.id} className={`person ${selectedPerson === person.id ? 'active' : ''}`} onClick={() => handlePersonClick(person.id)}>
                            <img src={person.image} alt={person.name} />
                            <p>
                                <h5>{person.name}</h5>
                                <h6>hello dear well help you to learn</h6>
                            </p>
                        </div>
                    ))}
                </div>


                <div className="chat-bubble">
                    {selectedPerson && (
                        <>
                            <div className="chat-messages">
                                {chatMessages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.isMe ? 'me' : 'other'}`}>
                                        {!msg.isMe && <img src={people.find(person => person.id === selectedPerson).image} alt={people.find(person => person.id === selectedPerson).name} />}
                                        <div className="message-content">
                                            {/* <span className="sender">{msg.sender}: </span> */}
                                            <span className="text">{msg.message}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="message-input">
                                <FaMicrophone className='FaMicrophone' />
                                <ImAttachment className='ImAttachment' />

                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />

                                <button onClick={handleSendMessage}><MdOutlineSend /></button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChatDashboard;
