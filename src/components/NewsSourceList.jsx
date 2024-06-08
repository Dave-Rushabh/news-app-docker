import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewsSource,
  setSelectedCategory,
} from "../redux/reducers/newsReducer";
import { clearSearchField } from "../utils";

const NewsSourceList = () => {
  const dispatch = useDispatch();
  const { sources, selectedSource } = useSelector((state) => state.newsReducer);

  const handleChange = (val) => {
    if (val.value !== selectedSource.value) {
      dispatch(setNewsSource(val));
      dispatch(setSelectedCategory(null));
      clearSearchField();
    }
  };

  return (
    <div className="select-items">
      {sources.map((source) => (
        <div
          key={source.label}
          value={source.value}
          onClick={() => handleChange(source)}
        >
          {source.label}
        </div>
      ))}
    </div>
  );
};

export default NewsSourceList;
