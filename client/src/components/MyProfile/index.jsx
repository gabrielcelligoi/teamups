import React from "react";
import { useLocation } from "react-router-dom";
import EditMyProfile from "./EditMyProfile";
import ShowName from "./ShowName";

export default function MyProfile(props) {
  const location = useLocation();
  const user = location.state.users[0];

  return (
    <section>
      <EditMyProfile />
    </section>
  )
}