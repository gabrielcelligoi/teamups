import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import EditEmail from "./EditEmail"
import EditName from "./EditName";
import EditPassword from "./EditPassword"
import EditImage from "./EditImage";
import EditSports from "./EditSports";
import './styles.scss'
import useToken from "../../hooks/useToken";
import useVisualMode from '../../hooks/useVisualMode'

export default function MyProfile(props) {
  const LOGGEDIN = "LOGGEDIN";
  const LOGGEDOUT = "LOGGEDOUT";
  const { token } = useToken();
  const [ currentUser, setCurrentUser ] = useState(token)
  const location = useLocation();
  const users = location.state.users;
  const sports = location.state.sports;


  const retrieve = function(user, users) {
    for (let userObject of users) {
      if (userObject.email === user) {
        return userObject;
      }
    }
  }

 let userObject = retrieve(currentUser, users)
 console.log("test", userObject)
 const { mode } = useVisualMode(currentUser ? LOGGEDIN : LOGGEDOUT);

  return (
    <main> {mode === LOGGEDIN && (
    <section className='container'>
       <div>
         <EditImage 
         id={userObject.id}
         image={userObject.image}
         onSave={() => console.log(userObject)}
         />
        <section className="profile">
          <h3>Your Id:</h3>
          <div className="edit">
          <div className="display-text-box">{userObject.id}</div>

          </div>
        </section>
         <EditName 
         id={userObject.id}
         name={userObject.name}
         onSave={() => console.log(userObject)}
         />
         <EditEmail 
         id={userObject.id}
         email={userObject.email}
         onSave={() => console.log(userObject)}
         />
         <EditPassword 
         id={userObject.id}
         password={userObject.password}
         onSave={() => console.log(userObject)}
         />
        <EditSports
        id={userObject.id}
        image={userObject.image}
        userSports={userObject.sports}
        sportsObject={sports}
        onSave={() => console.log(userObject)}
        />
         </div>
    </section>
    )}
    {mode === LOGGEDOUT && (
      <div>Please log in to view your profile!</div>
    )}
    </main>
  )
}