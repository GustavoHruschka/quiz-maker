import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

import CreateQuizItem from '../../components/CreateQuizItem'

import './styles.css'


interface questionItem {
    questionText: string
    optionsText: Array<string>
    selectedRightOptionNumber: number
}

const blankQuestionItem: questionItem = {
    questionText: '',
    optionsText: ['', ''],
    selectedRightOptionNumber: 0
}

interface myState {
    questions: Array<questionItem>
}

class CreateQuiz extends React.Component<{}, myState> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            questions: [blankQuestionItem, blankQuestionItem],
        }

        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this)
        this.handleQuestionTextChange = this.handleQuestionTextChange.bind(this)
        this.handleOptionTextChange = this.handleOptionTextChange.bind(this)
        this.handleSelectRightOption = this.handleSelectRightOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }

    handleSubmitQuiz() {
        console.log(this.state.questions)
    }

    handleAddQuestion() {
        let questionsCopy = [...this.state.questions]
        questionsCopy.push(blankQuestionItem)
        this.setState({ questions: questionsCopy })
    }

    handleDeleteQuestion(questionNumber: number) {
        if (this.state.questions.length === 1) {
            alert("You can't delete all the questions")
        } else {
            let questionsCopy = this.state.questions
            questionsCopy.splice(questionNumber, 1)
            this.setState({ questions: questionsCopy })
        }
    }

    handleQuestionTextChange(event: React.FormEvent<HTMLTextAreaElement>, questionNumber: number) {
        let questionsCopy = [...this.state.questions]
        let questionCopy = { ...questionsCopy[questionNumber] }

        questionCopy.questionText = event.currentTarget.value
        questionsCopy[questionNumber] = questionCopy

        this.setState({ questions: questionsCopy })
    }

    handleOptionTextChange(event: React.FormEvent<HTMLInputElement>, questionNumber: number, optionNumber: number) {
        let questionsCopy = [...this.state.questions]
        let questionCopy = { ...questionsCopy[questionNumber] }
        let optionsTextCopy = [...questionCopy.optionsText]

        optionsTextCopy[optionNumber] = event.currentTarget.value
        questionCopy.optionsText = optionsTextCopy
        questionsCopy[questionNumber] = questionCopy

        this.setState({ questions: questionsCopy })
    }

    handleSelectRightOption(questionNumber: number, optionNumber: number) {
        let questionsCopy = [...this.state.questions]
        let questionCopy = { ...questionsCopy[questionNumber] }

        questionCopy.selectedRightOptionNumber = optionNumber
        questionsCopy[questionNumber] = questionCopy

        this.setState({ questions: questionsCopy })
        console.log(this.state)
    }

    handleAddOption(questionNumber: number) {
        let questionsCopy = [...this.state.questions]
        let questionCopy = { ...questionsCopy[questionNumber] }
        let optionsTextCopy = [...questionCopy.optionsText]

        optionsTextCopy.push('')
        questionCopy.optionsText = optionsTextCopy
        questionsCopy[questionNumber] = questionCopy

        this.setState({ questions: questionsCopy })
        console.log(this.state)
    }

    handleDeleteOption(questionNumber: number, optionNumber: number) {
        if (this.state.questions[questionNumber].optionsText.length === 1) {
            window.alert("You can't delete all the options")
        } else {
            let questionsCopy = [...this.state.questions]
            let questionCopy = { ...questionsCopy[questionNumber] }
            let optionsTextCopy = [...questionCopy.optionsText]

            optionsTextCopy.splice(optionNumber, 1)
            questionCopy.optionsText = optionsTextCopy
            questionsCopy[questionNumber] = questionCopy

            this.setState({ questions: questionsCopy })
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
                        {this.state.questions.map((question, index) =>
                            <CreateQuizItem
                                key={index}
                                questionNumber={index}
                                questionData={question}

                                handleDeleteQuestion={this.handleDeleteQuestion}
                                handleQuestionTextchange={this.handleQuestionTextChange}
                                handleOptionTextChange={this.handleOptionTextChange}
                                handleSelectRightOption={this.handleSelectRightOption}
                                handleAddOption={this.handleAddOption}
                                handleDeleteOption={this.handleDeleteOption}
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
                            type="button"
                            value="Submit Quiz!"
                            className="submit-button"
                            onClick={() => {this.handleSubmitQuiz()}}
                        />
                    </form>
                </main>
            </div>
        )
    }
}

export default CreateQuiz