import React, { useEffect, useState, useCallback } from 'react';
import useSound from 'use-sound';
import play from '../sounds/play.mp3';
import correct from '../sounds/correct.mp3';
import wrong from '../sounds/wrong.mp3';
import CongratulationsModal from './CongratulationsModal';

const Questions = ({
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
  const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] =
    useState(false);

  const getRandomQuestion = useCallback(() => {
    const availableQuestions = data.filter(q => !q.used);

    if (availableQuestions.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const randomQuestion = availableQuestions[randomIndex];

    randomQuestion.used = true;

    return randomQuestion;
  }, [data]);

  useEffect(() => {
    const newQuestion = getRandomQuestion();

    if (newQuestion) {
      setQuestion(newQuestion);
      setSelectedAnswer(null);
      setClassName('answer');

      setIsQuestionDisplayed(true);
    } else {
      console.log('All questions used');
      setTimeOut(true);
    }
  }, [questionNumber, getRandomQuestion, setTimeOut]);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  const delay = async duration => {
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  };

  const handleModalClose = () => {
    setIsCongratulationsModalOpen(false);
  };

  const handleClick = async a => {
    if (isQuestionDisplayed) {
      setSelectedAnswer(a);
      setClassName('answer active');

      await delay(3000);
      setClassName(a.correct ? 'answer correct' : 'answer wrong');

      await delay(2000);

      if (a.correct) {
        correctAnswer();
        await delay(1000);

        if (questionNumber === 15) {
          setIsCongratulationsModalOpen(true);
          onComplete();
        } else {
          setQuestionNumber(prev => prev + 1);
        }
      } else {
        wrongAnswer();
        await delay(1000);
        setTimeOut(true);
      }
    }
  };

  return (
    <div className="trivia">
      {isCongratulationsModalOpen && (
        <CongratulationsModal
          isOpen={isCongratulationsModalOpen}
          earned="Ваш виграш"
          onRequestClose={handleModalClose}
        />
      )}
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
    </div>
  );
};

export default Questions;
