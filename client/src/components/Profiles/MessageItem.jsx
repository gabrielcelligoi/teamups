import { useEffect, useState } from "react";
import axios from "axios";
import './MessageItem.scss'
import { getUserName } from "../../helpers/selectors";

export default function MessageItem(props) {

  

  return (
    <article class="message-item">
      <div>From: {getUserName(props.users, props.from)}</div>
      <div>
        <p className="message">{props.text}</p>
      </div>
    </article>
  )
}