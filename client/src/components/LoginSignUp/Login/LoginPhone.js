import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'

import PhoneInput from "../LoginComponents/PhoneInput";
import PhoneCodeInput from "../LoginComponents/PhoneCodeInput";
import PasswordInput from "../LoginComponents/PasswordInput";
import InputTitle from "../LoginComponents/InputTitle";
import LoginFooter from "../LoginComponents/InputFooter";
import SubmitButton from "../LoginComponents/SubmitButton";

function LoginPhone({ password = false, onClick }) {
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
        if (password) {
            return (!errors?.password?.type && !errors?.phoneNumber?.type && !!watch('phoneNumber') && !!watch('password')) ? false : true
        }
        return (!errors?.phoneCode?.type && !errors?.phoneNumber?.type && !!watch('phoneNumber') && !!watch('phoneCode')) ? false : true
    }

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <InputTitle
                text={'Phone'}
                link={'Log in with email or username'}
                onClick={() => onClick(3)}
            />

            <PhoneInput
                error={errors.phoneNumber}
                placeholder={'Phone number'}
                register={register}
            />

            {!password && (
                <>
                    <PhoneCodeInput
                        error={errors.phoneCode}
                        placeholder={"Enter 6-digit code"}
                        register={register}
                        watch={watch}
                    />
                    <LoginFooter
                        onClick1={() => onClick(2)}
                        text1={'Log in with password'}
                    />
                </>
            )}


            {password && (
                <>
                    <PasswordInput
                        error={errors.password}
                        placeholder={'Password'}
                        register={register}

                    />

                    <LoginFooter
                        onClick1={() => onClick(4)}
                        text1={'Forgot password?'}
                        onClick2={() => onClick(1)}
                        text2={'Log in with code'}
                    />
                </>
            )}

            <SubmitButton
                isDisabled={isDisabled}
                value={'Log in'}
            />
        </form>
    );
}

LoginPhone.propTypes = {
    onClick: PropTypes.func,
    password: PropTypes.string.isRequired
}

export default LoginPhone;