import React, {Component} from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3>{this.props.person.fullName}</h3>
      </div>
    );
  }  
}