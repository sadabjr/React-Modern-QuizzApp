import React, { useState } from 'react';
import './QuizHTML.css';
import {Link} from 'react-router-dom';
import { jsQuestions } from '../components/jsQuizAPI.jsx';






export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < jsQuestions.length) {
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
					You scored {score} out of {jsQuestions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{jsQuestions.length}
						</div>
						<div className='question-text'>{jsQuestions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{jsQuestions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='ans-btn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>

		</>
	);
}
