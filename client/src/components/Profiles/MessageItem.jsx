import { useEffect, useState } from "react";
import axios from "axios";


export default function MessageItem(props) {

  return (
    <article>
      <div>{props.from}</div>
      <div>
        <p>{props.text}</p>
      </div>
    </article>
  )
}