import SportsList from "./SportsList"
import './UserInfo.scss'

export default function UserInfo(props) {
  return (
    <div className="user-info-container">
      <img src={props.avatar} className='user-avatar'/>
      <h1>{props.name}</h1>
      <SportsList />
      <h2>Stats</h2>
      <p>WINS: {props.wins}</p>
      <p>LOSSES: {props.losses}</p>
    </div>
  )
}