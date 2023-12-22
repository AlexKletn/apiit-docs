import {
ApiOutlined,
HomeOutlined,
PlusCircleOutlined,
ReadOutlined
} from "@ant-design/icons"
import AppMenuLink from "@/components/layouts/MainLayout/AppMenu/AppMenuLink.tsx";
import type {MenuProps} from "antd";

const menuConfig: MenuProps['items'] = [
  {
    key: '/',
    label: (<AppMenuLink to="/">Home</AppMenuLink>),
    icon: <HomeOutlined />
  },
  {
    key: '/installation',
    label: (<AppMenuLink to="/installation">Installation</AppMenuLink>),
    icon: <PlusCircleOutlined />
  },
  {
    key: 'docs-group',
    type: "group",
    label: "Documentation",
    children: [
      {
        key: '/guide',
        label: (<AppMenuLink to="/guide">Guide</AppMenuLink>),
        icon: <ReadOutlined />,
      },

      {
        key: '/api-description',
        label: (<AppMenuLink to="/api-description">Api</AppMenuLink>),
        icon: <ApiOutlined />
      },
    ]
  },
]

export default menuConfig;
