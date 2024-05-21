import css from "./Contact.module.css";

export const Contact = ({ element: { id, name, number }, onDelete }) => {
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
