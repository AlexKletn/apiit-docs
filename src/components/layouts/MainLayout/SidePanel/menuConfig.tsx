import {
ApiOutlined,
HomeOutlined,
PlusCircleOutlined,
ReadOutlined
} from "@ant-design/icons"
import type {ItemType} from "antd/es/menu/hooks/useItems";

const menuConfig: ItemType[] = [
  {
    key: '/',
    label: "Home",
    icon: <HomeOutlined />
  },
  {
    key: '/installation',
    label: "Installation",
    icon: <PlusCircleOutlined />
  },
  {
    type: "group",
    label: "Documentation",
    children: [
      {
        key: '/guide',
        label: "Guide",
        icon: <ReadOutlined />,
      },

      {
        key: '/api-description',
        label: "Api",
        icon: <ApiOutlined />
      },
    ]
  },
]

export default menuConfig;
