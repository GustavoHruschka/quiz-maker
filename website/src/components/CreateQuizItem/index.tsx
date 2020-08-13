import React from 'react'

import './styles.css'

const CreateQuizItem = () =>
    <div className="quiz-item-container">
        <div className="question">
            Write your questions here
        </div>
        <div className="answer">
            <input type="button" value="Option 1" className="options" />
            <input type="button" value="Option 2" className="options" />
            <input type="button" value="Option 3" className="options" />
            <div className="add-option-button">

                <p className="add-option">Add option</p> 
            </div>
        </div>
    </div>

export default CreateQuizItem