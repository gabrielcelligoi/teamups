import { useLocation } from "react-router-dom"

export default function ViewUserDetails(props) {
  const location = useLocation();
  
  console.log(location)

  return (
    <div>
      <h1>Hello {location.state[0].name}</h1>
      <h2>You won {location.state[0].wins} matches</h2>
      <h2>You lost {location.state[0].losses} matches</h2>
    </div>
  )
}