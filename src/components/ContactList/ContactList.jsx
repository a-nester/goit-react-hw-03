import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css'

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map((el) => {
        return (
          <li key={el.id}>
            <Contact element={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
