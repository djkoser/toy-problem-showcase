import React, { Component } from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject'; 
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';
import AlphabetWPosition from '../Topics/AlphabetWPosition';

class TopicBrowser extends Component {
  render () {
    return (
      <div>
        <EvenAndOdd/>
        <FilterObject/>
        <FilterString/>
        <Palindrome/>
        <Sum/>
        <AlphabetWPosition/>
      </div>
    )
  }
}

export default TopicBrowser