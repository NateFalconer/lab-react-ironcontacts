import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {


state = {
fiveCelebs: contacts.slice(0,5)
}

//display initial contact list
showFiveContacts = () => {
  console.log(this.state.fiveCelebs)
  return this.state.fiveCelebs.map(eachContact => {
    return (
      <tr>
        <th><img src={eachContact.pictureUrl} style={{height: 100}}/></th>
        <th>{eachContact.name}</th>
        <th>{eachContact.popularity}</th>
        <button onClick={() => this.deleteCeleb()}>Delete</button>
      </tr>
    )
  })
}

// function to add contact
addContact = () => {
  let randomElement = contacts[Math.floor(Math.random() * contacts.length)];
  let moreCelebs = [...this.state.fiveCelebs]
  moreCelebs.push(randomElement);
  this.setState({
    fiveCelebs: moreCelebs
  })
}

//function to sort list by name
sortName = () => {
  let sortedCelebs = [...this.state.fiveCelebs]
  sortedCelebs.sort((a, b) => (a.name > b.name) ? 1 : -1);
  this.setState({
    fiveCelebs: sortedCelebs
  })
}

//sort by popularity, highest first
sortPop = () => {
  let popularCelebs = [...this.state.fiveCelebs]
  popularCelebs.sort((a, b) => (b.popularity > a.popularity) ? 1 : -1);
  this.setState({
    fiveCelebs: popularCelebs
  })
}

//delete entry
deleteCeleb = (i) => {
  let reducedCelebs = [...this.state.fiveCelebs]
  reducedCelebs.splice(i,1)
  this.setState({
    fiveCelebs: reducedCelebs
  })

}

  render() {
    return (
      <div>
        <h1>Iron Contacts</h1>
        <button onClick={() => this.addContact()}>Add Random Contact</button>
        <button onClick={() => this.sortName()}>Sort By Name</button>
        <button onClick={() => this.sortPop()}>Sort By Popularity</button>
        
            <table>
              <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
                
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
