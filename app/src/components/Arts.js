import React from 'react';
import { connect } from 'react-redux';

import Art from "./Art";

function Arts (props) {
  return (
    <main>
      { props.isFetching ?
        <h3>Fetching your art...</h3> :
        props.errors.length ?
        <h3>We've encountered an error: {props.errors}</h3> :
        <div>
          {props.artList.map(elem => <Art title={elem.title} imgURL={elem.imgURL}/>)}
        </div>
      }
    </main>
  );
}

const stateToProps = (state) => ({
  artList: state.artList,
  isFetching: state.isFetching,
  errors: state.errors
});

export default connect(stateToProps)(Arts);
