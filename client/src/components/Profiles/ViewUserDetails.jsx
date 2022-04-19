import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import UpcomingMacthesList from "./UpcomingMatchesList";

export default function ViewUserDetails(props) {
  const location = useLocation();

  
  return (
    <div>
      <h1>Hello {location.state[0].name}</h1>
      <UpcomingMacthesList 
        
      />
      <h2>You won {location.state[0].wins} matches</h2>
      <h2>You lost {location.state[0].losses} matches</h2>
    </div>
  )
}

