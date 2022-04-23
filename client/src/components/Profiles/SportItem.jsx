import './SportItem.scss'
import { useState, useEffect } from 'react'

export default function SportItem(props) {

  const [classDisplay, setClassDisplay] = useState('-none')

  const useSetDisplay = () => {
    if (classDisplay === '-none') {      
        setClassDisplay('')      
    } else {      
        setClassDisplay('-none')      
    }
  }

  return(
    <div>
      
      <div className='sport-item-container'>
        <img src={props.sport_image} alt={props.sport_name} className="sport-item" onClick={useSetDisplay}/>
        <p className={'sport-item-name'+classDisplay} >{props.sport_name}</p>
      </div>
    
    </div>
  )
}