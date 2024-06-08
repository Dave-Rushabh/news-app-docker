import { format, parse } from "date-fns";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setDateRange,
  setSelectedCategory,
} from "../redux/reducers/newsReducer";
import { clearSearchField } from "../utils";

const DateSelection = () => {
  const dispatch = useDispatch();
  const { dateRange } = useSelector((state) => state.newsReducer);
  const [state, setState] = useState([
    {
      startDate: parse(dateRange.from, "yyyy-MM-dd", new Date()),
      endDate: parse(dateRange.to, "yyyy-MM-dd", new Date()),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const [{ startDate, endDate }] = state;

    if (
      format(startDate, "yyyy-MM-dd") !== dateRange.from ||
      format(endDate, "yyyy-MM-dd") !== dateRange.to
    ) {
      dispatch(
        setDateRange({
          from: format(new Date(startDate), "yyyy-MM-dd"),
          to: format(new Date(endDate), "yyyy-MM-dd"),
        })
      );
      dispatch(setSelectedCategory(null));
      clearSearchField();
    }
  }, [state]);

  return (
    <div className="date-picker">
      <DateRange
        editableDateInputs={false}
        onChange={(item) => {
          setState([item.selection]);
        }}
        ranges={state}
        moveRangeOnFirstSelection={true}
        retainEndDateOnFirstSelection={true}
        maxDate={new Date()}
      />
    </div>
  );
};

export default DateSelection;
