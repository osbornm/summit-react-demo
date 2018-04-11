import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Contract from './components/Contract'

import PersonModel from './Models/PersonModel';
import ContractModel from './Models/ContractModel';

class App extends Component {
  constructor() {
    super();
    let fakeData = [
      new ContractModel({
        name: 'Lease Agreement 2018',
        contact: new PersonModel({firstName: 'Matthew', lastName: 'osborn'}),
        startDate: Date.now()
      }),
      new ContractModel({
        name: 'NDA',
        contact: new PersonModel({firstName: 'Matthew', lastName: 'osborn'}),
        startDate: Date.now()
      }),
      new ContractModel({
        name: 'Some Contract For Something',
        contact: new PersonModel({firstName: 'Mark', lastName: 'osborn'}),
        startDate: Date.now()
      })
    ]; 
    
    this.state = {
      search: '',
      contracts: fakeData,
      filteredContracts: fakeData
    }
    
  }
  handleSearch = (event) => {
    this.setState({search: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div className="Contract-list">
          <p>
            <input type="text" placeholder="filter" 
              value={this.state.search} onChange={this.handleSearch} />
          </p>
          
          {this.state.filteredContracts.map((c) => {
            if(c.name.indexOf(this.state.search) >= 0)
              return <Contract key={c.name} contract={c} />
          })}
          
        </div>
      </div>
    );
  }
}

export default App;
