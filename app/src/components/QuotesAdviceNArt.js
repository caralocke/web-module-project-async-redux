import React from 'react';
import QuoteAdviceNArt from './QuoteAdviceNArt';

function QuotesAdviceNArt (props) {
  return (
    <main>
      {[].map(elem => <QuoteAdviceNArt/>)}
    </main>
  );
};

export default QuotesAdviceNArt;
