import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import * as searchService from 'src/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return ;
        }

        const fetchApi = async () => {
            setLoading(true)
            
            const result = await searchService.search(debouncedValue)
            
            setSearchResult(result)

            setLoading(false)
        }

        fetchApi();

        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
        //     .then(res => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     })
    }, [debouncedValue])

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus()
        setSearchResult([])
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValueInput = e.target.value;
        if (!searchValueInput.startsWith(' ')) {
            setSearchValue(searchValueInput);
        }
    }

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this 
        //by creating a new parentNode context. 
        <div>
            <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => (
                            <AccountItem 
                                key={result.id} 
                                data={result}
                            /> 
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
            >
    
            <div className={cx('search')}>
                <input 
                    ref={inputRef} 
                    value={searchValue}
                    placeholder='Search' 
                    spellCheck={false} 
                    onChange={handleChange} 
                    onFocus={() => {setShowResult(true)}}
                />
    
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} 
    
                <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                    <SearchIcon className={cx('search-svg')} />
                </button>
            </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
