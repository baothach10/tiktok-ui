import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'

import PhoneInput from "../LoginComponents/PhoneInput";
import EmailInput from "../LoginComponents/EmailInput";
import PhoneCodeInput from "../LoginComponents/PhoneCodeInput";
import PasswordInput from "../LoginComponents/PasswordInput";
import InputTitle from "../LoginComponents/InputTitle";
import SubmitButton from "../LoginComponents/SubmitButton";


function ForgotPassword({ type, onClick }) {
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
            {(type === 4) && (
                <>
                    <InputTitle
                        text={'Enter phone number'}
                        link={'Reset with email'}
                        onClick={() => onClick(5)}
                    />

                    <PhoneInput
                        error={errors.phoneNumber}
                        placeholder={'Phone number'}
                        register={register}
                    />
                </>
            )}

            {(type === 5) && (
                <>
                    <InputTitle
                        text={'Enter email address'}
                        link={'Reset with phone number'}
                        onClick={() => onClick(4)}
                    />
                    <EmailInput
                        register={register}
                        placeholder={"Email or username"}
                        error={errors.emailUsername}
                    />
                </>
            )}

            <PhoneCodeInput
                error={errors.phoneCode}
                placeholder={"Enter 6-digit code"}
                register={register}
                watch={watch}
            />

            <PasswordInput
                error={errors.password}
                placeholder={'Password'}
                register={register}
            />

            <SubmitButton
                isDisabled={isDisabled}
                value={'Log in'}
            />
        </form>
    );
}

ForgotPassword.propTypes = {
    type: PropTypes.number,
    onClick: PropTypes.func
}

export default ForgotPassword;