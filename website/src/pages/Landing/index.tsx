import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

class Landing extends React.Component<{}> {
    render() {
        return (
            <div className="landing-page-container">
                <header className="landing-page-header">
                    <h1 className="landing-logo">Quizzyes!</h1>
                </header>
                <main className='landing-page-body'>
                    <h1 className="landing-page-title">Create your quizzes and share with others</h1>
                    <Link to='/create-quiz' className="create-quiz-link">
                        Create my quiz!
                    </Link>
                </main>
                <ul>
                    <li>
                          
                    </li>
                </ul>
            </div>
        )
    }
}

export default Landing