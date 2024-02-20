import classNames from "classnames/bind";
import { BackIcon, CloseIcon } from "../Icons";
import Modal from "../Modal";
import { useState } from "react";
import PropTypes from 'prop-types'

import styles from './LoginSignUp.module.scss'
import LoginPolicy from "./Components/LoginPolicy";
import LoginFooter from "./Components/LoginFooter";
import LoginContent from "./Components/LoginContent";
import { SETTINGS } from "src/static/TextConfig";
import { cloneElement } from "react";
import TextSeparator from "./Components/TextSeparator";
import Button from "../Button";

const cx = classNames.bind(styles)

function LoginSignUp({ handleClose }) {
    const [type, setType] = useState(false)
    const index = type ? 1 : 0;

    const [history, setHistory] = useState([SETTINGS[index]])
    const current = history[history.length - 1]
    const [title, setTitle] = useState(current.title)

    const [guest, setGuest] = useState(false)

    const handleType = (e) => {
        setHistory((prev) => [prev[0]])
        setType(e)
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const handleGuest = () => {
        setGuest(true)
    }

    return (
        <Modal>
            <div className={cx('dialog')}>
                {current.options && (
                    <>
                        <LoginContent
                            title={SETTINGS[index]['title']}
                            options={SETTINGS[index]['options']}
                            onClick={setHistory}
                            guest={guest}
                        >
                            {!guest && (
                                <>
                                    <TextSeparator
                                        text={'OR'}
                                    />
                                    <Button
                                        primary
                                        className={cx('continue-btn')}
                                        onClick={handleGuest}
                                    >Continue as guest</Button>
                                </>
                            )}
                        </LoginContent>
                        <LoginPolicy />
                    </>
                )}
                {!current.options && (current.title === 'Log in') && (
                    <>
                        <LoginContent
                            title={title}
                            onClick={setHistory}
                        >
                            {cloneElement(current.content, { onClick: setTitle })}
                        </LoginContent>
                    </>
                )}

                {!current.options && (current.title === 'Sign up') && (
                    <>
                        <LoginContent
                            title={title}
                            onClick={setHistory}
                        >
                            {cloneElement(current.content, { onClick: setTitle })}
                        </LoginContent>
                        <LoginPolicy />
                    </>
                )}

                <LoginFooter
                    text={SETTINGS[index]}
                    onClick={handleType}
                />
            </div>


            {!current.options && (
                <div className={cx('back-btn-container')} onClick={handleBack}>
                    <BackIcon className={cx('back-btn')} />
                </div>
            )}

            <div className={cx('close-btn-container')} onClick={handleClose}>
                <CloseIcon className={cx('close-btn')} />
            </div>
        </Modal>
    );
}

LoginSignUp.propTypes = {
    handleClose: PropTypes.func
}

export default LoginSignUp;