import SportsList from "./SportsList"
import './UserInfo.scss'
import bgDots from "../../images/bg-dots.png"
import TeamsList from "./TeamsList"
import MessageItemList from "./MessageItemList"

export default function UserInfo(props) {
  return (
    <div>
      <div className="user-info-container">

        <div className="user-image-container">
          <img src={props.avatar} className='user-avatar'/>
          <img src={bgDots} className='user-bg-dots'/>
        </div>

        <h1 className="user-info-name">{props.name}</h1>
        <SportsList />

        <TeamsList />

      </div>

      <div className="user-stats-container">
        <h2 className="user-info-stats">Stats</h2>
        <p>WINS: {props.wins}</p>
        <p>LOSSES: {props.losses}</p>
      </div>

      <div className="user-message-container">
      <MessageItemList key={props.id} id={props.id} />

      </div>

    </div>
  )
}