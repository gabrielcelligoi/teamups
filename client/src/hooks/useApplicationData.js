import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData(props) {
  
  const [state, setState] = useState({
  
    matches: {},
    tournaments: {},
    sports: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get('/api/matches/all'),
      axios.get('/api/tournaments'),
      axios.get('/api/sports')
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        matches: all[0].data,
        tournaments: all[1].data,
        sports: all[2].data
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

  return { state, createSport } 
}