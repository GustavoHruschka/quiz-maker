import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import PageHeader from '../../components/PageHeader'
import ViewQuizItem from '../../components/ViewQuizItem'
import api from '../../services/api'

import './styles.css'

interface questionData {
  text: string
  optionsText: Array<string>
  right_option: number
}

interface QuizData {
  title: string
  description: string
  questions: Array<questionData>
}

function ViewQuiz() {
  const emptyQuizData: QuizData = {
    title: '',
    description: '',
    questions: [
      {
        text: '',
        optionsText: ['', '', '',],
        right_option: 0
      },
      {
        text: '',
        optionsText: ['', '', '',],
        right_option: 0
      },
      {
        text: '',
        optionsText: ['', '', '',],
        right_option: 0
      },
    ]
  }
  const { id }: {id: string} = useParams()
  const [quizData, setQuizData] = useState<QuizData>(emptyQuizData)
  const [questionsState, setQuestionsState] = useState<number[]>(quizData.questions.map(() => 2))

  useEffect(() => {
    const source = axios.CancelToken.source()

    api.get(`quizzes/${id}`).then(response => {
      const fetchedQuizData: QuizData = response.data

      setQuizData(fetchedQuizData)
      setQuestionsState(fetchedQuizData.questions.map(() => 2))
    })

    return () => { source.cancel() }
  }, [id])

  function changeViewQuizComponentState(questionNumber: number, isAnswerRight: boolean) {
    let questionsStateCopy = [...questionsState]

    if (isAnswerRight) {
      questionsStateCopy[questionNumber] = 1
      setQuestionsState(questionsStateCopy)
    } else {
      questionsStateCopy[questionNumber] = 0
      setQuestionsState(questionsStateCopy)
    }
  }

  const isTheEntireQuizAnswered = !questionsState.some(
    questionState => questionState === 2
  )
  const ammountOfRightAnswers = questionsState.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  const ammountOfQuestions = questionsState.length
  const resultPercentage = (ammountOfRightAnswers / ammountOfQuestions) * 100
  const resultMessage = resultPercentage === 100
    ? 'Perfect!'
    : resultPercentage > 70
      ? 'Congratulations!'
      : resultPercentage > 30
        ? 'Okay, but I know you can do better!'
        : 'Uh... good luck next time!'

  return (
    <div className="view-quiz-page-container">
      <PageHeader />

      <h1 className="quiz-title">{quizData.title}</h1>
      <h2 className="quiz-description">{quizData.description}</h2>

      <form className="questions-container">
        {quizData.questions.map((question, questionNumber) => {
          return (
            <ViewQuizItem
              question={question}
              questionNumber={questionNumber}
              key={questionNumber}
              changeViewQuizState={changeViewQuizComponentState}
            />
          )
        })}
      </form>
      {isTheEntireQuizAnswered &&
          <section className="result-box">
            <h1 className="result-primary-message">{resultMessage}</h1>
            <h2 className="result-secondary-message">
              You got right {ammountOfRightAnswers} questions out of {ammountOfQuestions}!
            </h2>

            <div className="result-percentage-circle">
              {Math.round(resultPercentage)}%
            </div>
          </section>
      }
    </div>
  )
}

export default ViewQuiz
