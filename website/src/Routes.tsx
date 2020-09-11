import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import CreateQuiz from './pages/CreateQuiz'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/create-quiz" component={CreateQuiz} />
        </BrowserRouter>
    )
}

export default Routes