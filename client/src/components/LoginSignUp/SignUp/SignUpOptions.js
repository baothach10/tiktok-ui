import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

import SignUpPhone from "./SignUpPhone";
import SignUpEmail from "./SignUpEmail";


function SignUpOptions({ onClick }) {
    // 2: Sign up with email
    // 1: Sign up with phone
    const [type, setType] = useState(0);
    useEffect(() => {
        onClick('Sign up')
    }, [onClick])

    return type === 2 ? <SignUpEmail onClick={setType} /> : <SignUpPhone onClick={setType} />
}

SignUpOptions.propTypes = {
    onClick: PropTypes.func
}

export default SignUpOptions;