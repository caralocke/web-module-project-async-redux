import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Nav from './components/Nav';
import Arts from './components/Arts';

import { dispatchList } from './actions';

function App(props) {
  useEffect(() => {
    props.dispatchList();
  }, []);

  return (
    <div className="App">
      <Nav/>
      <Arts/>
    </div>
  );
}

const stateToProps = (state) => ({
  artList: state.artList
});

export default connect(stateToProps, { dispatchList })(App);
