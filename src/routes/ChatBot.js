import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';  // Custom CSS for the chatbot
import img1 from './assets/2.png';

const fruitsData = [
  { name: 'Orange', price: '$8.00', oldPrice: '$16.00', image: img1, description: 'Oranges are a good source of Vitamin C.' },{ name: 'Orange', price: '$8.00', oldPrice: '$16.00', image: img1, description: 'Oranges are a good source of Vitamin C.' },{ name: 'Orange', price: '$8.00', oldPrice: '$16.00', image: img1, description: 'Oranges are a good source of Vitamin C.' }
 
];

const suggestedQuestions = [
  'List fruits',
  'About tangerine',
  'About cucumber',
  'What is the price of orange?'
];

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! Welcome to Fruit.Ai. Ask me about fruits!', sender: 'bot' }
  ]);

  const [input, setInput] = useState('');
  const [fruitListVisible, setFruitListVisible] = useState(false); // To toggle fruit list visibility
  const [selectedFruit, setSelectedFruit] = useState(null); // For displaying selected fruit details
  const chatBoxRef = useRef(null); // Create a ref for the chat box

  // Scroll to the bottom whenever the messages state changes
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]); // This will run every time messages change

  const sendMessage = (message) => {
    if (message.trim() === '') return;

    setMessages([...messages, { text: message, sender: 'user' }]);
    handleResponse(message);
    setInput('');
  };

  const handleResponse = (message) => {
    let botResponse = 'Sorry, I didn’t get that.';

    if (message.toLowerCase().includes('list fruits')) {
      botResponse = 'Here is a list of fruits.';
      setFruitListVisible(true); // Display fruit cards
      setSelectedFruit(null); // Reset any selected fruit
    } else if (message.toLowerCase().includes('hello')) {
      botResponse = 'Hi there! Ask me about fruits.';
    } else if (message.toLowerCase().includes('about tangerine')) {
      botResponse = 'Tangerines are rich in vitamins and antioxidants.';
    } else if (message.toLowerCase().includes('about cucumber')) {
      botResponse = 'Cucumbers are hydrating and low in calories.';
    } else if (message.toLowerCase().includes('price of orange')) {
      botResponse = 'The price of an orange is $8.00.';
    }

    setMessages([...messages, { text: botResponse, sender: 'bot' }]);
  };

  const showFruitDetails = (fruit) => {
    setSelectedFruit(fruit);
    setFruitListVisible(false); // Hide the fruit list when showing details
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <div className="chat-container">
      {/* Chat Box */}
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      {/* Fruit List or Details */}
      <div className="fruit-section">
        {fruitListVisible && (
          <div className="fruit-list">
            {fruitsData.map(fruit => (
              <div key={fruit.name} className="fruit-card" onClick={() => showFruitDetails(fruit)}>
                <img src={fruit.image} alt={fruit.name} />
                <p>{fruit.name}</p>
                <p>Price: {fruit.price}</p>
                <p>Old Price: {fruit.oldPrice}</p>
              </div>
            ))}
          </div>
        )}

        {selectedFruit && (
          <div className="fruit-details">
            <img src={selectedFruit.image} alt={selectedFruit.name} />
            <h3>{selectedFruit.name}</h3>
            <p>{selectedFruit.description}</p>
            <p>Price: {selectedFruit.price}</p>
            <p>Old Price: {selectedFruit.oldPrice}</p>
          </div>
        )}
      </div>

      {/* Suggested Questions Menu */}
      <div className="suggested-questions">
        <h4>Try asking:</h4>
        <div className="suggestions-list">
          {suggestedQuestions.map((question, index) => (
            <button key={index} onClick={() => handleSuggestionClick(question)}>
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
