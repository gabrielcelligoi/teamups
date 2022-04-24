import React from "react";
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import ShowSports from "./ShowSports";
import AddSports from "./AddSports";

export default function EditSports(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const ADD = "ADD;"
const location = useLocation();
// console.log(location.state)
const user = location.state.users[0]
const sports = location.state.sports
const { mode, transition, back } = useVisualMode(
  user.sports ? SHOW : EMPTY
);
return (
  <section> 
              {mode === SHOW && (
        <ShowSports 
        userSports={user.sports}
        sportsObject={sports}
        onAddSports={() => transition(ADD)}/>
      )}
        {mode === ADD &&
        <AddSports 
        userSports={user.sports}
        sportsObject={sports}
        onCancel={back}
        />}
    </section>
)
}