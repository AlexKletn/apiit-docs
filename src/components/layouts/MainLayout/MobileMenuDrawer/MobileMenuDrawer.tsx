import {Drawer, FloatButton} from "antd";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";
import classNames from "classnames";
import MainMenu from "@/components/layouts/MainLayout/MainMenu/MainMenu.tsx";
import SectionMenu from "@/components/layouts/MainLayout/SectionMenu/SectionMenu.tsx";

import $styles from './MobileMenuDrawer.module.scss'
import type {FC} from "react";

const MobileMenuDrawer: FC = () => {
  const { pathname } = useLocation();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname])

  const switchOpen = () => {
    setOpen(!isOpen);
  }

  return (
    <div>
      <FloatButton
        className={classNames([$styles.openBtn, {
          [$styles.openBtnOpen]: isOpen
        }])}
        type="primary"
        onClick={() => switchOpen()}
        icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}
      />

      <Drawer
        className={$styles.mobileMenuDrawer}
        placement="left"
        width="90%"
        open={isOpen}
        onClose={() => setOpen(false)}
        headerStyle={{
          display: "none"
        }}
      >
        <div>
          <div className={$styles.sectionMenu}>
            <SectionMenu />
          </div>
          <MainMenu />
        </div>
      </Drawer>
    </div>
  )
}

export default MobileMenuDrawer
