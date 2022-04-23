import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useApplicationData from "../../hooks/useApplicationData"
import './ProfileItem.scss'


export default function ProfileItem(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get(`/api/profiles/${props.id}`)
    ])
    .then(all => {
      setUser(all[0].data)      
    })
  }, [])

  return (
    <div>      
        <Link to={`${props.id}`} state={user} style={{ textDecoration: 'none' }}>
          <div  className="profile-item-container">
            <img src={props.image} className='index-user-image'/>
            <div className="profile-item-user-data">
              <h3>{props.name}</h3>
            </div>
          </div>
        </Link>     
    </div>
  )
}