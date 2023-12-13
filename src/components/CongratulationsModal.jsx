import React from 'react';
import Modal from 'react-modal';

const CongratulationsModal = ({ isOpen, onRequestClose }) => (
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#100241',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    }}
  >
    <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Вітаємо!</h2>
    <p style={{ fontSize: '18px', marginBottom: '50px' }}>
      Ви завершили гру та відповіли на всі питання та заробили ₴ 1.000.000!
    </p>
    <button
      style={{
        padding: '10px',
        backgroundColor: '#00008b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
      onClick={onRequestClose}
    >
      Закрити
    </button>
  </Modal>
);

export default CongratulationsModal;
