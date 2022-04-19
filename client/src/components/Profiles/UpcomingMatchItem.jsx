export default function UpcomingMatchItem(props) {
  return (
    <div>
      <h2>{props.date}</h2>
      <h4>{props.sport}</h4>
      <h4>{props.player} vs </h4>
      <h4>{props.location}</h4>
    </div>
  )
}

