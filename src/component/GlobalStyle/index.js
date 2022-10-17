import React from 'react';
import PropTypes from 'prop-types';

import './global-style.scss';

function GlobalStyles({ children }) {
   return children;
   //Neu muon chi truyen duy nhat 1 children thi dung nhu sau
   // return React.Children.only(children)
}

GlobalStyles.propTypes = {
   children: PropTypes.node.isRequired,
};

export default GlobalStyles;
