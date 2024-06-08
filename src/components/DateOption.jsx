import React, { useRef, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import DateSelection from "./DateSelection";
import { DropdownIcon } from "../assets/icons";

const DateOption = () => {
  const datesRef = useRef(null);
  const [showDateRange, setShowDateRange] = useState(false);
  useClickOutSide(datesRef, () => setShowDateRange(false));

  return (
    <div className="dates-wrapper" ref={datesRef}>
      <div onClick={() => setShowDateRange(true)} className="date-title">
        <p>Dates</p>
        <DropdownIcon />
      </div>
      {showDateRange ? <DateSelection /> : <></>}
    </div>
  );
};

export default DateOption;
