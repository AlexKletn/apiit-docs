import {Segmented} from "antd";
import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";
import type {SegmentedValue} from "rc-segmented";
import type {PackageManagerType} from "@/context/SettingsContext/types.ts";

const PackageManagerSelector = () => {
  const { state, actions } = useSettingsContext();

  const selectManagerHandler = (value: SegmentedValue) => {
    actions.setPackageManager(value as PackageManagerType);
  }

  return (
    <Segmented
      value={state.packageManagerType}
      options={[
        { value: 'npm', label: 'npm' },
        { value: 'yarn', label: 'yarn' },
      ]}
      onChange={selectManagerHandler}
    />
  )
}

export default PackageManagerSelector;
