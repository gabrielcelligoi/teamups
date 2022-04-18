import { useLocation } from "react-router-dom"

export default function ViewUserDetails(props) {
  const location = useLocation();
  
  console.log(location)

  return (
    <div>
      Hello {location.state[0].name}
    </div>
  )
}