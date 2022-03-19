import react from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search Monster"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
