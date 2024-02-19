import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './SignUpOptions.module.scss'
import { useForm } from "react-hook-form";
import InputTitle from "../LoginComponents/InputTitle";
import PhoneInput from "../LoginComponents/PhoneInput";
import PhoneCodeInput from "../LoginComponents/PhoneCodeInput";
import SubmitButton from "../LoginComponents/SubmitButton";
import DateMonthYearSelector from "../LoginComponents/DateMonthYearSelector";

const cx = classNames.bind(styles)

function SignUpPhone({ onClick }) {
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
            !errors?.phoneNumber?.type &&
            !!watch('daySelector') &&
            !!watch('monthSelector') &&
            !!watch('yearSelector') &&
            !!watch('phoneNumber') &&
            !!watch('phoneCode')
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
                    text={'Phone'}
                    link={'Sign up with email'}
                    onClick={() => onClick(2)}
                />

                <PhoneInput
                    error={errors.phoneNumber}
                    placeholder={'Phone number'}
                    register={register}
                />

                <PhoneCodeInput
                    error={errors.phoneCode}
                    placeholder={"Enter 6-digit code"}
                    register={register}
                    watch={watch}
                />

                <SubmitButton
                    isDisabled={isDisabled}
                    value={'Next'}
                />
            </form>
        </div>
    );
}

SignUpPhone.propTypes = {
    onClick: PropTypes.func
}

export default SignUpPhone;