import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons'

import './styles.css'

interface myState {
    questionMinimized: boolean
    questionText: string
    optionsText: Array<string>
}

interface myProps {
    questionNumber: number
}

class CreateQuizItem extends React.Component<myProps, myState> {
    constructor(props: Readonly<myProps>) {
        super(props)
        this.state = {
            questionMinimized: false,
            questionText: '',
            optionsText: ['', ''],
        }
    }

    handleQuestionWindowToggle() {
        this.setState({ questionMinimized: !this.state.questionMinimized })
        console.log(this.state)
    }

    handleQuestionTextChange(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ questionText: event.currentTarget.value })
    }

    handleOptionTextChange(event: React.FormEvent<HTMLInputElement>, optionNumber: number) {
        let optionsTextCopy = this.state.optionsText
        optionsTextCopy[optionNumber] = event.currentTarget.value

        this.setState({ optionsText: optionsTextCopy })
    }

    handleAddOption() {
        this.setState(previousState => ({
            optionsText: [...previousState.optionsText, '']
        }))
    }

    handleDeleteOption(optionNumber: number) {
        let optionsTextCopy = this.state.optionsText
        optionsTextCopy.splice(optionNumber, 1)

        this.setState({ optionsText: optionsTextCopy })
        console.log(this.state)
    }

    render() {
        return (
            <div className="quiz-item-container">
                <div className="quiz-item-header">
                    <div className="header-button">
                        <FontAwesomeIcon icon={faWindowMinimize} className="header-button-icon" />
                    </div>
                    <div className="header-button" onClick={() => this.handleQuestionWindowToggle()}>
                        <FontAwesomeIcon icon={faTimes} className="header-button-icon" />
                    </div>
                </div>

                <textarea
                    className="question"
                    placeholder="Write your question here."
                    onChange={event => this.handleQuestionTextChange(event)}
                />

                {this.state.questionMinimized ? null :
                    <div className="answer">
                        {this.state.optionsText.map((optionValue, optionNumber) => {
                            return (
                                <div className="option-box" key={'box' + optionNumber}>
                                    <input
                                        className="options"
                                        key={'text' + optionNumber}
                                        type="text"
                                        value={optionValue}
                                        placeholder={`Option ` + (optionNumber + 1)}
                                        onChange={(event) => this.handleOptionTextChange(event, optionNumber)}
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
                                            value={optionNumber}
                                        />
                                        <span className="checkmark"></span>
                                    </label>

                                    <div
                                        className="delete-option-button"
                                        onClick={() => this.handleDeleteOption(optionNumber)}
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
                            onClick={() => this.handleAddOption()}
                            value="Add option"
                        />
                    </div>
                }
            </div>
        )
    }
}

export default CreateQuizItem