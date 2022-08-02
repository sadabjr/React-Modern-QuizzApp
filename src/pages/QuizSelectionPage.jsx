import React from "react";
import { Link } from "react-router-dom";
import './QuizSelectionPage.css';

const QuizSelectionPage = () => {
  return (
    <div>
      <h1>Choose your desired Quiz Set</h1>

      <Link className="btn-68" to="/QuizHTML">Take HTML Quiz</Link>
      <Link className="btn-68" to="/QuizCSS">Take CSS Quiz</Link>
      <Link className="btn-68" to="/QuizJS">Take JavaScript Quiz</Link>
    </div>
  );
};

export default QuizSelectionPage;
