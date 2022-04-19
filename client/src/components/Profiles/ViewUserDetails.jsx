import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import UpcomingMacthesList from "./UpcomingMatchesList";
import SportsList from "./SportsList";

export default function ViewUserDetails(props) {
  const location = useLocation();

  
  return (
    <div>
      <h1>Hello {location.state[0].name}</h1>
      <UpcomingMacthesList />
      <SportsList />
      <h1>Stats</h1>
      <h2>{location.state[0].name} won {location.state[0].wins} matches</h2>
      <h2>{location.state[0].name} lost {location.state[0].losses} matches</h2>
    </div>
  )
}

