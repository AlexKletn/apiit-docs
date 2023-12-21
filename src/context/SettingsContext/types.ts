import type {ItemType} from "antd/es/menu/hooks/useItems";

type PackageManagerType =  'npm' | 'yarn';

interface SettingsContextState {
  packageManagerType: PackageManagerType;
  isLoading: boolean
  sectionMenu?: ItemType[];
}

interface SettingsContextActions {
  setPackageManager: (packageManagerType: PackageManagerType) => void;
  setSectionMenu: (sectionMenu: ItemType[]) => void;
  cleanSectionMenu: () => void;
  setLoading: (loading: boolean) => void
}

interface SettingsContextType {
  state: SettingsContextState,
  actions: SettingsContextActions
}

export type {SettingsContextState, SettingsContextActions, SettingsContextType, PackageManagerType}
