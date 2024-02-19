import { useState } from "react";
import PropTypes from 'prop-types'

import SignUpPhone from "./SignUpPhone";
import SignUpEmail from "./SignUpEmail";


function SignUpOptions({ onClick }) {
    const [type, setType] = useState(0); // 0 1 2 3
    onClick('Sign up')
    return type === 2 ? <SignUpEmail onClick={setType} /> : <SignUpPhone onClick={setType} />
}

SignUpOptions.propTypes = {
    onClick: PropTypes.func
}

export default SignUpOptions;