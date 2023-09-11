type SearchProps = {
  inputValue: string;
  handleInputChange: (e: any) => void;
};

function FilterSearch(props: SearchProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
    </div>
  );
}

export default FilterSearch;
