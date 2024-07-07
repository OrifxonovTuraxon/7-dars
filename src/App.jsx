import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import ThankYou from './components/page2';
import './components/Modal.css';
import './App.css';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSuccess = () => {
    setLoggedIn(true);
    closeModal();
  };

  return (
    <div className="app-container">
      {!isLoggedIn && !isModalOpen && (
        <div className="welcome-container">
          <h1>Saytimizga xush kelibsiz</h1>
          <button onClick={openModal} className="open-modal-button">Kirish</button>
        </div>
      )}
      {isLoggedIn ? (
        <ThankYou />
      ) : (
        isModalOpen && <LoginForm onClose={closeModal} onSuccess={handleSuccess} />
      )}
    </div>
  );
};

export default App;
