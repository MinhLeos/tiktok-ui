import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
   const [debounceValue, setDebounceValue] = useState(value);

   //    console.log('render', debounceValue);
   useEffect(() => {
      const handler = setTimeout(() => {
         setDebounceValue(value);
      }, delay);
      return () => clearTimeout(handler);
   }, [value]);

   return debounceValue;
}

export default useDebounce;
