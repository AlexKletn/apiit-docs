import {Divider, Typography} from "antd"
import usePageTitle from "@/hooks/usePageTitle.ts";
import CodeViewer from "@/components/CodeViewer/CodeViewer.tsx";

import createEndpointSample from "@/codeSamples/createEndpoint/createEndpoint.sample.ts?raw";
import createEndpointFileSample from "@/codeSamples/createEndpoint/createEndpointFile.sample.ts?raw";
import createEndpointFormDataSample from "@/codeSamples/createEndpoint/createEndpointFormData.sample.ts?raw";

const { Title, Paragraph, Text} = Typography;

const CreateEndpointSection = () => {
  usePageTitle("Create endpoint");

  return (
    <div>
      <Title>
        Create endpoint
      </Title>

      <Paragraph>
        Create endpoint use <Text code>host.createEndpoint</Text>:
        <br />
        <ul>
          <li>
            <Text code>
              host.createEndpoint(method: string, path: string, options?: EndpointOptions) =&gt; Endpoint;
            </Text>
          </li>

          <li>
            <Text code>
              host.createEndpoint{"<Request, Response>"}(method: string, path: string, options?: EndpointOptions) =&gt; Endpoint;
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
          code={createEndpointSample}
          language="typescript"
        />
      </Paragraph>

      <Paragraph>
        <Title level={4}>
          FormData endpoint:
        </Title>
        <Paragraph>
          If the request contains a file, then a request of type “multipart/form-data” is sent

          <CodeViewer
            code={createEndpointFileSample}
            language="typescript"
          />
        </Paragraph>

        <Paragraph>
          Or you can set
          <Text code> {"options.dataFormat = \"form-data\""} </Text>

          <CodeViewer
            code={createEndpointFormDataSample}
            language="typescript"
          />
        </Paragraph>
      </Paragraph>
    </div>
  )
}

export default CreateEndpointSection;
