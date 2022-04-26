import React from "react";
import './styles.scss'
import { useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";

export default function ShowSports(props) {
const [ sportObject, setSportObject ] = useState(props.sportsObject);

const retrieve = function(userArray, sportsObj) {
  let array = [];
  for (let sport of sportsObj) {
    if(Array.isArray(userArray)) {
    for (let userSport of userArray) {
      if(sport.id === userSport){
        array.push(sport)
      }
      }
    }
  } let newarray = new Set(array);
  array = [...newarray];
  return array;
}

const mapping = retrieve(props.userSports, sportObject)

let myMappedSports = mapping.map(sport => {
  return (
  <img key={sport.id} value={Number(sport.id)} className='sports--img' src={sport.image}
  />
)
})



  return(
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
  )
};
