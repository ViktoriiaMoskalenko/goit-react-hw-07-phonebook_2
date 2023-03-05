import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import {getLoading, getError, getContacts } from "redux/selectors";
import { ContactList } from './Phonebook/ContactList'
import { ContactForm } from './Phonebook/ContactForm'
import { Filter } from './Phonebook/Filter'
import styles from './Phonebook/Phonebook.module.css'

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  
    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm/>
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
         {contacts.length > 0 && <ContactList />}
      </div>
    )
  }