import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as request from '@/utils/httpRequest';

import AccountItem from '@/component/AccountItem';
import { Wrapper as PopperWrapper } from '@/component/Popper';
import { useDebounce } from '@/hooks';
import * as searchService from '@/services/searchService';
import styles from './Search.module.scss';
import { SearchIcon } from '@/component/Icons';

const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [showResults, setShowResults] = useState(true);
   const [loading, setLoading] = useState(false);

   const inputRef = useRef();

   const debouncedSearch = useDebounce(searchValue, 500);

   useEffect(() => {
      if (!debouncedSearch.trim()) {
         setSearchResults([]);
         return;
      }
      // setLoading(true);
      //encodeURIComponent >> ma hoa du lieu gui di de khong trung voi cac ki tu nhu ?, &, = cua parameter se gay ra bug
      //https://jsonplaceholder.typicode.com/users?q=&type=more
      // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedSearch)}&type=less`)
      //    .then((res) => res.json())
      //    .then((data) => {
      //       // console.log('data', data.data);
      // setSearchResults(data.data);
      // setLoading(false);
      //    })
      //    .catch(() => {
      //       setLoading(false);
      //    });

      // axios
      //    .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
      // request
      //    .get(`/users/search`, {
      //       params: {
      //          q: debouncedSearch,
      //          type: 'less',
      //       },
      //    })
      //    .then((res) => {
      //       // console.log('res', res);
      // setSearchResults(res.data);
      // setLoading(false);
      //    })
      //    .catch((err) => {
      //       setLoading(false);
      //    });
      const callApi = async () => {
         setLoading(true);
         // try {
         //    const res = await request.get(`/users/search`, {
         //       params: {
         //          q: debouncedSearch,
         //          type: 'less',
         //       },
         //    });
         //    setSearchResults(res.data);
         //    setLoading(false);
         // } catch (error) {
         //    setLoading(false);
         // }

         const result = await searchService.search(debouncedSearch);
         setSearchResults(result);
         setLoading(false);
      };
      callApi();
   }, [debouncedSearch]);

   const handleChangeInput = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const searchValueInput = e.target.value;
      if (searchValueInput.startsWith(' ')) {
         return;
      }
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
      //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
      // >>> resolve tippy warning
      <div>
         <HeadlessTippy
            visible={showResults && searchResults.length > 0}
            interactive={true}
            render={(attrs) => (
               <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx('search-title')}>Accounts</h4>
                     {searchResults.map((result) => {
                        // console.log('result', result);
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

               <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                  {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                  <SearchIcon />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
