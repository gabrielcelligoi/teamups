
import React from "react";

export default function ShowPassword(props) {
  const length = function(word) {
    let leng = word.length;
    let result = '';
    for (let i = 0; i < leng; i++) {
      result += '*'
    }
    return result;
  }

  return(
    <section className='profile'>
    <h3>Password:</h3>
    <div className='edit'>
    <div>{length(props.password)}</div>
    <img 
    className="img"
    src='https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg'
    alt='Edit'
    onClick={props.onEdit}
    />
    </div>
  </section>
  )
};