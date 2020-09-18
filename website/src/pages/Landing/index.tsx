import React from 'react'
import { Link } from 'react-router-dom'
import LandindQuizItem from '../../components/LandingQuizItem'

import './styles.css'



class Landing extends React.Component<{}> {
    render() {
        return (
            <div className="landing-page-container">
                <header className="landing-page-header">
                    <h1 className="landing-logo">Quizzyes!</h1>
                </header>

                <main className='landing-page-body'>
                    <ul className="quiz-list">
                        <li className="quiz-list-item">
                            <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />   <LandindQuizItem
                                quizPath='anypath'
                                quizTitle="quiz title"
                                quizDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                            />
                        </li>
                    </ul>

                    <Link to='/create-quiz' className="create-quiz-link">
                        Create my quiz!
                    </Link>
                </main>
            </div>
        )
    }
}

export default Landing