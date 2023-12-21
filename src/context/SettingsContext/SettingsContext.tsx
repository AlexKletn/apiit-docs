import {
createContext,
useMemo,
useState
} from 'react'
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
    sectionMenu: undefined
  },
};

const Context = createContext<SettingsContextType>(DEFAULT_STATE as SettingsContextType);

const SettingsContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [packageManagerType, setPackageManager] = useState<PackageManagerType>(DEFAULT_STATE.state.packageManagerType);
  const [isLoading, setLoading] = useState<boolean>(DEFAULT_STATE.state.isLoading);
  const [sectionMenu, setSectionMenu] = useState<ItemType[] | undefined>(DEFAULT_STATE.state.sectionMenu);

  const ctxState = useMemo(() => ({
    state: {
      packageManagerType,
      isLoading,
      sectionMenu
    },

    actions: {
      setPackageManager,
      setSectionMenu,
      setLoading,
      cleanSectionMenu: () => {
        setSectionMenu(undefined);
      }
    }
  }), [sectionMenu, packageManagerType, setSectionMenu, setPackageManager])

  return (
    <Context.Provider value={ctxState}>
      {children}
    </Context.Provider>
  )
}

export const Settings = { Provider: SettingsContextProvider, Context };
