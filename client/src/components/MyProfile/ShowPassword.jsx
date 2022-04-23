
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
    <h1>Password:</h1>
    <div className='edit'>
    <h4>{length(props.password)}</h4>
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