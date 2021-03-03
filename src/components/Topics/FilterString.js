import React, {Component} from 'react';

class FilterString extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userInput:"",
      filteredArray:[],
      unfilteredArray:['In','the','old','town','old','where','I','was','old','born','there','old','lived','a','old','man','who','sailed','to','old','sea'],
      displayTextPlaceholder: "Filter this array to reveal a hidden Beatles song!"
    }
  }

  stringFilter() {
    let copy = this.state.unfilteredArray.slice();
    let lowerCaseInput = this.state.userInput.toLowerCase();
    copy = copy.filter(el=> el.toLowerCase()===lowerCaseInput?false:true);
    console.log(copy); 
    this.setState({
      filteredArray: copy,
      displayTextPlaceholder: "",
      userInput: ""

    })
  }
  render () {
    return (
      <div className = 'puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>{this.state.unfilteredArray.join(" ")}</span>
        <input className='inputLine' placeholder="Enter string to filter" onChange={event=> this.setState({userInput:event.target.value})} value={this.state.userInput}></input>
        <button className='confirmationButton' onClick={()=> this.stringFilter()}>Submit</button>
        <span className='resultsBox filterStringRB'> <strong>{this.state.displayTextPlaceholder}</strong> {this.state.filteredArray.join(" ")}</span>
      </div>
    )
  }
}




export default FilterString

