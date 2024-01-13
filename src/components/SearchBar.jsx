import React, { useState } from "react";

const SearchBar = ({ titles, scrollToExercise }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const matchingExercise = titles.find((exercise) =>
      exercise.title.toLowerCase().includes(lowerCaseSearchText)
    );

    if (matchingExercise) {
      scrollToExercise(matchingExercise.title);
    }
  };

  return (
    <div id="searchbar">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search Exercise"
      />
      <button onClick={handleSearch}>Go</button>
    </div>
  );
};

export default SearchBar;