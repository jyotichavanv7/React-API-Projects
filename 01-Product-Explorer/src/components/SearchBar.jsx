import './SearchBar.css'

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm && (
        <button onClick={() => onSearchChange("")}>
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
