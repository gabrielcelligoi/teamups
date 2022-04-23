import React from "react";
import { useLocation } from "react-router-dom";
import EditEmail from "./EditEmail"
import EditName from "./EditName";
import EditPassword from "./EditPassword"
import EditImage from "./EditImage";
import EditSports from "./EditSports";

export default function MyProfile(props) {
  const location = useLocation();
  const user = location.state.users[0];

  return (
    <section>
      <EditImage />
      <EditName />
      <EditEmail />
      <EditPassword />
      <EditSports />
    </section>
  )
}