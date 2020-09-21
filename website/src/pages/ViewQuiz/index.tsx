import React from 'react'

import PageHeader from '../../components/PageHeader'

import './styles.css'


class ViewQuiz extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props)
    }

    render() {
        return(
            <div className="view-quiz-container">
                <PageHeader />


            </div>
        )
    }
}

export default ViewQuiz