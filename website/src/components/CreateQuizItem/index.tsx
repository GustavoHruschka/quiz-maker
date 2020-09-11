import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTimes, faWindowMinimize, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

interface questionItem {
    questionText: string
    optionsText: Array<string>
    selectedRightOptionNumber: number
}

interface createQuizItemState { isQuestionMinimized: boolean }

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
        this.state = {
            isQuestionMinimized: false
        }
    }

    handleQuestionWindowToggle() {
        this.setState({ isQuestionMinimized: !this.state.isQuestionMinimized })
    }

    render() {
        return (
            <div className="quiz-item-container">
                <div className="quiz-item-header">
                    <p className="quiz-item-logo">Quizzyes</p>
                    <div
                        className="header-button"
                        onClick={() => this.handleQuestionWindowToggle()}
                    >
                        <FontAwesomeIcon icon={this.state.isQuestionMinimized ? faWindowMaximize : faWindowMinimize} className="header-button-icon" />
                    </div>
                    <div
                        className="header-button"
                        onClick={() => this.props.handleDeleteQuestion(this.props.questionNumber)}
                    >
                        <FontAwesomeIcon icon={faTimes} className="header-button-icon" />
                    </div>
                </div>

                <textarea
                    className="question"
                    placeholder="Write your question here"
                    onChange={event => this.props.handleQuestionTextchange(event, this.props.questionNumber)}
                />

                {this.state.isQuestionMinimized ? null :
                    <div className="answer">
                        {this.props.questionData.optionsText.map((optionText, optionNumber) => {
                            return (
                                <div className="option-box" key={'box' + optionNumber}>
                                    <input
                                        className="options"
                                        key={'text' + optionNumber}
                                        type="text"
                                        placeholder={`Option ` + (optionNumber + 1)}
                                        value={optionText}
                                        onChange={(event) => this.props.handleOptionTextChange(event, this.props.questionNumber, optionNumber)}
                                    />

                                    <label
                                        htmlFor={'radio' + optionNumber + 'question' + this.props.questionNumber}
                                        className="right-option-selector-container"
                                    >
                                        <input
                                            className="right-option-selector"
                                            key={'radio' + optionNumber}
                                            id={'radio' + optionNumber + 'question' + this.props.questionNumber}
                                            type="radio"
                                            name={"select-right-option" + this.props.questionNumber}
                                            onChange={() => this.props.handleSelectRightOption(this.props.questionNumber, optionNumber)}
                                            checked={this.props.questionData.selectedRightOptionNumber === optionNumber}
                                        />
                                        <span className="checkmark"></span>
                                    </label>

                                    <div
                                        className="delete-option-button"
                                        onClick={() => this.props.handleDeleteOption(this.props.questionNumber, optionNumber)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                            className="delete-option-icon"
                                        />
                                    </div>
                                </div>
                            )
                        })}

                        <input
                            type="button"
                            className="add-option-button"
                            onClick={() => this.props.handleAddOption(this.props.questionNumber)}
                            value="Add option"
                        />
                    </div>
                }
            </div>
        )
    }
}

export default CreateQuizItem