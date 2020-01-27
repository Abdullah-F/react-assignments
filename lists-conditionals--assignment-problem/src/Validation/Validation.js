import React from 'react'

export default function Validation(props){

    return (
    <p>{props.textLength > 5? "text length enough": "text too short"}</p>
    )
}