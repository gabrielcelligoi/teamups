import './styles.scss'

export default function ShowName(props) {
  return (
    <section className='profile'>
      <h1>Name:</h1>
      <div className='edit'>
      <h4>{props.name}</h4>
      <img 
      className='img'
      src='https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg'
      alt='Edit'
      onClick={props.onEdit}
      />
      </div>
    </section>
  )
}