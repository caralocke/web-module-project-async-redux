import React from 'react';

function Art ({id, title, imgURL}) {
  return (
          <div className="Art">
            <h5>{title}</h5>
            <img src={imgURL}/>
          </div>
  );
};

export default Art;
