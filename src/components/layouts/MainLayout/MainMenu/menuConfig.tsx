import {
ApiOutlined,
HomeOutlined,
PlusCircleOutlined,
ReadOutlined
} from "@ant-design/icons"
import type {MenuProps} from "antd";

const menuConfig: MenuProps['items'] = [
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
    key: 'docs-group',
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
