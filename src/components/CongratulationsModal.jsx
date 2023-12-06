// CongratulationsModal.jsx
import React from 'react';
import Modal from 'react-modal';

const CongratulationsModal = ({ isOpen, earned, onRequestClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Вітання">
    <h2>Вітаємо!</h2>
    <p>Ви завершили гру і виграли {earned}.</p>
    <button onClick={onRequestClose}>Закрити</button>
  </Modal>
);

export default CongratulationsModal;
