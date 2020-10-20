import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import CreateQuizItem from '../../components/CreateQuizItem'

import './styles.css'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api'

interface questionItem {
  questionText: string
  optionsText: Array<string>
  selectedRightOptionNumber: number
}

const blankQuestionItem: questionItem = {
  questionText: '',
  optionsText: ['', ''],
  selectedRightOptionNumber: 0
}

interface createQuizState {
  title: string
  description: string
  questions: Array<questionItem>
}

class CreateQuiz extends React.Component<{}, createQuizState> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      title: '',
      description: '',
      questions: [blankQuestionItem, blankQuestionItem, blankQuestionItem],
    }

    this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this)
    this.handleQuestionTextChange = this.handleQuestionTextChange.bind(this)
    this.handleOptionTextChange = this.handleOptionTextChange.bind(this)
    this.handleSelectRightOption = this.handleSelectRightOption.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }

  async handleSubmitQuiz() {
    try {
      await api.post('/quizzes', this.state)
      alert('Quiz registered successfully!')
    } catch (error) {
      alert('An error occured while trying to register your quiz, sorry :(')
      console.log(error)
    }
  }

  handleQuizTitleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ title: event.currentTarget.value })
  }

  handleQuizDescriptionChange(event: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ description: event.currentTarget.value })
  }

  handleAddQuestion() {
    let questionsCopy = [...this.state.questions]
    questionsCopy.push(blankQuestionItem)
    this.setState({ questions: questionsCopy })
  }

  handleDeleteQuestion(questionNumber: number) {
    if (this.state.questions.length === 1) {
      alert("You can't delete all the questions")
    } else {
      let questionsCopy = this.state.questions
      questionsCopy.splice(questionNumber, 1)
      this.setState({ questions: questionsCopy })
    }
  }

  handleQuestionTextChange(event: React.FormEvent<HTMLTextAreaElement>, questionNumber: number) {
    let questionsCopy = [...this.state.questions]
    let questionCopy = { ...questionsCopy[questionNumber] }

    questionCopy.questionText = event.currentTarget.value
    questionsCopy[questionNumber] = questionCopy

    this.setState({ questions: questionsCopy })
  }

  handleOptionTextChange(event: React.FormEvent<HTMLInputElement>, questionNumber: number, optionNumber: number) {
    let questionsCopy = [...this.state.questions]
    let questionCopy = { ...questionsCopy[questionNumber] }
    let optionsTextCopy = [...questionCopy.optionsText]

    optionsTextCopy[optionNumber] = event.currentTarget.value
    questionCopy.optionsText = optionsTextCopy
    questionsCopy[questionNumber] = questionCopy

    this.setState({ questions: questionsCopy })
  }

  handleSelectRightOption(questionNumber: number, optionNumber: number) {
    let questionsCopy = [...this.state.questions]
    let questionCopy = { ...questionsCopy[questionNumber] }

    questionCopy.selectedRightOptionNumber = optionNumber
    questionsCopy[questionNumber] = questionCopy

    this.setState({ questions: questionsCopy })
  }

  handleAddOption(questionNumber: number) {
    let questionsCopy = [...this.state.questions]
    let questionCopy = { ...questionsCopy[questionNumber] }
    let optionsTextCopy = [...questionCopy.optionsText]

    optionsTextCopy.push('')
    questionCopy.optionsText = optionsTextCopy
    questionsCopy[questionNumber] = questionCopy

    this.setState({ questions: questionsCopy })
  }

  handleDeleteOption(questionNumber: number, optionNumber: number) {
    if (this.state.questions[questionNumber].optionsText.length === 1) {
      window.alert("You can't delete all the options")
    } else {
      let questionsCopy = [...this.state.questions]
      let questionCopy = { ...questionsCopy[questionNumber] }
      let optionsTextCopy = [...questionCopy.optionsText]

      optionsTextCopy.splice(optionNumber, 1)
      questionCopy.optionsText = optionsTextCopy
      questionsCopy[questionNumber] = questionCopy

      this.setState({ questions: questionsCopy })
    }
  }

  render() {
    return (
      <div id="create-quiz-page-container">
        <PageHeader />

        <main className="create-quiz-page-body">
          <h1>Make your own Quizzyes!</h1>
          <h2>Just write down the <br />
                questions and it'll be ready to share.</h2>

          <form className="questions-container">
            <label htmlFor="quiz-title-input" className="quiz-title-input-label">
              <span className="quiz-title-label-text">Quiz title:</span>
              <input
                type="text"
                id="quiz-title-input"
                onChange={event => { this.handleQuizTitleChange(event) }}
              />
            </label>

            <label htmlFor="quiz-description-textarea" className="quiz-description-textarea-label">
              <span className="quiz-description-label-text">Description:</span>
              <textarea
                id="quiz-description-textarea"
                onChange={event => { this.handleQuizDescriptionChange(event) }}
                maxLength={250}
              />
            </label>

            {this.state.questions.map((question, index) =>
              <CreateQuizItem
                key={index}
                questionNumber={index}
                questionData={question}

                handleDeleteQuestion={this.handleDeleteQuestion}
                handleQuestionTextchange={this.handleQuestionTextChange}
                handleOptionTextChange={this.handleOptionTextChange}
                handleSelectRightOption={this.handleSelectRightOption}
                handleAddOption={this.handleAddOption}
                handleDeleteOption={this.handleDeleteOption}
              />
            )}

            <div
              className="add-question-button"
              onClick={() => this.handleAddQuestion()}
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="add-question-icon"
              />
              <p>More Questions</p>
            </div>
            <input
              type="button"
              value="Submit Quiz!"
              className="submit-button"
              onClick={() => { this.handleSubmitQuiz() }}
            />
          </form>
        </main>
      </div>
    )
  }
}

export default CreateQuiz