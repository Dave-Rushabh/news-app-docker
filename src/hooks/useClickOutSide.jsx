import { useEffect } from "react";

const useClickOutSide = (ref, cb) => {
  useEffect(() => {
    const checkOutSideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
      }
    };

    window.addEventListener("click", checkOutSideClick);

    return () => {
      window.removeEventListener("click", checkOutSideClick);
    };
  }, []);
};

export default useClickOutSide;
