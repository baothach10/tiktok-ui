import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'

import PhoneInput from "../Components/PhoneInput";
import EmailInput from "../Components/EmailInput";
import PhoneCodeInput from "../Components/PhoneCodeInput";
import PasswordInput from "../Components/PasswordInput";
import InputTitle from "../Components/InputTitle";
import SubmitButton from "../Components/SubmitButton";


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
        return (
            !errors?.password?.type && 
            !errors?.email?.type &&
            !errors?.phoneCode?.type &&
            !!watch('password') &&
            !!watch('email') &&
            !!watch('phoneCode')
        ) ? false : true
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
                        error={errors.email}
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