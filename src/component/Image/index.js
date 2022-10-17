import React, { useState, forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import images from '@/assets/images';

import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
   const [fallback, setFallback] = useState('');

   const handleOnError = () => {
      setFallback(customFallback);
   };
   return (
      <img
         className={classNames(styles.wrapper, className)}
         src={fallback || src}
         ref={ref}
         alt={alt}
         {...props}
         onError={handleOnError}
      />
   );
});

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   className: PropTypes.string,
   fallback: PropTypes.string,
};

export default Image;
