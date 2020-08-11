import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import CreateQuizItem from '../../components/CreateQuizItem'

import './styles.css'

const CreateQuiz = () =>
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
            <h2>Just write down the <br />questions and it'll be ready to share.</h2>
            <form className="questions-container">
                <CreateQuizItem />
                <CreateQuizItem />
                <CreateQuizItem />
                <CreateQuizItem />
                <CreateQuizItem />

                <input type="submit" value="Done!" className="submit-button" />
            </form>
        </main>
    </div>

export default CreateQuiz