import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ThemeProvider } from '@emotion/react';
import { Container } from './App.styled';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Button } from 'components/Button';

import { DARK, LIGHT } from 'constants/theme';
import { theme } from 'theme';
import contactListDemo from '../../data/contactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    theme: LIGHT,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  sabmitForm = e => {
    const { contacts } = this.state;
    const { name } = e;

    const normalizedFilter = name.toLowerCase();
    const contactСheck = contacts.every(
      contact => contact.name.toLowerCase() !== normalizedFilter
    );

    contactСheck ? this.addContact(e) : this.alarmDuplicatioContact(name);
  };

  addContact = data => {
    const contact = { id: nanoid(), ...data };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    if (this.state.filter) {
      this.setState({
        filter: '',
      });
    }

    this.alarmAddContact(data.name);
  };

  addDemoContact = () => {
    this.setState(() => ({
      contacts: contactListDemo,
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));

    this.alarmDeleteContact(id);
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  togleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === LIGHT ? DARK : LIGHT,
      customText: 'Custom text',
    }));
  };

  alarmDuplicatioContact = name => {
    Notify.warning(`${name} is already in contacts.`);
  };

  alarmAddContact = name => {
    Notify.success(`Contact ${name} add.`);
  };

  alarmDeleteContact = id => {
    let object = this.state.contacts.find(elem => elem.id === id);

    Notify.info(`Contact ${object.name} delit.`);
  };

  render() {
    const { filter } = this.state;
    const {
      sabmitForm,
      filterContacts,
      getVisibleContact,
      deleteContact,
      togleTheme,
    } = this;

    return (
      <ThemeProvider theme={theme[this.state.theme]}>
        <Container>
          <div>
            <Button onClick={this.addDemoContact} text={'demo contacts'} />
            <Button onClick={togleTheme} text={'togle theme'} />
          </div>
          <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={sabmitForm} />
            <h2>Contacts</h2>
            <Filter onChange={filterContacts} value={filter} />
            <ContactList
              contactList={getVisibleContact()}
              onDeleted={deleteContact}
            />
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}
