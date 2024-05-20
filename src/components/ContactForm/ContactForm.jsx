import { useId } from "react";
import css from "./ContactForm.module.css";
import { Button } from "../Button/Button";

export const ContactForm = ({ onSubmit, contacts }) => {
  const idName = useId();
  const idPhone = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const contactName = evt.target.elements.name.value;
    const contactPhone = evt.target.elements.phone.value;

    const newElem = contacts.filter((el) => {
      return el.phone === contactPhone;
    });

    if (newElem.length > 0) {
      alert("This number is allready exist");
      return;
    } else {
      onSubmit([
        ...contacts,
        {
          id: `id-${contacts.length + 1}`,
          name: contactName,
          number: contactPhone,
        },
      ]);
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={idName}>Name</label>
        <input name="name" type="text" id={idName} required />
        <label htmlFor={idPhone}>Phone</label>
        <input name="phone" type="tel" id={idPhone} required />
        <Button>Add contact</Button>
      </form>
    </>
  );
};

export default ContactForm;
