import React, {useState, useEffect} from 'react';
import useApplicationData from "../hooks/useApplicationData";
import { useLocation, useNavigate } from 'react-router-dom';
import MatchItem from './MatchItem';
import { getAllMatches } from "../helpers/selectors";
import './SportsList.scss'
import { Link } from "react-router-dom"
import axios from 'axios';
import './SportsList.scss'
import SportsList from './Profiles/SportsList';
import TeamsList from './Profiles/TeamsList';
import bgDots from "../images/bg-dots.png"



export default function SportsListProfileItem(props) {
  let { state } = useApplicationData();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profiles/${props.id}`);
}
  const [user, setUser] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get(`/api/profiles/${props.id}`)
    ])
    .then(all => {
      setUser(all[0].data)
    })
  }, [])

  console.log(user)

  return (
<div className='single-item'>
  <img className="user-image" src={props.avatar}/>
<h4>{props.name}</h4>
<p>Wins: {props.wins}</p>
<p>Losses: {props.losses}</p>
    </div>
  )
}