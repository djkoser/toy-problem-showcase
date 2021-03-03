import React, { Component } from 'react'; 

class EvenAndOdd extends Component {
  constructor (props) {
    super(props);
    
    this.state={
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
    
  };

  evenAndOdd() {
    let arrayCopy = this.state.userInput.split(",");
    let evens = arrayCopy.filter(el=> el%2===0 ? true : false);
    let odds = arrayCopy.filter(el=> el%2===0 ? false :true);

    this.setState({
      evenArray: evens,
      oddArray:odds,
      userInput: ""
    })

  }

  render() {
    
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens And Odds</h4>
        <input placeholder="Enter digits separated by commas" className="inputLine" onChange={(event) => this.setState({
          userInput: event.target.value
        })} value={this.state.userInput}></input>
        <button className="confirmationButton" onClick={()=>this.evenAndOdd()}> Submit</button>
        <span className="resultsBox">Evens: {this.state.evenArray.join(', ')}</span>
        <span className="resultsBox">Odds: {this.state.oddArray.join(', ')}</span>
      </div>
    )
  }
}

export default EvenAndOdd