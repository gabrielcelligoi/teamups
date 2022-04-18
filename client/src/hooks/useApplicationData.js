import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData(props) {
  
  const [state, setState] = useState({
  
    matches: {},
    tournaments: {},
    sports: {},
    match: {},
  })

  useEffect(() => {
    Promise.all([
      axios.get('/api/matches/all'),
      axios.get('/api/tournaments'),
      axios.get('/api/sports'),
      axios.get('/api/matches'),
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        matches: all[0].data,
        tournaments: all[1].data,
        sports: all[2].data,
        match: all[3].data,
      }))
    })
  }, [])

  const createSport = (id, name, image) => {
    const data = {
      name: name,
      image: image
    }
    return axios.put(`/api/sports/${id}`, data)
      .then(res => {
        console.log("res", res)
      })
      .catch(error => {
        console.log(error)
      })
  }


  const createMatch = (sport, date, location) => {
    const data ={
      sport: sport,
      date: date,
      location: location
    }
    return axios.put('/api/matches/create', data)
      .then(res => {
        console.log("res put", res)
      })
      .catch(error => {
        console.log(error)
      })

  }

  const getNewMatch = () => {
    return axios.get('/api/matches/create')
    .then(res => {
      console.log("res", res)
      return res
    })
    .catch(error => {
      console.log(error)
    })
  }

  const addPlayerToMatch = (id, matchId) => {
    const data = {
      user_id: id,
      match_id: matchId
    }
    return axios.put('/api/matches/add', data)
      .then(res => {
        console.log('RES', res)
      })
  }

  const createNewTournament = (name, sport, number_of_players, type) => {
    const data = {
      name: name,
      sport: sport,
      number_of_players: number_of_players,
      type: type
    }
    return axios.put('/api/tournaments', data)
      .then(res => {
        console.log("res", res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return { state, createSport, createMatch, getNewMatch, addPlayerToMatch, createNewTournament } 
}