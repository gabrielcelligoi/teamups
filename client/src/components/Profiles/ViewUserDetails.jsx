import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import UpcomingMacthesList from "./UpcomingMatchesList";
import SportsList from "./SportsList";
import TeamsList from "./TeamsList";
import UserInfo from "./UserInfo";
import './ViewUserDetails.scss'

export default function ViewUserDetails(props) {
  const location = useLocation();

  
  return (
    <div className="view-user-details-body">
      <UserInfo
        name={location.state[0].name}
        avatar={location.state[0].image}
        wins={location.state[0].wins}
        losses={location.state[0].losses}
      />
      
      <aside>
        <UpcomingMacthesList /> 
        
      </aside>

    </div>
  )
}

