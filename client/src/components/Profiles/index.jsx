import ProfileItem from "./ProfileItem"
import React, { useState, useEffect } from "react"
import axios from "axios"
import useApplicationData from "../../hooks/useApplicationData"
import { useLocation } from "react-router-dom"



export default function Profiles() {
  let location = useLocation()
  const { state } = useApplicationData();
  const usersList = location.state.users;
  

  const usersInfo = usersList.map(user => (
    <ProfileItem
      key={user.id}
      id={user.id}
      name={user.name}
      image={user.image}
      wins={user.wins}
      losses={user.losses}
    />
  ))

  return (
    <div>
      {usersInfo}      
    </div>
  )
}

