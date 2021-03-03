import React, { Component } from 'react';

class Sum extends Component {
  constructor (props) {
    super(props);
    this.state = {
      number1:null,
      number2:null,
      sum:null
    }
  }

  addNumbers() {
    let added = Number.parseFloat(this.state.number1) + Number.parseFloat(this.state.number2);
    this.setState({
      sum:added,
      number1:"",
      number2:""
    })
  }

  render() {
    return (
     <div className='puzzleBox sumPB'>
       <h4>Sum</h4>
       <input className='inputLine' onChange={event=>this.setState({number1:event.target.value})} value={this.state.number1}></input>
       <input className='inputLine'onChange={event=>this.setState({number2:event.target.value})} value={this.state.number2}></input>
       <button className='confirmationButton' onClick={()=>this.addNumbers()}>Add!</button>
       <span className='resultsBox'>{this.state.sum}</span>
     </div>
    )
  };
};

export default Sum; 