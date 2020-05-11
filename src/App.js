import React, { Component } from "react";
import "./App.css";
import allContacts from "./data/contacts.json";
import Card from './components/Card';
import Button from './components/Button';

const fiveContacts = [
  {
    name: "Monica Bellucci",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    popularity: 16.096436,
  },
  {
    name: "Gal Gadot",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
    popularity: 10.049256,
  },
  {
    name: "Ian McKellen",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
    popularity: 10.070132,
  },
  {
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713
  },
  {
    "name": "Johnny Depp",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    "popularity": 15.656534
  },
];

class App extends Component {
  state = {
    contacts: fiveContacts,
  };

  addRandomContact = () => {
    const randomContact = allContacts[Math.floor(Math.random() * allContacts.length)];
    this.setState({
      contacts: [...this.state.contacts, randomContact]
    })
  }

  sortByName = () => {
    const {contacts} = this.state;
    const contactsSorted = contacts.sort( (a,b) => {
      if(a.name > b.name){
        return 1;
      }
      if(a.name < b.name){
        return -1;
      }
      return 0;
    }) 
    this.setState({
      contacts: contactsSorted,
    })
  }

  sortByPopularity = () => {
    const {contacts} = this.state;
    const contactsSorted = contacts.sort ( (a, b) => a.popularity - b.popularity)
    this.setState({
      contacts: contactsSorted,
    })
  }

  deleteContact = (contact) => {
    const {contacts} = this.state;
    const contactFiltered = contacts.filter(
      actual => (actual !== contact)
    );
    console.log('filtrados: ', contactFiltered)
    this.setState({
      contacts: contactFiltered
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <Button 
          myProp={this.addRandomContact}>
          Add random contact
        </Button>

        <Button
          myProp = { this.sortByName }
        >
        Sorted by Name
        </Button>

        <Button
          myProp = { this.sortByPopularity }
        >
          Sorted by popularity
        </Button>
        
        <table className = 'table-container'>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          <tbody>

          
          {this.state.contacts.map((contact, key) => {
            return (
              <tr key={key}>
              <Card
                key = {key}
                pictureUrl = {contact.pictureUrl}
                name = {contact.name}
                popularity = {contact.popularity}
                action = {this.deleteContact.bind(this.state, contact)}
              />
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
