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
        <h1 className="quiz-title">{props.quizTitle}</h1>
        <h2 className="quiz-description">{props.quizDescription}</h2>
      </Link>
    </div>
  )
}

export default LandindQuizItem
