import { useState, useEffect } from 'react';
import initialContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css'

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts ? JSON.parse(savedContacts) : initialContacts;
};


export default function App() {
  const [contact, setContact] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const addContact = (newContact) => {
    setContact(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContact(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };
  
  const visibleContacts = contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>
  )
}
