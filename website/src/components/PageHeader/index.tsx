import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

function PageHeader() {
    return(
        <header className="page-header">
        <Link to="/" className="page-header-back-link">
            <FontAwesomeIcon
                icon={faLongArrowAltLeft}
                className="page-header-back-icon"
            />
        </Link>

        <p className="page-header-logo">Donatello</p>
    </header>
    )
}

export default PageHeader