import React, { useState } from 'react';
import './ChatDashboard.css'; // Import your CSS file for styling

function ChatDashboard() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const people = [
    { id: 1, name: 'Person 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Person 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Person 3', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Person 4', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Person 5', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Person 6', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Person 7', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Person 8', image: 'https://via.placeholder.com/150' }
  ];

  const handlePersonClick = (personId) => {
    setSelectedPerson(personId);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, { sender: 'Me', message }]);
      setMessage('');
    }
  };

  return (
    <div className="dashboard">
      <h1>Chat Dashboard</h1>
      <div className="chat-container">
        <div className="people-list">
          {people.map(person => (
            <div
              key={person.id}
              className={`person ${selectedPerson === person.id ? 'active' : ''}`}
              onClick={() => handlePersonClick(person.id)}
            >
              <img src={person.image} alt={person.name} />
              <p>{person.name}</p>
            </div>
          ))}
        </div>
        <div className="chat-bubble">
          {selectedPerson && (
            <>
              <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                  <div key={index} className="message">
                    <span className="sender">{msg.sender}: </span>
                    <span className="text">{msg.message}</span>
                  </div>
                ))}
              </div>
              <div className="message-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatDashboard;
