import React from 'react';
import { connect } from 'react-redux';

import { dispatchList } from "../actions";

const Nav = (props) => {

  const handleClick = (e) => {
    props.dispatchList();
  };

  return (
    <nav>
      <h3>Ten Pieces of Art</h3>
      <button onClick={handleClick}>More Please</button>
    </nav>
  );
};

export default connect(null, { dispatchList })(Nav);
