import './HomepageStandardContainer.scss'

export default function HomepageStandardContainer(props) {
  return (
    <div className='standard-container'>
      <img src={props.image} alt="" className='home-standard-img'/>

      <article>
        <h2>See All Tournaments</h2>
        <p>There are several open championships for all types of sport. You can follow them and participate in as many as you like. Want to be the next champion? Take a look at the available championships.</p>
        <button>Tournaments</button>
      </article>

    </div>
  )
}