import React from 'react'

import PageHeader from '../../components/PageHeader'
import ViewQuizItem from '../../components/ViewQuizItem'

import './styles.css'

interface questionData {
    questionText: string
    optionsText: Array<string>
    selectedRightOptionNumber: number
}

interface quizData {
    title: string
    description: string
    questions: Array<questionData>
}

// When the backend is done the data will be get from there
// Example of quiz data made only for testing, ignore it:
const quizData: quizData = {
    title: 'Quiz Test Title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    questions: [
        {
            optionsText: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
            questionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            selectedRightOptionNumber: 3
        },
        {
            optionsText: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
            questionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            selectedRightOptionNumber: 2
        },
        {
            optionsText: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
            questionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            selectedRightOptionNumber: 1
        },
        {
            optionsText: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
            questionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            selectedRightOptionNumber: 4
        },
        {
            optionsText: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
            questionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            selectedRightOptionNumber: 0
        },
    ]
}

class ViewQuiz extends React.Component<{}, {}> {
    render() {
        return (
            <div className="view-quiz-page-container">
                <PageHeader />

                <h1 className="quiz-title">{quizData.title}</h1>
                <h2 className="quiz-description">{quizData.description}</h2>

                <form className="questions-container">
                    {quizData.questions.map((question, questionNumber) => {
                        return (
                            <ViewQuizItem
                                question={question}
                                key={questionNumber}
                            />
                        )
                    })}
                </form>
            </div>
        )
    }
}

export default ViewQuiz