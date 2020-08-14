import React from 'react'

import './styles.css'

interface myState {
    questionText: String
    optionsText: Array<String>
}

class CreateQuizItem extends React.Component<{}, myState> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            questionText: '',
            optionsText: ['', '']
        }
    }

    handleAddOption() {
        this.setState(previousState => ({
            optionsText: [...previousState.optionsText, '']
        }))

        console.log('this.state')
    }

    handleQuestionTextChange(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ questionText: event.currentTarget.value })

        console.log(this.state)
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
                            <input
                                key={index}
                                type="text"
                                className="options"
                                placeholder={`Option `+ (index + 1)}
                            />
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