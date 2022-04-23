export default function TeamItem(props) {
  return (
    <div>
      {props.team_name}
      {props.team_id ? <div><a href={`teams/${props.team_id}`}>Id: {props.team_id}</a> </div> : null}

    </div>  
  )
}