import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid'
import { getContacts, getFilter } from "redux/selectors";
import { deleteContacts } from "redux/operations";
import styles from './Phonebook.module.css'

export const ContactList = () => {

    const contacts = useSelector(getContacts);
      const filters = useSelector(getFilter);
  const dispatch = useDispatch();

      function onDelete(index) {
    dispatch(deleteContacts(index))
      }
      function hendleFind() {
        const normalizedFilter = filters.toLowerCase();
          return (contacts.filter(contact =>
               contact.name.toLowerCase().includes(normalizedFilter)
    ))
      }
    
    const contactsData = hendleFind()
return (
            <ul>
        {contactsData.map(({ name, number, id }, index) =>           
            <li key={nanoid()} className={styles.item}>
                        <span>{name}: {number}</span>
                        <button type='button' className = {styles.item_btn} onClick={()=>onDelete(id)} key = {index}>Delete</button>
                    </li>
                )}
             </ul>
         )
}

