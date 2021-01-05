import { useLayoutEffect } from "react";

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "Dharmesh - eCommerce React Firebase App";
    }
  }, [title]);
};

export default useDocumentTitle;
