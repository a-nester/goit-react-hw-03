import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts }) => {
  return (
    <ul>
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
