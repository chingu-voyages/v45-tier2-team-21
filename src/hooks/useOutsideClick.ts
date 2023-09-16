import { RefObject, useEffect } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  let clickedOutside = false;
  useEffect(() => {
    const outsideEvent = (event: MouseEvent) => {
      if ( !ref.current?.contains(event.target as Node)) {
        callback();
        clickedOutside = true;
      }
    };

    document.addEventListener("mousedown", outsideEvent);

    return () => {
      document.removeEventListener("mousedown", outsideEvent);
    }
  }, [ref, callback]);

  return clickedOutside;
};

export default useOutsideClick;
