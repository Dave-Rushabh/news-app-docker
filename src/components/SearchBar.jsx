import React from "react";
import DebouncedSearchBar from "react-debounced-searchbar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/reducers/newsReducer";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.newsReducer);

  return (
    <>
      <DebouncedSearchBar
        callback={(val) => {
          dispatch(setSearchTerm(val));
        }}
        delay={750}
        placeholder="Search..."
        iconBgFillColor="rgba (0,0,0 25%)"
        focusBoxShadow="0px 0px 2px 2px rgba(0, 0, 0, 40%)"
        blurBoxShadow="0px 0px 2px 2px rgba(0, 0, 0, 15%)"
        iconsNeeded={true}
      />
    </>
  );
};

export default SearchBar;
