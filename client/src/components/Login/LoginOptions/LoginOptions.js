import { useEffect, useState } from "react";

import LoginPhone from "./LoginPhone";
import LoginEmail from "./LoginEmail";
import ForgotPassword from "./ForgotPassword";


function LoginOptions({ onClick }) {
    const [type, setType] = useState(0)
    const [loginElement, setLoginElement] = useState(<LoginPhone onClick={setType} />)

    useEffect(() => {
        switch (type) {
            case 1: // Login with phone number and phone code
                onClick('Log in')
                setLoginElement(<LoginPhone onClick={setType} />)
                break
            case 2: // Login with phone number and password
                onClick('Log in')
                setLoginElement(<LoginPhone password onClick={setType} />)
                break
            case 3: // Login with email and password
                onClick('Log in')
                setLoginElement(<LoginEmail onClick={setType} />)
                break
            case 4: // Forgot Password with phone number
            case 5: // Forgot Password with email
                onClick('Reset password')
                setLoginElement(<ForgotPassword type={type} onClick={setType} />)
                break
            default:
                onClick('Log in')
                setLoginElement(<LoginPhone onClick={setType} />)
        }
    }, [type, onClick])

    return (
        <>
            {loginElement}
        </>
    );
}

export default LoginOptions;