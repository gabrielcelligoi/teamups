import HomepageIcon from "./HomePageIcon";
import './HomepageIconsList.scss'
import icon1 from '../../images/icon-chat.png'
import icon2 from '../../images/icon-team.png'
import icon3 from '../../images/icon-tournament.png'

export default function HomepageIconsList(props) {

  const iconsAndFrases = [
    {
      id: 1,
      icon: icon1,
      frase: 'Chat to someone and arrange a match.'
    },
    {
      id: 2,
      icon: icon2,
      frase: 'Create a team with the best players in your area.'
    },
    {
      id: 3,
      icon: icon3,
      frase: 'Create a tournament and invite friends to join in.'
    },
  ]

  const icons = iconsAndFrases.map((item) => (
    <HomepageIcon 
      key={item.id}
      icon={item.icon}
      frase={item.frase}  
    />
  ))

  return (
    <div className="home-icons-list">
      {icons}
    </div>
  )
}