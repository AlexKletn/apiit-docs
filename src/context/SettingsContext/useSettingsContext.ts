import {useContext} from "react";
import {Settings} from "./SettingsContext.tsx";

const useSettingsContext = () => {
  return useContext(Settings.Context)
}

export default useSettingsContext;
