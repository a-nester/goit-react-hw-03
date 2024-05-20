import Button from '../Button/Button';
import css from './Contact.module.css';
// import { icon } from "react";

export const Contact = ({ element }) => {
  console.log(element);
  return (
    <>
    <div className={css.item} key={element.id}>
      <div>
        <p>Name: {element.name}</p>
        <p>Phone: {element.number}</p>
      </div>
    <Button>Delete</Button>
    </div>
    </>
  );
};

export default Contact;
