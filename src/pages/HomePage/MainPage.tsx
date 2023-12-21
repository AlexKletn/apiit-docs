import {Divider, Typography} from "antd"
import usePageTitle from "@/hooks/usePageTitle.ts";
import VersionBadge from "@/components/VersionBadge/VersionBadge.tsx";

const { Title, Paragraph } = Typography;

const MainPage = () => {
  usePageTitle("Home")

  return (
    <div>
      <Title>
        Apiit
        {"  "}
        <sup>
          <VersionBadge />
        </sup>
      </Title>

      <Paragraph>
        API integration tool - library for creating an organized API layer
      </Paragraph>

      <Divider />

      <Title level={4}>
        Dependencies
      </Title>


      <Paragraph>
        <ul>
          <li>
            axios: 1.6.1
          </li>
          <li>
            mitt: 3.0.1
          </li>
          <li>
            url-fns: 1.2.1
          </li>
        </ul>
      </Paragraph>
    </div>
  )
}

export default MainPage;
