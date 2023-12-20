import {Divider, Typography} from "antd"
import usePageTitle from "@/hooks/usePageTitle.ts";
import CodeViewer from "@/components/CodeViewer/CodeViewer.tsx";
import sendRequestSample from "@/codeSamples/sendRequest/sendRequest.sample.ts?raw";
import handleRequestEventsSample from "@/codeSamples/sendRequest/hadnleRequestEvents.sample.ts?raw";
import handleRequestPromiseSample from "@/codeSamples/sendRequest/hadnleRequestPromise.sample.ts?raw";

const { Title, Paragraph, Text} = Typography;

const CreateHostSection = () => {
  // const { actions } = useSettingsContext();
  usePageTitle("Create Host")

  return (
    <div>
      <Title>
        Send request
      </Title>

      <Paragraph>
        Sending request using endpoint:
        <br />
        <ul>
          <li>
            <Text code>
              endpoint.request(data: RequestData) =&gt; Request;
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
          code={sendRequestSample}
          language="typescript"
        />
      </Paragraph>

      <Paragraph>
        <CodeViewer
          code={handleRequestEventsSample}
          language="typescript"
        />
      </Paragraph>

      <Paragraph>
        <CodeViewer
          code={handleRequestPromiseSample}
          language="typescript"
        />
      </Paragraph>
    </div>
  )
}

export default CreateHostSection;
