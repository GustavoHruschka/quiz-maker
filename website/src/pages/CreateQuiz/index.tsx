import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

import CreateQuizItem from '../../components/CreateQuizItem'

import './styles.css'

interface myState {
    questionsId: Array<number>
    questionsIdCounter: number
}

class CreateQuiz extends React.Component<{}, myState> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            questionsId: [0, 1,],
            questionsIdCounter: 2
        }

        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this)
    }

    handleAddQuestion() {
        this.setState(previousState => ({
            questionsId: [...previousState.questionsId, this.state.questionsIdCounter]
        }))
        this.setState({ questionsIdCounter: this.state.questionsIdCounter + 1 })
    }

    handleDeleteQuestion(questionId: number) {
        if (this.state.questionsId.length === 1) {
            alert("You can't delete all the questions")
        }

        else {
            let questionsCopy = this.state.questionsId
            let index = questionsCopy.indexOf(questionId)
            questionsCopy.splice(index, 1)

            this.setState({ questionsId: questionsCopy })
        }
    }

    render() {
        return (
            <div id="create-quiz-page-container">
                <header className="page-header">
                    <FontAwesomeIcon
                        icon={faLongArrowAltLeft}
                        className="page-header-back-icon"
                    />

                    <p className="page-header-logo">Quizzyes</p>
                </header>

                <main className="create-quiz-page-body">
                    <h1>Make your own Quizzyes!</h1>
                    <h2>Just write down the <br />
                questions and it'll be ready to share.</h2>
                    <form className="questions-container">

                        {this.state.questionsId.map((questionId) =>
                            <CreateQuizItem
                                key={questionId}
                                questionId={questionId}
                                handleDeleteQuestion={this.handleDeleteQuestion}
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
                            type="submit"
                            value="Done!"
                            className="submit-button"
                        />
                    </form>
                </main>
            </div>
        )
    }
}

export default CreateQuiz