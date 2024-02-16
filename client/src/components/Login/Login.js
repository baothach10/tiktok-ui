import classNames from "classnames/bind";
import { ArrowIcon, BackIcon, CloseIcon } from "../Icons";
import Modal from "../Modal/Modal";
import { useState } from "react";

import styles from './Login.module.scss'
import LoginPolicy from "./LoginPolicy";
import LoginFooter from "./LoginFooter";
import LoginContent from "./LoginContent";
import { SETTINGS } from "src/static/TextConfig";
import LoginPhone from "./LoginOptions/LoginPhone/LoginPhone";

const cx = classNames.bind(styles)

function Login({ handleClose }) {
    const [type, setType] = useState(false)
    const index = type ? 1 : 0;

    const [history, setHistory] = useState([SETTINGS[index]])
    const current = history[history.length - 1]

    const handleType = (e) => {
        setHistory((prev) => [prev[0]])
        setType(e)
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    return (
        <Modal>
            <div className={cx('dialog')}>
                {!!current.options && (
                    <>
                        <LoginContent
                            title={SETTINGS[index]['title']}
                            options={SETTINGS[index]['options']}
                            onClick={setHistory}
                        />
                        <LoginPolicy />
                    </>
                )}
                {!!!current.options && (
                    <>
                        <LoginContent
                            title={current.title}
                            onClick={setHistory}
                        >
                            <LoginPhone />
                        </LoginContent>
                    </>
                )}
                <LoginFooter
                    text={SETTINGS[index]}
                    onClick={handleType}
                />
            </div>
        

            {!!!current.options && (
                <div className={cx('back-btn-container')} onClick={handleBack}>
                    <BackIcon className={cx('back-btn')}/>
                </div>
            )}

            <div className={cx('close-btn-container')} onClick={handleClose}>
                <CloseIcon className={cx('close-btn')} />
            </div>
        </Modal>
    );
}

export default Login;