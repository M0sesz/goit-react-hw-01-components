import React from 'react';

const Congratulations = ({ earned }) => {
  return (
    <div className="congratulations">
      <h2>Вітаємо!</h2>
      <p>Ви успішно відповіли на всі питання.</p>
      <p>Ваш виграш: {earned}</p>
    </div>
  );
};

export default Congratulations;
