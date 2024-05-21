import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((el) => {
        return (
          <li key={el.id}>
            <Contact element={el} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

// export const ContactList = ({ contacts, value }) => {
//   return (
//     <ul className={css.list}>
//       {contacts.map((el) => {
//         return (
//           <li key={el.id}>
//             <Contact element={el} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// const searchElem = contacts.filter((el) => {
//   return el.name.include(value);
// });

// console.log(
//   contacts.filter((el) => {
//     return el.name.includes(value);
//   })
// );
