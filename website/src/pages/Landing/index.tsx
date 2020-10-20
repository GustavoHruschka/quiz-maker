import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import LandindQuizItem from '../../components/LandingQuizItem'
import api from '../../services/api'

import './styles.css'

interface QuizData {
  id: number
  title: string
  description: string
}

function Landing() {
  const [quizzes, setQuizzes] = useState<QuizData[]>([])

  useEffect(() => {
    const source = axios.CancelToken.source()

    api
      .get('landing', { cancelToken: source.token })
      .then(response => {
        const quizzesData: QuizData[] = response.data
        setQuizzes(quizzesData)
      })

    return () => { source.cancel() }
  }, [])

  return (
    <div className="landing-page-container">
      <header className="landing-page-header">
        <h1 className="landing-logo">Quizzyes!</h1>
      </header>

      <main className='landing-page-body'>
        <ul className="quiz-list">
          {quizzes.map(quiz => {
            return (
              <li className="quiz-list-item" key={quiz.id}>
                <LandindQuizItem
                  quizPath={`/view-quiz/${quiz.id}`}
                  quizTitle={quiz.title}
                  quizDescription={quiz.description}
                />
              </li>
            )
          })}
        </ul>

        <Link to='/create-quiz' className="create-quiz-link">
          Create my quiz!
        </Link>
      </main>
    </div>
  )
}

export default Landing
