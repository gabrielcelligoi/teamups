import React from "react";
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import ShowSports from "./ShowSports";
import AddSports from "./AddSports";
import useToken from "../../hooks/useToken";

export default function EditSports(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const ADD = "ADD;"
const location = useLocation();

const user = location.state.users
const sports = location.state.sports
const userToken = useToken();
const email = userToken.token
const retrieveUser = function (email, userArray) {
  for (let user of userArray) {
    if(email === user.email) {
      return user
    }
  }
}


let loggedIn = retrieveUser(email, user)
// console.log(loggedIn)
// let loggedIn=location.state.users[0]
console.log(loggedIn)
const { mode, transition, back } = useVisualMode(
  loggedIn.sports ? SHOW : SHOW
);
return (
  <section> 
              {mode === SHOW && (
        <ShowSports 
        key={loggedIn.id}
        userSports={loggedIn.sports}
        sportsObject={sports}
        onAddSports={() => transition(ADD)}/>
      )}
        {mode === ADD &&
        <AddSports 
        key={loggedIn.id}
        userSports={loggedIn.sports}
        sportsObject={sports}
        onCancel={back}
        />}
    </section>
)
}