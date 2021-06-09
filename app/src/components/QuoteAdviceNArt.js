import React from 'react';

function QuoteAdviceNArt (props) {
  return (
    <div>
      <img src={props.imgUrl} alt={props.imgDescr}/>
      <p>Quote: {props.quote}</p>
      <p>Advice: {props.advice}</p>
    </div>
  );
};

export default QuoteAdviceNArt;
