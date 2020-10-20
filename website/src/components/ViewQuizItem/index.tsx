import React from 'react'

import './styles.css'

const quizDynamicButtonStyles = {
  questionNotAnsweredYet: {
    backgroundColor: 'var(secondary-input-bg-color)',
  },
  rightOption: {
    backgroundColor: 'green',
    color: 'var(--h2-color)'
  },
  wrongOption: {
    opacity: 0.4
  },
  wrongAnswer: {
    backgroundColor: 'red',
    color: 'var(--h2-color)',
    opacity: 0.4
  }
}

interface questionData {
  text: string
  optionsText: Array<string>
  right_option: number
}

interface viewQuizItemProps {
  question: questionData
  questionNumber: number
  changeViewQuizState: Function
}

interface viewQuizItemState {
  isQuestionAnswered: boolean
  wrongAnswer: number | null
}

class ViewQuizItem extends React.Component<viewQuizItemProps, viewQuizItemState> {
  constructor(props: Readonly<viewQuizItemProps>) {
    super(props)
    this.state = {
      isQuestionAnswered: false,
      wrongAnswer: null
    }
  }

  handleQuestionAnswer(optionNumber: number) {
    if (this.state.isQuestionAnswered) {
      return
    }

    const isAnswerRight: boolean = optionNumber === this.props.question.right_option

    this.props.changeViewQuizState(this.props.questionNumber, isAnswerRight)

    this.setState({ isQuestionAnswered: true })

    if (isAnswerRight) {
      this.setState({ wrongAnswer: null })
    } else {
      this.setState({ wrongAnswer: optionNumber })
    }
  }

  render() {
    return (
      <fieldset className="question-container">
        <div className="question">{this.props.question.text}</div>

        <div className="options-container">
          {this.props.question.optionsText.map((optionText, optionNumber) => {
            return (
              <input
                type="button"
                className="option"
                key={optionNumber}
                value={optionText}
                onClick={() => { this.handleQuestionAnswer(optionNumber) }}
                style={this.state.isQuestionAnswered
                  ? this.props.question.right_option === optionNumber
                    ? quizDynamicButtonStyles.rightOption
                    : optionNumber === this.state.wrongAnswer
                      ? quizDynamicButtonStyles.wrongAnswer
                      : quizDynamicButtonStyles.wrongOption
                  : quizDynamicButtonStyles.questionNotAnsweredYet
                }
              />
            )
          })}
        </div>
      </fieldset>
    )
  }
}

export default ViewQuizItem