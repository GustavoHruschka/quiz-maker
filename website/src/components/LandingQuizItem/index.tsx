import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

interface landingQuizItemProps {
    quizPath: string
    quizTitle: string
    quizDescription: string
}

function LandindQuizItem(props: landingQuizItemProps) {
    return (
        <div className="quiz-item">
            <Link className="quiz-link" to={props.quizPath}>
                <h1 className="quiz-title">Título do quiz</h1>
                <h2 className="quiz-description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h2>
            </Link>
        </div>
    )
}

export default LandindQuizItem