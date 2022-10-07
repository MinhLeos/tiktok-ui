import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(props) {
   const {
      primary = false,
      outline = false,
      rounded = false,
      text = false,
      small = false,
      large = false,
      disabled = false,
      className,
      leftIcon,
      rightIcon,
      to,
      href,
      onClick,
      children,
      ...passProps
   } = props;

   let Comp = 'button';

   //Handle if have props disable : delete event onClick
   //    const _props = disabled ? { ...passProps } : { onClick, ...passProps };
   //  or
   const _props = { onClick, ...passProps };
   if (disabled) {
      Object.keys(_props).forEach((key) => {
         if (key.startsWith('on') && typeof _props[key] === 'function') {
            delete _props[key];
         }
      });
   }

   if (to) {
      _props.to = to;
      Comp = Link;
   } else if (href) {
      _props.href = href;
      Comp = 'a';
   }
   // [className]: className  >>> lay value cua className lam key va value cua Object
   const classes = cx('wrapper', {
      primary,
      outline,
      small,
      large,
      text,
      disabled,
      rounded,
      [className]: className,
   });
   return (
      <Comp className={classes} {..._props}>
         {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
         <span>{children}</span>
         {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
