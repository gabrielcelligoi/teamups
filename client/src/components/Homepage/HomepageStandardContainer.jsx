import './HomepageStandardContainer.scss'

export default function HomepageStandardContainer(props) {
  return (
    <div className='standard-container'>
      <img src={props.image} alt="" className='home-standard-img'/>

      <article>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button>T{props.buttonText}</button>
      </article>

    </div>
  )
}