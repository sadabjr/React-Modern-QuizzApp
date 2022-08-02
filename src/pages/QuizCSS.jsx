import React, { useState } from 'react';
import './QuizHTML.css';
import {Link} from 'react-router-dom';
import { cssQuestions } from '../components/cssQuizAPI';



export default function App() {

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < cssQuestions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
};
return (
  
    <>

    <Link to="/" className='go-to-hom'>Go To Home</Link>
  <div className='app'>
  <div>
    
  </div>
    {showScore ? (
      <div className='score-section'>
        You scored {score} out of {cssQuestions.length}
      </div>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{cssQuestions.length}
          </div>
          <div className='question-text'>{cssQuestions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {cssQuestions[currentQuestion].answerOptions.map((answerOption) => (
            <button className='ans-btn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
      </>
    )}
  </div>

  </>
);
}
