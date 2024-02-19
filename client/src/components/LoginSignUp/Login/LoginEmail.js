import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'

import EmailInput from "../LoginComponents/EmailInput";
import PasswordInput from "../LoginComponents/PasswordInput";
import InputTitle from "../LoginComponents/InputTitle";
import LoginFooter from "../LoginComponents/InputFooter";
import SubmitButton from "../LoginComponents/SubmitButton";

function LoginEmail({ onClick }) {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        mode: "onBlur",
    })

    const onSubmit = (data) => {
        console.log(data)
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

            <EmailInput
                register={register}
                error={errors.emailUsername}
                placeholder={"Email or username"}
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