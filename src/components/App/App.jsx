import { useEffect, useState } from 'react';
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

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [activeTheme, setActiveTheme] = useState(
    () => JSON.parse(window.localStorage.getItem('theme')) ?? LIGHT
  );

  const addDemoContact = () => {
    setContacts(() => [...contactListDemo]);
  };

  const togleTheme = () => {
    setActiveTheme(activeTheme === LIGHT ? DARK : LIGHT);
  };

  const sabmitForm = e => {
    const { name } = e;

    const normalizedFilter = name.toLowerCase();
    const contactСheck = contacts.every(
      contact => contact.name.toLowerCase() !== normalizedFilter
    );

    contactСheck ? addContact(e) : alarmDuplicatioContact(name);
  };

  const alarmDuplicatioContact = name => {
    Notify.warning(`${name} is already in contacts.`);
  };

  const addContact = data => {
    const contact = { id: nanoid(), ...data };

    setContacts([contact, ...contacts]);

    if (filter !== '') {
      setFilter('');
    }

    alarmAddContact(data.name);
  };

  const alarmAddContact = name => {
    Notify.success(`Contact ${name} add.`);
  };

  const filterContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));

    alarmDeleteContact(id);
  };

  const alarmDeleteContact = id => {
    let object = contacts.find(elem => elem.id === id);

    Notify.info(`Contact ${object.name} delit.`);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(activeTheme));
  }, [activeTheme]);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Container>
        <div>
          <Button onClick={addDemoContact} text={'demo contacts'} />
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
