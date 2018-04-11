import React, {Component} from 'react';

export default class DateDisplay extends Component {
  render() {
    let dateObj = new Date(this.props.date);
    return (
      <p>
        {dateObj.getMonth()+1}/{dateObj.getDate()}/{dateObj.getFullYear()}
      </p>
    );
  }  
}