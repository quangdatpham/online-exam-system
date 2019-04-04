import React from 'react';

import './ViewQuestion.css';
import BWButton from '../../../buttons/BWButton';
import { TeacherConsumer } from '../../../context/TeacherContext';

export default function (props) {
    const {
        questionNumber,
        question,
        answerA,
        answerB,
        answerC,
        answerD,
        rightAnswer,
        fileName,
        renderQuestion
    } = props;

    return (
        <div className="ViewQuestion">
            <div className="question-number">
                Question {questionNumber}
            </div>
            <div className="question-wrap">
                <p>{question}</p>
            </div>
            <div className="answer-wrap">
                <p>A. {answerA}</p>
                <p>B. {answerB}</p>
                <p>C. {answerC}</p>
                <p>D. {answerD}</p>
            </div>
            <div className="file-attach">
                {fileName ? <p>File attach: {fileName}</p> : ''}
            </div>
            <div className="right-answer">
                <p>Right answer: <span className="ra">{rightAnswer}</span></p>
            </div>
            <div className="action">
                <BWButton handleClick={() => renderQuestion(questionNumber)}>Edit</BWButton>
                <TeacherConsumer>
                    {
                        ({ deleteQuestion }) =>
                            <BWButton handleClick={() => deleteQuestion(questionNumber)}>Delete</BWButton>
                    }
                </TeacherConsumer>
            </div>
        </div>
    );
}