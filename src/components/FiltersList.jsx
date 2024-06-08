import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../redux/reducers/newsReducer";
import { clearSearchField } from "../utils";

const FiltersList = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(
    (state) => state.newsReducer
  );

  const handleChange = (val) => {
    if (val.value !== selectedCategory) {
      dispatch(setSelectedCategory(val.value));
      clearSearchField();
    }
  };

  return (
    <div className="filters-dropdown">
      {categories.map((category) => (
        <div
          key={category.label}
          value={category.value}
          onClick={() => handleChange(category)}
        >
          {category.label}
        </div>
      ))}
    </div>
  );
};

export default FiltersList;
