import HomepageLink from './HomepageLink'
import './HomepageLinkList.scss'
import imgLink1 from '../../images/link-create-match.png'
import imgLink2 from '../../images/link-create-team.png'
import imgLink3 from '../../images/link-create-tournament.png'

export default function HomepageLinkList(props) {

  const imagesAndFrases = [
    {
      id: 1,
      image: imgLink1,
      frase: 'Create match',
      link: "matches/create"
    },
    {
      id: 2,
      image: imgLink2,
      frase: 'Create team',
      link: "teams/create"
    },
    {
      id: 3,
      image: imgLink3,
      frase: 'Create tournament',
      link: "tournament/create"
    },
  ]

  const icons = imagesAndFrases.map((item) => (
    <HomepageLink 
      key={item.id}
      image={item.image}
      frase={item.frase}
      link={item.link}
    />
  ))

  return (
    <div className="home-links-list">
      {icons}
    </div>
  )
}