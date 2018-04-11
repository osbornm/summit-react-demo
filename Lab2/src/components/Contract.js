import React, {Component} from 'react';
import Contact from './Contact';
import DateDisplay from './Date';
import './Contract.css';

export default class Contract extends Component {
  render() {
    return (
      <div className="contract">
        <h2>{this.props.contract.name}</h2>
        <DateDisplay date={this.props.contract.startDate} />
        <Contact person={this.props.contract.contact} />
      </div>
    );
  }  
}