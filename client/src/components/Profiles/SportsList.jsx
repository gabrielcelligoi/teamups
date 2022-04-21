import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SportItem from "./SportItem";
import './SportsList.scss'

export default function SportsList(props) {
  const location = useLocation();

  const [state, setState] = useState({
    user: location.state[0],
    sports: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get(`/api/profiles/${state.user.id}/sports`)
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        sports: all[0].data
      }))
    })
  }, [])

  if (Array.isArray(state.sports)) {
    
    const allSports = state.sports;

    const sport = allSports.map(singleSport => (
      <SportItem
          key={singleSport.sport_id}
          sport_name={singleSport.sport_name}
          sport_image={singleSport.sport_image}
        />
    ))

    return (
      <div>
        <h1>Favorite Sports</h1>
        <div className="sports-list">
          {sport}
        </div>
      </div>
    )
  }
}