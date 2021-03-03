import React, { Component } from 'react';



class Palindrome extends Component {
  constructor (props) {
    super(props); 
    
    this.state = {
      userInput:"",
      palindrome:"Is your text a palindrome?"
    }
  }
  
  sameBkAsFw() {
    let palindrome=[];
    let input=this.state.userInput.toLowerCase().split("");
    for (let i=0; i<input.length; i++) {
      palindrome.unshift(input[i]);
    }
    palindrome=palindrome.join();
    input=input.join(); 
    if (palindrome===input) {
      this.setState({
        palindrome: "Your text is a palindrome!",
        userInput: ""
      })
    } else {
      this.setState({
        palindrome: "Your text is not a palindrome.",
        userInput: ""
      })
    }
  }

  render() {
    // console.log (this.state.palindrome)
    return (
      <div className='puzzleBox palindromePB'>
        <h4>Palindrome</h4>
        <input value={this.state.userInput} className='inputLine' placeholder='Enter text to test for palindrome' onChange={event=>this.setState({userInput: event.target.value})}></input>
        <button className='confirmationButton' onClick={()=>this.sameBkAsFw()}>Submit</button>
        <span className='resultsBox'>{this.state.palindrome}</span>
      </div>
    )
  }
}
export default Palindrome;