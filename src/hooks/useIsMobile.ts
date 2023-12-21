import {useMediaQuery} from "react-md";

const useIsMobile = () => {
  return useMediaQuery("(max-width: 1500px)");
}

export default useIsMobile;
