import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import UpcomingMacthesList from "./UpcomingMatchesList";
import SportsList from "./SportsList";
import TeamsList from "./TeamsList";
import UserInfo from "./UserInfo";
import './ViewUserDetails.scss'
import useApplicationData from "../../hooks/useApplicationData";

export default function ViewUserDetails(props) {
  const { state }  = useApplicationData()
  const location = useLocation();

  
  return (
    <div className="view-user-details-body">
      <UserInfo
        name={location.state[0].name}
        avatar={location.state[0].image}
        wins={location.state[0].wins}
        losses={location.state[0].losses}
        id={location.state[0].id}
      />
      
      <aside>
        <UpcomingMacthesList /> 
        <div className="user-stats-container">
        <h2 className="user-info-stats">Stats</h2>
        <p>WINS: {location.state[0].wins}</p>
        <p>LOSSES: {location.state[0].losses}</p>
      </div>
      </aside>

    </div>
  )
}

