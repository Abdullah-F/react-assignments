import './CharComponent.css'
import React from 'react'

export default function CharComponent(props){
   return (<div className="charCompo" onClick={props.click} id={props.id} >{props.letter}</div>);
}