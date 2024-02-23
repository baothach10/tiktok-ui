import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'

import PasswordInput from "../Components/PasswordInput";
import InputTitle from "../Components/InputTitle";
import LoginFooter from "../Components/InputFooter";
import SubmitButton from "../Components/SubmitButton";
import axios from "axios";
import TextInput from "../Components/TextInput.js/TextInput";
import { useState } from "react";

function LoginEmail({ onClick }) {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        mode: "onBlur",
    })

    const [user, setUser] = useState(null)

    const sendLoginData = async (userData) => {
        try {
            const response = await axios.post(process.env.REACT_APP_DB_URL_HEADER + 'api/login',
                {
                    params:
                    {
                       user: userData
                    }
                })
            if (!!response.data) {
                setUser(response.data)
            } else {
                console.error('Authentication Error: Username, Email does not exist or wrong password')
            }
        } catch (error) {
            console.error('Sending Login Data Error: ' + error)
        }
    }

    console.log(user)

    const onSubmit = (data) => {
        sendLoginData(data)
    }

    const isDisabled = () => {
        return (!errors?.password?.type && !!watch('password')) ? false : true
    }

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <InputTitle
                text={'Email or username'}
                link={'Log in with phone'}
                onClick={() => onClick(1)}
            />

            <TextInput
                register={register}
                name={'emailUsername'}
                placeholder={'Email or username'}
            />

            <PasswordInput
                error={errors.password}
                placeholder={'Password'}
                register={register}

            />

            <LoginFooter
                text1={'Forgot password?'}
                onClick1={() => onClick(5)}
            />

            <SubmitButton
                isDisabled={isDisabled}
                value={'Log in'}
            />
        </form>
    );
}

LoginEmail.propTypes = {
    onClick: PropTypes.func
}

export default LoginEmail;