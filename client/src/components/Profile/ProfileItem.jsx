import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useApplicationData from "../../hooks/useApplicationData"


export default function ProfileItem(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get(`/api/profiles/1`)
    ])
    .then(all => {
      setUser(all[0].data)
    })
  }, [])

  console.log(user)

  return (
    <div>
      <h2>
        <Link to={`${props.id}`} state={user}>
          {props.name}
        </Link>        
      </h2>
      <p></p>
    </div>
  )
}