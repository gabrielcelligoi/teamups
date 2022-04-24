import React from "react";
import { useLocation } from "react-router-dom";
import EditEmail from "./EditEmail"
import EditName from "./EditName";
import EditPassword from "./EditPassword"
import EditImage from "./EditImage";
import EditSports from "./EditSports";
import './styles.scss'

export default function MyProfile(props) {
  const location = useLocation();
  const user = location.state.users[0];

  return (
    <section className='container'>
      <EditImage />
      <h2 className='header'>Account Information</h2>
      <EditName />
      <EditEmail />
      <EditPassword />
      <EditSports />
    </section>
  )
}