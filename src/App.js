
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './routes/HomePage';
import ChatBot from './routes/ChatBot';
import TranslatorPage from './routes/TranslatorPage';
import Auth from './routes/Auth';
import About from './routes/About';
import FaqSection from './routes/FaqSection'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot/>} />
        <Route path="/translate" element={<TranslatorPage/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<FaqSection/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
