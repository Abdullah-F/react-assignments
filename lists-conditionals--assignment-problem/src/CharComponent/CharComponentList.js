import React from 'react'
import CharComponent from './CharComponent'

export default function CharComponentList(props){
    const charCompos =  props.lettersArray.map(
        (letter,index)=> (<CharComponent click={props.click} key={index} id={index} letter={letter}/>));
    
    return (
        <div>
            {charCompos}
        </div>
    );
}
