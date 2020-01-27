import React, { Component } from 'react';
import './App.css';
import Requirements from './Requirements/Requirements'
import Input from './Input/Input'
import Output from './Output/Output'
import Validation from './Validation/Validation'
import CharComponentList from './CharComponent/CharComponentList'
class App extends Component {
  state ={
    letters:"initialtext".split("")
  }

  getLettersString(){
    return this.state.letters.join("");
  }

  setLetters(stringText){
    const letters = stringText.split("");
    this.setState({
      letters: letters
    });
  }

  InputChangeHandler = (event) =>{
    this.setLetters(event.target.value)
    console.log("handleling the change")
  }

  CharComponentClickHandler = (event) => {
    const id = +event.target.id;
    const letters = this.state.letters.slice()
    letters.splice(id,1);
    this.setLetters(letters.join(""))
  }

  render() {
    return (
      <div className="App">
        <Requirements/>
        <Input stringText={this.getLettersString()}
          change={this.InputChangeHandler}/>
        <Output textLength={this.state.letters.length}/>
        <Validation textLength={this.state.letters.length}/>
        <CharComponentList lettersArray={this.state.letters}
               click={this.CharComponentClickHandler}/>
      </div>
    );
  }
}

export default App;
