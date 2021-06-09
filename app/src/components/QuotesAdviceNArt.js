import React from 'react';
import { connect } from 'react-redux';
import QuoteAdviceNArt from './QuoteAdviceNArt';

function QuotesAdviceNArt ({isFetching, list}) {
  return (
    <main>
      {isFetching ?
       <h2>Fetching Quotes, Advice and Art</h2> :
       list.map(elem => <QuoteAdviceNArt/>)}
    </main>
  );
};

const stateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    list: state.list
  };
};

export default connect(stateToProps)(QuotesAdviceNArt);
