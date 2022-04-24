import React from "react";
import './styles.scss'

export default function ShowSports(props) {

  const showMySports = function(idArray, sportsObject) {
    let result = [];
    if (Array.isArray(idArray)) {
    for (let number of idArray) {
      for (let sport of sportsObject) {
        if (number === sport.id) {
          result.push(sport);
        }
      }
    }
  }
    return result;
  }

  const sport = function(userSports, sportsObject) {
    let result = {}
    if (!Array.isArray(userSports)) {
    result = showMySports(userSports, sportsObject);
  } else {
    result = sportsObject;
  }
  return result
  }
  
const mySports = sport(props.userSports, props.sportsObject)
  const myMappedSports = mySports.map(sport => {
    return     <img key={sport.id} className='sports--img'
        src={sport.image}
        />
  })

  return(
    <main>
      <section className='profile'>
          <h3>My Sports</h3>
          <div className='edit'>
          {myMappedSports}
          <img
            className="img"
            src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png"
            alt="AddSports"
            onClick={props.onAddSports}
          /></div>
      </section>
    </main>
  )
};
