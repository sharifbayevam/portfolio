import React, { useState, useEffect } from 'react';
import './ChatAI.css';
import { FaRobot } from 'react-icons/fa';


const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [watchTooltip,  setWatchTooltip] = useState(false);
  const [xabar, setXabar] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setWatchTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
function xabarYubor(){
fetch("api")


}
  return (
    <div className="ai-chat-wrapper">
      {watchTooltip && !isOpen && (
        <div className="ai-tooltip">
            Ask me anything about my portfolio! <br />
        </div>
      )}
      
      <div className={`ai-chat-window ${isOpen ? 'open' : ''}`}>
        <div className="ai-chat-header">
          AI 
          <button onClick={() => setIsOpen(false)}>×</button>
        </div>
        <div className="ai-chat-body">
          <p>Salom! Sizga qanday yordam berolaman?</p>
        </div>
        <div className="ai-chat-footer">
          <input value={xabar} onChange={(e) => setXabar(e.target.value)} type="text" placeholder="Savolingizni yozing..." />
          <button onClick={xabarYubor}>send</button>
        </div>
      </div>

      <button className="ai-chat-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaRobot />
      </button>
    </div>
  );
};

export default ChatAI;