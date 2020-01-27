import React from 'react'

export default function Input(props){
    return(
        <input onChange={props.change} value={props.stringText}></input>
    )
}