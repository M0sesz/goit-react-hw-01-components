import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Start from './components/Form';
import Timer from './components/Timer';
import Trivia from './components/Questions';
import RestartButton from './components/RestrartGame';

import axios from 'axios';

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState('₴ 0');
  const [questionsData, setQuestionsData] = useState(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [restartGame, setRestartGame] = useState(false);

  const moneyPyramid = useMemo(
    () => [
      { id: 15, amount: '₴ 1.000.000' },
      { id: 14, amount: '₴ 500.000' },
      { id: 13, amount: '₴ 250.000' },
      { id: 12, amount: '₴ 125.000' },
      { id: 11, amount: '₴ 64.000' },
      { id: 10, amount: '₴ 32.000' },
      { id: 9, amount: '₴ 16.000' },
      { id: 8, amount: '₴ 8.000' },
      { id: 7, amount: '₴ 4.000' },
      { id: 6, amount: '₴ 2.000' },
      { id: 5, amount: '₴ 1.000' },
      { id: 4, amount: '₴ 500' },
      { id: 3, amount: '₴ 300' },
      { id: 2, amount: '₴ 100' },
      { id: 1, amount: '₴ 50' },
    ],
    []
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          'https://65638255ee04015769a750ec.mockapi.io/api/million/questions'
        );

        const filteredQuestions = response.data.filter(question => {
          return !usedQuestionIds.includes(question.id);
        });

        const easyQuestions = shuffleArray(
          filteredQuestions.filter(q => q.level === 'easy')
        ).slice(0, 5);
        const mediumQuestions = shuffleArray(
          filteredQuestions.filter(q => q.level === 'medium')
        ).slice(0, 5);
        const hardQuestions = shuffleArray(
          filteredQuestions.filter(q => q.level === 'hard')
        ).slice(0, 5);

        const sortedQuestions = [
          ...easyQuestions,
          ...mediumQuestions,
          ...hardQuestions,
        ];

        setQuestionsData(sortedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [usedQuestionIds]);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  const handleQuestionAnswered = (questionId, selectedAnswer) => {
    setUsedQuestionIds(prevIds => [...prevIds, questionId]);

    const answeredQuestion = questionsData.find(q => q.id === questionId);

    if (selectedAnswer === answeredQuestion.correctAnswer) {
      setQuestionNumber(prev => prev + 1);
    } else {
      setTimeOut(true);
      setRestartGame(true);
    }
  };

  const handleRestartGame = () => {
    setQuestionNumber(1); // Скидаємо номер питання на початок
    setUsedQuestionIds([]); // Очищаємо використані питання
    setTimeOut(false); // Знову можна грати
    setRestartGame(false); // Вимикаємо кнопку "Почати гру спочатку"
  };

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <>
                <h1 className="endText">Ви заробили: {earned}</h1>
                <RestartButton onClick={handleRestartGame} />
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={questionsData}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                    onQuestionAnswered={handleQuestionAnswered}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map(m => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? 'moneyListItem active'
                      : 'moneyListItem'
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
