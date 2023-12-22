import {
createContext,
useEffect,
useMemo,
useState
} from 'react'
import {useMediaQuery} from "react-md";
import * as localforage from "localforage";
import type {FC, PropsWithChildren} from 'react';
import type {
PackageManagerType,
SettingsContextState,
SettingsContextType
} from "./types.ts"
import type {ItemType} from "antd/es/menu/hooks/useItems";

const DEFAULT_STATE: {
  state: SettingsContextState,
} = {
  state: {
    isLoading: false,
    packageManagerType: "npm",
    sectionMenu: undefined,
    uiMode: 'day'
  },
};

const Context = createContext<SettingsContextType>(DEFAULT_STATE as SettingsContextType);

const SettingsContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [packageManagerType, setPackageManager] = useState<PackageManagerType>(DEFAULT_STATE.state.packageManagerType);
  const [isLoading, setLoading] = useState<boolean>(DEFAULT_STATE.state.isLoading);
  const [sectionMenu, setSectionMenu] = useState<ItemType[] | undefined>(DEFAULT_STATE.state.sectionMenu);

  const nightMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [uiMode, setUiMode] = useState<SettingsContextState['uiMode']>(nightMode ? 'night' : 'day');

  useEffect(() => {
    localforage.getItem('mode').then((savedMode) => {
      if(savedMode) {
        setUiMode(savedMode as ('day' | 'night'));
      }
    });
  }, [1])

  useEffect(() => {
    localforage.setItem('mode', uiMode);
  }, [uiMode]);

  const switchUiModeAndSave = () => {
    setUiMode(uiMode === 'night' ? 'day' : 'night');
  }

  const ctxState = useMemo(() => ({
    state: {
      packageManagerType,
      isLoading,
      sectionMenu,
      uiMode
    },

    actions: {
      setPackageManager,
      setSectionMenu,
      setLoading,
      switchUiMode: switchUiModeAndSave,
      cleanSectionMenu: () => {
        setSectionMenu(undefined);
      }
    }
  }), [uiMode, sectionMenu, packageManagerType, switchUiModeAndSave, setSectionMenu, setPackageManager])

  return (
    <Context.Provider value={ctxState}>
      {children}
    </Context.Provider>
  )
}

export const Settings = { Provider: SettingsContextProvider, Context };
