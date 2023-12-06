import React, { useEffect, useState, useCallback } from 'react';
import useSound from 'use-sound';
import play from '../sounds/play.mp3';
import correct from '../sounds/correct.mp3';
import wrong from '../sounds/wrong.mp3';
import CongratulationsModal from './CongratulationsModal';

const Trivia = ({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  onComplete,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const [isQuestionDisplayed, setIsQuestionDisplayed] = useState(false);
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  const getRandomQuestion = useCallback(() => {
    // Шукаємо питання, які не були використані
    const availableQuestions = data.filter(q => !q.used);

    // Якщо всі питання були використані, повертаємо null
    if (availableQuestions.length === 0) {
      return null;
    }

    // Вибираємо випадкове питання
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const randomQuestion = availableQuestions[randomIndex];

    // Позначаємо питання як використане
    randomQuestion.used = true;

    return randomQuestion;
  }, [data]);

  const isLastQuestion = questionNumber === data.length;

  useEffect(() => {
    // Отримуємо випадкове питання
    const newQuestion = getRandomQuestion();

    if (newQuestion) {
      setQuestion(newQuestion);
      setSelectedAnswer(null);
      setClassName('answer');

      setIsQuestionDisplayed(true);
    } else {
      console.log('All questions used'); // Виводимо повідомлення в консоль
      setTimeOut(true);
    }
  }, [questionNumber, getRandomQuestion, setTimeOut]);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = a => {
    if (isQuestionDisplayed) {
      setSelectedAnswer(a);
      setClassName('answer active');
      delay(3000, () => {
        setClassName(a.correct ? 'answer correct' : 'answer wrong');
      });

      delay(5000, () => {
        if (a.correct) {
          correctAnswer();
          delay(1000, () => {
            if (questionNumber === data.length - 2) {
              console.log('Congrats! You won 500,000!');
              setQuestionNumber(data.length); // Це встановлює questionNumber на довжину даних, щоб показати останнє питання
            } else if (isLastQuestion) {
              onComplete();
            } else {
              setQuestionNumber(prev => prev + 1);
            }
          });
        } else {
          wrongAnswer();
          delay(1000, () => {
            setTimeOut(true);
          });
        }
      });
    }
  };

  return (
    <div className="trivia">
      {isLastQuestion ? (
        <CongratulationsModal
          isOpen={true}
          earned="Ваш виграш"
          onRequestClose={() => {}}
        />
      ) : (
        <>
          <div className="question">{question?.question}</div>
          <div className="answers">
            {question?.answers.map(a => (
              <div
                className={selectedAnswer === a ? className : 'answer'}
                key={a.text}
                onClick={() => handleClick(a)}
              >
                {a.text}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Trivia;
