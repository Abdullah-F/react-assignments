import React from 'react'
import Classes from './PizzaImage.css'
import PizzaImg from '../../assets/pizza.jpg'
const PizzaImage = (props) =>{
    return(
        <div className={Classes.PizzaImage}>
            <img src={PizzaImg} className={Classes.PizzaImg}/>
        </div>
    )
}

export default PizzaImage;