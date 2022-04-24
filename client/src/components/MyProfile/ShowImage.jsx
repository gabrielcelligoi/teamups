import './styles.scss'
import bgDots from "../../images/bg-dots.png"

export default function ShowImage(props) {
  return(
    <section className='profile'>
      <img 
        className='profile-img'
        src={props.image}
      />
      
    </section>
  )
};