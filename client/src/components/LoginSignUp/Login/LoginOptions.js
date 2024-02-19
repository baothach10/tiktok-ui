import { useState } from "react";
import PropTypes from 'prop-types'

import LoginPhone from "./LoginPhone";
import LoginEmail from "./LoginEmail";
import ForgotPassword from "./ForgotPassword";


function LoginOptions({ onClick }) {
    const [type, setType] = useState(0)
    onClick('Log in')
    
    if (type === 2) {
        // Login with phone number and password
        return <LoginPhone password onClick={setType} />
    } else if (type === 3) {
        // Login with email and password
        return <LoginEmail onClick={setType} />
    } else if (type === 4 || type === 5) {
        // Reset password
        onClick('Reset password')
        return <ForgotPassword type={type} onClick={setType} />
    } else {
        // Login with phone number and phone code
        return <LoginPhone onClick={setType} />
    }
}

LoginOptions.propTypes = {
    onClick: PropTypes.func
}

export default LoginOptions;