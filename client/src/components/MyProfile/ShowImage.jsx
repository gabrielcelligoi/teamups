import './styles.scss'

export default function ShowImage(props) {
  return(
    <section className='profile'>
      <img 
      className='profile-img'
      key={props.id}
      src={props.image}
      onClick={props.onEdit}
      />
      </section>
  )
};