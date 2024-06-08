import React, { useEffect, useRef, useState } from "react";
import { DropdownIcon } from "../assets/icons";
import "../styles/components/Dropdown.css";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = ({ title, children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedSourceRef = useRef(null);
  useClickOutSide(selectedSourceRef, () => {
    setShowDropdown(false);
  });

  return (
    <>
      <div className="custom-select">
        <div
          className="select-selected"
          onClick={() => setShowDropdown(true)}
          ref={selectedSourceRef}
        >
          {title}
          <DropdownIcon />
        </div>
        {showDropdown ? children : <></>}
      </div>
    </>
  );
};

export default Dropdown;
