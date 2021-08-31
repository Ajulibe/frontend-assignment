import React from "react";
import { SearchInput, SearchInputWrapper } from "./style";
import searchIcon from "images/search-icon.svg";

export const SearchBar = ({ onChange }) => {
  return (
    <SearchInputWrapper>
      <SearchInput
        data-testid="search-input"
        type="text"
        placeholder="Search for a movie"
        onChange={onChange}
      />
      <img src={searchIcon} alt="searchIcon" />
    </SearchInputWrapper>
  );
};
