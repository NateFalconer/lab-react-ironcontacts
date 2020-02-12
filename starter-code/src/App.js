import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {


state = {
fiveCelebs: contacts.slice(0,5)
}

addCeleb = () => {

}

showFiveContacts = () => {
  console.log(this.state.fiveCelebs)
  return this.state.fiveCelebs.map(eachContact => {
    return (
      <tr>
        <th><img src={eachContact.pictureUrl}/></th>
        <th>{eachContact.name}</th>
        <th>{eachContact.popularity}</th>
      </tr>
    )
  })
}

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        
            <table>
              <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
            </thead>
            <tbody>
              {this.showFiveContacts()}
            </tbody>
            </table>
      </div>
    );
  }
}
export default App;
