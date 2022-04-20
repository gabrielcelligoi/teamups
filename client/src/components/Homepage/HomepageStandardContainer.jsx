import './HomepageStandardContainer.scss'

export default function HomepageStandardContainer(props) {
  let containerClass = 'standard-container'

  if (props.mirror) {
    containerClass += "-mirror"
  }

  return (
    <div className={containerClass}>
      <img src={props.image} alt="" className='home-standard-img'/>

      <article>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button>{props.buttonText}</button>
      </article>

    </div>
  )
}