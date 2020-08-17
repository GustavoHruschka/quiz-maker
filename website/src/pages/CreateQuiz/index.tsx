import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

import CreateQuizItem from '../../components/CreateQuizItem'

import './styles.css'

interface myState {
    questions: Array<number>
}

class CreateQuiz extends React.Component<{}, myState> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            questions: [0, ]
        }
    }

    handleAddQuestion() {
        this.setState(previousState => ({
            questions: [...previousState.questions, previousState.questions.length]
        }))
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

                        {this.state.questions.map(questionNumber => 
                            <CreateQuizItem 
                                key={questionNumber}
                                questionNumber={questionNumber}
                            />
                        )}

                        <div 
                            className="add-question-button" 
                            onClick={() => this.handleAddQuestion()}
                        >
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="add-question-icon" />
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