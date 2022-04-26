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


const { mode, transition, back } = useVisualMode(SHOW);
return (
  <section> 
              {mode === SHOW && (
        <ShowSports 
        key={props.id}
        id={props.id}
        userSports={props.userSports}
        sportsObject={props.sportsObject}
        onAddSports={() => transition(ADD)}/>
      )}
        {mode === ADD &&
        <AddSports 
        key={props.id}
        id={props.id}
        userSports={props.userSports}
        sportsObject={props.sportsObject}
        onCancel={back}
        onClick={() => transition(SHOW)}
        />}
    </section>
)
}