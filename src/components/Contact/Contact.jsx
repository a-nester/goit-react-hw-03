import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export const Contact = ({ element: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={css.item}>
        <div>
          <p>
            <FaUser /> {name}
          </p>
          <p>
            <FaPhoneAlt /> {number}
          </p>
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
