import React from "react";
import { useLocation } from "react-router-dom";
import ShowName from "./ShowName";

export default function MyProfile(props) {
  const location = useLocation();
  const user = location.state.users[0];

  return (
    <section>
      <ShowName name={user.name}/>
    </section>
  )
}