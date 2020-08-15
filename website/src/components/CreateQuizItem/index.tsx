import React from 'react'

import './styles.css'

interface myState {
    questionText: String
    optionsText: Array<String>
    correctOptionIndex: number
}

class CreateQuizItem extends React.Component<{}, myState> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            questionText: '',
            optionsText: ['', ''],
            correctOptionIndex: 0,
        }
    }

    handleAddOption() {
        this.setState(previousState => ({
            optionsText: [...previousState.optionsText, '']
        }))
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
                            <div
                                className="option-box"
                                key={'box' + index}
                            >

                                <input
                                    className="options"
                                    key={'text' + index}
                                    type="text"
                                    placeholder={`Option ` + (index + 1)}
                                />
                                <div
                                    className="select-right-option-box"
                                    style={{
                                        backgroundColor:
                                            this.state.correctOptionIndex === index ? '#59eb4c' : '#eb5f4c'
                                    }}
                                >
                                    <input
                                        className="select-right-option"
                                        key={'radio' + index}
                                        type="radio"
                                        name="select-right-option"
                                        value={index}
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