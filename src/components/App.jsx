import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitForm = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };
    this.blockEdding(name) &&
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
  };
  blockEdding = name => {
    let existContact = [];
    this.state.contacts.map(el => {
      existContact.push(el.name);
    });

    return existContact.includes(name)
      ? alert('This Contact alredy exist')
      : true;
  };

  setFilter = data => {
    this.setState({ filter: data });
  };
  deleteContact = data => {
    console.log('data', data);
    this.setState(prev => {
      return { contacts: prev.contacts.filter(el => el.id !== data) };
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '12px 16px',
          borderRadius: 4,
          border: '1px solid gray',
          width: '380px',
        }}
      >
        <h2>Phonebook</h2>

        <ContactForm onSubmit={this.submitForm} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} setFilter={this.setFilter}></Filter>
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
