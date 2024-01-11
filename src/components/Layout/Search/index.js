import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from 'src/components/AccountItem';
import { SearchIcon } from 'src/components/Icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    
    useEffect(() => {
            setTimeout(() => {
                setSearchResult([1,2,3])
            }, 0)
        }, [])

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus()
        setSearchResult([])
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    
    return (
        <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>
                        Accounts
                    </h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </PopperWrapper>
            </div>
        )}
        onClickOutside={handleHideResult}
        >

        <div className={cx('search')}>
            <input ref={inputRef} value={searchValue} placeholder='Search accounts and videos' spellCheck={false} onChange={(e) => setSearchValue(e.target.value)} onFocus={() => {setShowResult(true)}}/>
            {!!searchValue && (
                <button className={cx('clear')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

            <button className={cx('search-btn')}>
                <SearchIcon className={cx('search-svg')} />
            </button>
        </div>
        </HeadlessTippy>
    );
}

export default Search;
