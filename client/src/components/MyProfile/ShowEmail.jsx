import './styles.scss'
export default function ShowEmail(props) {
  return (
    <section>
      <h1>Email:</h1>
      <h2>{props.email}</h2>
      <img 
      className="img"
      src='https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg'
      alt='Edit'
      onClick={props.onEdit}
      />
    </section>
  )
}