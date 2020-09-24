import React from 'react'

import './styles.css'

interface questionData {
    questionText: string
    optionsText: Array<string>
    selectedRightOptionNumber: number
}

interface viewQuizItemProps {
    question: questionData
}

interface viewQuizItemState {
    isQuestionAnswered: boolean
    wrongAnswer: number
}

const quizButtonStyles = {
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

class ViewQuizItem extends React.Component<viewQuizItemProps, viewQuizItemState> {
    constructor(props: Readonly<viewQuizItemProps>) {
        super(props)
        this.state = {
            isQuestionAnswered: false,
            wrongAnswer: Number()
        }
    }

    handleQuestionAnswer(optionNumber: number) {
        this.setState({ isQuestionAnswered: true })

        if (optionNumber !== this.props.question.selectedRightOptionNumber) {
            this.setState({ wrongAnswer: optionNumber })
        }
    }

    render() {
        return (
            <fieldset className="question-container">
                <div className="question">{this.props.question.questionText}</div>

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
                                    ? this.props.question.selectedRightOptionNumber === optionNumber
                                        ? quizButtonStyles.rightOption
                                        : optionNumber === this.state.wrongAnswer
                                            ? quizButtonStyles.wrongAnswer
                                            : quizButtonStyles.wrongOption 
                                    : quizButtonStyles.questionNotAnsweredYet
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