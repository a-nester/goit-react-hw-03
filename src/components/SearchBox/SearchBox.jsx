import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  return (
    <form
      className={css.form}
      value={value}
      onChange={(evt) => onChange(evt.target.value)}
    >
      <label>Find contact by name</label>
      <input type="text"></input>
    </form>
  );
};

export default SearchBox;
