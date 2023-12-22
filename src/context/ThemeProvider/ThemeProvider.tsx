import {useMemo} from "react";
import {ConfigProvider, theme} from "antd";
import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";
import type {FC, PropsWithChildren} from "react";

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const { state } = useSettingsContext();

  const algorithm = useMemo(() => {
    const uiTheme = [];

    if (state.uiMode === 'night') {
      uiTheme.push(theme.darkAlgorithm)
    }

    return uiTheme
  }, [state.uiMode])

  return (
    <ConfigProvider theme={{cssVar: true, algorithm}}>
      { children }
    </ConfigProvider>
  )
}

export default ThemeProvider;
