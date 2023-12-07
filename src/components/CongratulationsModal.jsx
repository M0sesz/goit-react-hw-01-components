import React from 'react';
import Modal from 'react-modal';

const CongratulationsModal = ({ isOpen, earned, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Вітання"
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      content: {
        width: '900px',
        margin: 'auto',
        alignItems: 'center',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#100241',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    }}
  >
    <h2>Вітаємо!</h2>
    <p>Ви завершили гру та відповіли на всі питання та заробили {earned} !.</p>
    <button
      style={{
        padding: '10px',
        margin: '10px',
        backgroundColor: '#00008b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
      onClick={onRequestClose}
    >
      Закрити
    </button>
  </Modal>
);

export default CongratulationsModal;
