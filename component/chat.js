import React, { useState } from 'react';
import '../css/chat.css';

const contactsData = [
    { id: 1, name: 'John Doe', profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIc5BHFDi0v6VCLvnhh0bqCam-b3oH7L_sw&s' },
    { id: 2, name: 'Jane Smith', profilePic: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Alice Johnson', profilePic: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Bob Brown', profilePic: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Carol White', profilePic: 'https://via.placeholder.com/50' },
    { id: 6, name: 'David Green', profilePic: 'https://via.placeholder.com/50' },
    { id: 7, name: 'Emma Wilson', profilePic: 'https://via.placeholder.com/50' },
    { id: 8, name: 'Frank Moore', profilePic: 'https://via.placeholder.com/50' },
    { id: 9, name: 'Grace Lee', profilePic: 'https://via.placeholder.com/50' },
    { id: 10, name: 'Hank Harris', profilePic: 'https://via.placeholder.com/50' }
    // Add more contacts as needed
];

function Chat() {
    const [selectedContact, setSelectedContact] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        setMessages([
            { type: 'received', content: "Hello!", time: new Date().toLocaleTimeString() },
            { type: 'received', content: "How are you?", time: new Date().toLocaleTimeString() }
        ]);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { type: 'sent', content: message, time: new Date().toLocaleTimeString() }]);
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <aside className="contacts">
                <h2>Contacts</h2>
                <div className="contact-list">
                    {contactsData.map(contact => (
                        <div
                            key={contact.id}
                            className="contact"
                            onClick={() => handleContactClick(contact)}
                        >
                            <img src={contact.profilePic} alt={contact.name} />
                            <span>{contact.name}</span>
                        </div>
                    ))}
                </div>
            </aside>

            <div className="chat-area">
                {selectedContact ? (
                    <>
                        <header className="chat-header">
                            <img src={selectedContact.profilePic} alt="Profile" className="profile-pic" />
                            <div className="contact-info">
                                <h2>{selectedContact.name}</h2>
                            </div>
                        </header>
                        
                        <div className="chat-actions">
                            <button>📞</button> {/* Call Button */}
                            <button>🎥</button> {/* Video Call Button */}
                            <button>😊</button> {/* Emoji Button */}
                        </div>

                        <main className="chat-box">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.type}`}>
                                    <div className="message-content">{msg.content}</div>
                                    <div className="message-time">{msg.time}</div>
                                </div>
                            ))}
                        </main>

                        <footer className="chat-footer">
                            <input 
                                type="text" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                placeholder="Type a message..." 
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </footer>
                    </>
                ) : (
                    <div className="no-contact">Select a contact to start chatting</div>
                )}
            </div>
        </div>
    );
}

export default Chat;
