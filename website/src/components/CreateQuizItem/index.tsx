import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

interface myState {
    questionText: String
    optionsText: Array<String>
}

interface myProps {
    questionNumber: number
}

class CreateQuizItem extends React.Component<myProps, myState> {
    constructor(props: Readonly<myProps>) {
        super(props)
        this.state = {
            questionText: '',
            optionsText: ['', ''],
        }
    }

    handleAddOption() {
        this.setState(previousState => ({
            optionsText: [...previousState.optionsText, '']
        }))
        console.log(this.state.optionsText)
    }

    handleQuestionTextChange(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ questionText: event.currentTarget.value })
    }

    render() {
        return (
            <div className="quiz-item-container">
                <textarea
                    className="question"
                    placeholder="Write your question here."
                    onChange={event => this.handleQuestionTextChange(event)}
                />

                <div className="answer">
                    {this.state.optionsText.map((value, index) => {
                        return (
                            <div className="option-box" key={'box' + index}>
                                <input
                                    className="options"
                                    key={'text' + index}
                                    type="text"
                                    placeholder={`Option ` + (index + 1)}
                                />

                                <label
                                    htmlFor={'radio' + index + 'question' + this.props.questionNumber}
                                    className="right-option-selector-container"
                                >
                                    <input
                                        className="right-option-selector"
                                        key={'radio' + index}
                                        id={'radio' + index + 'question' + this.props.questionNumber}
                                        type="radio"
                                        name={"select-right-option" + this.props.questionNumber}
                                        value={index}
                                    />
                                    <span className="checkmark"></span>
                                </label>

                                <div 
                                    className="delete-option-button"
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
            </div>
        )
    }
}

export default CreateQuizItem