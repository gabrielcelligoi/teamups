import React from "react";
import { useLocation } from "react-router-dom";
import EditEmail from "./EditEmail"
import EditName from "./EditName";
import EditPassword from "./EditPassword"
import EditImage from "./EditImage";
import EditSports from "./EditSports";
import './styles.scss'
import useToken from "../../hooks/useToken";

export default function MyProfile(props) {
  const location = useLocation();
  const user = location.state.users[0];
  const userToken = useToken();
  let email = userToken.token
  return (

    <section className='container'>
      {email ?
       <div><EditImage />
         <h2 className='header'>Account Information</h2>
         <EditName />
         <EditEmail />
         <EditPassword />
         <EditSports />
         </div>
    :
    <p>Please login to see your profile!</p>}
    </section>
  )
}