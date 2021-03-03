import React, {Component} from 'react';

class FilterObject extends Component {
  constructor (props) {
    super(props);
    this.state={
      unfilteredArray: [
      {name:'susan', age:30, eyecolor: 'green'},
      {name:'bob', age:50, sport:'tennis'},
      {name:'joe', age:10, haircolor:'blonde'},
      {name:'jill', age:60, hairstyle: 'straight'},
      {name:'jessica', age:20, education: 'college'}
    ],
      userInput: "",
      filteredArray:"Filtered results will appear here",
    }; 
  }

  filterObject() {
    let objArrayCopy=this.state.unfilteredArray.slice(); 
    objArrayCopy=objArrayCopy.filter(el=>el[this.state.userInput]==null?true:false)
    this.setState({
      filteredArray: objArrayCopy,
      userInput: "",
    });
  }

  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArray)}</span>
        <input placeholder="Enter filter criteria" className='inputLine' onChange={(event)=>this.setState({userInput: event.target.value})} value={this.state.userInput}></input>
        <button onClick={()=>this.filterObject()}className='confirmationButton'>Submit</button>
        <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject