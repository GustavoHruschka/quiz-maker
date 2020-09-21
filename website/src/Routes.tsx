import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import CreateQuiz from './pages/CreateQuiz'
import ViewQuiz from './pages/ViewQuiz'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/create-quiz" component={CreateQuiz} />
            <Route path="/view-quiz" component={ViewQuiz} /> 
        </BrowserRouter>
    )
}

export default Routes