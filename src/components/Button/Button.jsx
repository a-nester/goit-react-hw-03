import css from "./Button.module.css";

export const Button = ({ children, onDelete, id }) => {
  return (
    <button type="submit" className={css.button} onClick={() => onDelete(id)}>
      {children}
    </button>
  );
};

export default Button;
