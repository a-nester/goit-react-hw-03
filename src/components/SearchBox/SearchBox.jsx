export const SearchBox = ({ onChange }) => {
  const handleChange = (evt) => {
    onChange({ searchValue: evt.target.value });
  };

  return (
    <form className="" onChange={handleChange}>
      <label>Find contact by name</label>
      <input type="text"></input>
    </form>
  );
};

export default SearchBox;
