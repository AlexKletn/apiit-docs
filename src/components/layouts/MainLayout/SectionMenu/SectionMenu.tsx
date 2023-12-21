import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";
import $styles from "@/components/layouts/MainLayout/ContentWrapper/ContentWrapper.module.scss";
import AppMenu from "@/components/layouts/MainLayout/AppMenu/AppMenu.tsx";

const SectionMenu = () => {
  const { state } = useSettingsContext();

  return  state.sectionMenu && (
      <div className={$styles.contentWrapperMenu}>
        <AppMenu config={state.sectionMenu}/>
      </div>
    )

}

export default SectionMenu;
