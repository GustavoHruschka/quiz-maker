import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faImages } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import CreateTextOptions from '../CreateTextOptions/CreateTextOptions'

interface questionItem {
  questionText: string
  optionsText: Array<string>
  selectedRightOptionNumber: number
}

interface createQuizItemState {
  questionWithImages: boolean
}

interface createQuizItemProps {
  questionData: questionItem
  questionNumber: number

  handleDeleteQuestion: Function
  handleQuestionTextchange: Function
  handleOptionTextChange: Function
  handleSelectRightOption: Function
  handleAddOption: Function
  handleDeleteOption: Function
}

class CreateQuizItem extends React.Component<createQuizItemProps, createQuizItemState> {
  constructor(props: Readonly<createQuizItemProps>) {
    super(props)
  }

  handleQuestionImagesToggle(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.setState({ questionWithImages: !this.state.questionWithImages })
  }

  render() {
    return (
      <div className="quiz-item-container">
        <header className="quiz-item-header">
          <p className="quiz-item-logo">Donatello</p>

          <button
            className="header-button"
            onClick={event => this.props.handleDeleteQuestion(event, this.props.questionNumber)}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="header-button-icon"
            />
          </button>
        </header>

        <textarea
          className="question"
          placeholder="Your question goes here"
          onChange={event => this.props.handleQuestionTextchange(event, this.props.questionNumber)}
        />

        <CreateTextOptions
          questionData={this.props.questionData}
          questionNumber={this.props.questionNumber}

          handleAddOption={this.props.handleAddOption}
          handleDeleteOption={this.props.handleDeleteOption}
          handleOptionTextChange={this.props.handleOptionTextChange}
          handleSelectRightOption={this.props.handleSelectRightOption}
        />
      </div>
    )
  }
}

export default CreateQuizItem