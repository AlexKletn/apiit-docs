import {useEffect} from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - Apiit`;
  }, [title])
}

export default usePageTitle;
