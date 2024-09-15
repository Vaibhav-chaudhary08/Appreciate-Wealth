// Assuming Navbar component is properly exported in ../components/Navbar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FAQPage.css'; // CSS for styling
import Navbar from '../components/Navbar'; // Correct import of Navbar

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch FAQs from backend
  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/faqs');
      setFaqs(response.data);
    } catch (err) {
      setError('Failed to fetch FAQs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  // Handle Add/Update FAQ
  const handleSaveFaq = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`/api/faqs/${editId}`, newFaq);
      } else {
        await axios.post('/api/faqs', newFaq);
      }
      setNewFaq({ question: '', answer: '' });
      setIsEditing(false);
      fetchFaqs();
    } catch (err) {
      setError('Failed to save FAQ');
    }
  };

  // Handle Delete FAQ
  const handleDeleteFaq = async (id) => {
    try {
      await axios.delete(`/api/faqs/${id}`);
      fetchFaqs();
    } catch (err) {
      setError('Failed to delete FAQ');
    }
  };

  // Handle Edit FAQ
  const handleEditFaq = (faq) => {
    setNewFaq({ question: faq.question, answer: faq.answer });
    setIsEditing(true);
    setEditId(faq.id);
  };

  return (
    <>
      <Navbar /> {/* Ensure Navbar is correctly rendered */}
      <div className="faq-container">
        <h1>Fruit FAQs</h1>
        {loading ? (
          <p>Loading FAQs...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <ul className="faq-list">
              {faqs.map((faq) => (
                <li key={faq.id} className="faq-item">
                  <div>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                  <button onClick={() => handleEditFaq(faq)}>Edit</button>
                  <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSaveFaq} className="faq-form">
          <input
            type="text"
            placeholder="Enter question"
            value={newFaq.question}
            onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
            required
          />
          <textarea
            placeholder="Enter answer"
            value={newFaq.answer}
            onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
            required
          />
          <button type="submit">{isEditing ? 'Update' : 'Add'} FAQ</button>
        </form>
      </div>
    </>
  );
};

export default FAQPage;
