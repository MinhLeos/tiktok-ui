import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AccountItem from '@/component/AccountItem';
import { Wrapper as PopperWrapper } from '@/component/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [showResults, setShowResults] = useState(true);
   const [loading, setLoading] = useState(false);

   const inputRef = useRef();

   useEffect(() => {
      if (!searchValue.trim()) {
         setSearchResults([]);
         return;
      }
      setLoading(true);
      //encodeURIComponent >> ma hoa du lieu gui di de khong trung voi cac ki tu nhu ?, &, = cua parameter se gay ra bug
      //https://jsonplaceholder.typicode.com/users?q=&type=more
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
         .then((res) => res.json())
         .then((data) => {
            console.log('data', data.data);
            setSearchResults(data.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [searchValue]);

   const handleChangeInput = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setSearchValue(e.target.value);
   };
   const handleClear = () => {
      setSearchValue('');
      setSearchResults([]);
      setShowResults(true);
      inputRef.current.focus();
   };

   const handleHideSearchResults = () => {
      setShowResults(false);
   };

   const handleShowSearchResults = () => {
      setShowResults(true);
   };

   return (
      <HeadlessTippy
         visible={showResults && searchResults.length > 0}
         interactive={true}
         render={(attrs) => (
            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  {searchResults.map((result) => {
                     console.log('result', result);
                     return <AccountItem key={result.id} data={result} />;
                  })}
               </PopperWrapper>
            </div>
         )}
         onClickOutside={handleHideSearchResults}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               placeholder="Search accounts and videos"
               spellCheck={false}
               value={searchValue}
               onChange={(e) => {
                  handleChangeInput(e);
               }}
               onFocus={handleShowSearchResults}
            />
            {!!searchValue && !loading && (
               <button className={cx('clear')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}

            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

            <button className={cx('search-btn')}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
