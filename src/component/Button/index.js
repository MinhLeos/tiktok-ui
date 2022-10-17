import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Button.propTypes = {
   // Anything that can be rendered: numbers, strings, elements or an array
   // (or fragment) containing these types.
   // see https://reactjs.org/docs/rendering-elements.html for more info
   // ko render duoc nhu function
   // .isRequired >>> validate bat buoc phai truyen props, neu ko co isRequired ma ko truyen thi se la undefined >>> ko validate

   primary: PropTypes.bool,
   outline: PropTypes.bool,
   rounded: PropTypes.bool,
   text: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   disabled: PropTypes.bool,
   className: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   to: PropTypes.string,
   href: PropTypes.string,
   onClick: PropTypes.func,
   children: PropTypes.node.isRequired,
};

export default Button;
