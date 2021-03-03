import React, { Component } from 'react';

class AlphabetWPosition extends Component {
  constructor (props) {
    super(props);
    this.state={
      userInput: "",
      positionsList: ""
    }
  }
  
  
  replaceWithPosition(){
    let arr=this.state.userInput.toLowerCase();
    arr=arr.replace(/[^a-z]/g,"").split("").map(c=>c.charCodeAt(0)-96).join(", ");
    this.setState({
      positionsList:arr,
      userInput:""
    })
  }

  render () {
    return (
      <div className="puzzleBox alphabetPosPB">
      <h4>Replace Alphabet with Positions</h4>
      <input placeholder="Enter text to convert to position" className="inputLine" onChange={(event) => this.setState({
        userInput: event.target.value})} value={this.state.userInput}></input>
      <button className="confirmationButton" onClick={()=>this.replaceWithPosition()}> Submit</button>
      <span className="alphabetPosRB resultsBox">{this.state.positionsList}</span>
    </div>
      
    )
  }
}



export default AlphabetWPosition