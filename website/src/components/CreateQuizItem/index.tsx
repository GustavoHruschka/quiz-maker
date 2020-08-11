import React from 'react'

import './styles.css'

const CreateQuizItem = () =>
    <div className="quiz-item-container">
        <div className="question">
            Write your questions here
        </div>
        <div className="answer">
            <input type="button" value="Option 1" className="options" />
        </div>
    </div>

export default CreateQuizItem