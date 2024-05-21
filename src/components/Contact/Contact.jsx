import Button from "../Button/Button";
import css from "./Contact.module.css";

// import { icon } from "react";

export const Contact = ({ element: { id, name, number }, onDelete }) => {
  // console.log(id, name, number);
  return (
    <>
      <div className={css.item}>
        <div>
          <p>Name: {name}</p>
          <p>Phone: {number}</p>
        </div>

        <button
          type="submit"
          className={css.button}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
