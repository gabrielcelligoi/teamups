import { useState, useEffect } from "react";
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 

  function transition(currentMode, replace = false) {
    if(replace === false) {
      setMode(currentMode);
      history.push(currentMode);
    } else {
      setMode(currentMode)
    }
  }
  function back() { 
    if (history.length >= 2)
    history.pop();
    setMode(history[history.length - 1])
  }

  return { mode, transition, back };
};