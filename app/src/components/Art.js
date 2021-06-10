import React from 'react';

function Art ({title, imgURL}) {
  return (
    <div className="Art">
      {imgURL &&
       <>
         <h5>{title}</h5>
         <img src={imgURL}/>
       </>
      }
    </div>
  );
};

export default Art;
