import PropTypes from 'prop-types'
import React from 'react'
import './GlobalStyles.scss'

function GlobalStyles({ children }) {
    return children
    // Accept only 1 child inside this component
    // return React.Children.only(children)
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired
}

export default GlobalStyles