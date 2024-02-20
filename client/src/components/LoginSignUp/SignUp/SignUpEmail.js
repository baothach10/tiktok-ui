import classNames from "classnames/bind";
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";

import styles from './SignUpOptions.module.scss'
import InputTitle from "../Components/InputTitle";
import PhoneCodeInput from "../Components/PhoneCodeInput";
import SubmitButton from "../Components/SubmitButton";
import DateMonthYearSelector from "../Components/DateMonthYearSelector";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";
import CheckboxComponent from "../Components/CheckboxComponent";

const cx = classNames.bind(styles)

function SignUpEmail({ onClick }) {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        setValue,
    } = useForm({
        mode: "onBlur",
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const isDisabled = () => {
        return (
            !errors?.phoneCode?.type &&
            !errors?.password?.type &&
            !errors?.emailUsername?.type &&
            watch('daySelector') &&
            watch('monthSelector') &&
            watch('yearSelector') &&
            watch('emailUsername') &&
            watch('password') &&
            watch('phoneCode')
        ) ? false : true
    }

    return (
        <div className={cx('form-container')}>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <InputTitle
                    text={'When’s your birthday?'}
                />

                <DateMonthYearSelector
                    register={register}
                    setValue={setValue}
                />

                <div className={cx('disclaimer')}>
                    Your birthday won't be shown publicly.
                </div>

                <InputTitle
                    text={'Email'}
                    link={'Sign up with phone'}
                    onClick={() => onClick(1)}
                />

                <EmailInput
                    register={register}
                    placeholder={"Email address"}
                    error={errors.emailUsername}
                />

                <PasswordInput
                    register={register}
                    placeholder={'Password'}
                    error={errors.password}
                />

                <PhoneCodeInput
                    error={errors.phoneCode}
                    placeholder={"Enter 6-digit code"}
                    register={register}
                    watch={watch}
                />

                <CheckboxComponent
                    text={'Get trending content, newsletters, promotions, recommendations, and account updates sent to your email'}
                    register={register}
                    registerName={'emailConsent'}
                    registerValue={'yes'}
                />

                <SubmitButton
                    isDisabled={isDisabled}
                    value={'Next'}
                />
            </form>
        </div>
    );
}

SignUpEmail.propTypes = {
    onClick: PropTypes.func
}

export default SignUpEmail;