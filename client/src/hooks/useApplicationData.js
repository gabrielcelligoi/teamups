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
      axios.get('/api/matches'),
      axios.get('/api/tournaments'),
      axios.get('/api/sports')
    ])
    .then((all) => {
      console.log(all)
      setState(prev => ({
        ...prev,
        matches: all[0].data,
        tournaments: all[1].data,
        sports: all[2].data
      }))
    })
  }, []);
}