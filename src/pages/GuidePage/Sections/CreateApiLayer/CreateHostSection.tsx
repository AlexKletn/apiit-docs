import {Divider, Typography} from "antd"
import usePageTitle from "@/hooks/usePageTitle.ts";
import CodeViewer from "@/components/CodeViewer/CodeViewer.tsx";
import createHostBasic from "@/codeSamples/createHost/createHostBasic.sample.ts?raw";
import createHostWithHeaders from "@/codeSamples/createHost/createHostWithHeaders.sample.ts?raw";
import createHostUseAxios from "@/codeSamples/createHost/createHostUseAxios.sample.ts?raw";

const { Title, Paragraph, Text} = Typography;

const CreateHostSection = () => {
  usePageTitle("Create Host")

  return (
    <div>
      <Title>
        Create Host
      </Title>

      <Paragraph>
        First of all you should create a host using:
        <br />
        <ul>
          <li>
            <Text code>
              createHost(baseUrl: string, headers?: Array {"<string | () => string>"}) =&gt; Host;
            </Text>
          </li>

          <li>
            <Text code>
              createHost(axiosInstance, headers?: Array {"<string | () => string>"}) =&gt; Host;
            </Text>
          </li>
        </ul>
      </Paragraph>

      <Title level={3}>
        Examples
        <Divider />
      </Title>

      <Paragraph>
        <CodeViewer
          code={createHostBasic}
          language="typescript"
        />
      </Paragraph>

      <Paragraph>
        <CodeViewer
          code={createHostWithHeaders}
          language="typescript"
        />
      </Paragraph>

      <Paragraph>
        <CodeViewer
          code={createHostUseAxios}
          language="typescript"
        />
      </Paragraph>
    </div>
  )
}

export default CreateHostSection;
