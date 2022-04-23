export default function ShowName(props) {
  return (
    <section>
      <h1>Name:</h1>
      <h2>{props.name}</h2>
      <img 
      src='https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg'
      alt='EditName'
      onClick={props.onEditName}
      />
    </section>
  )
}