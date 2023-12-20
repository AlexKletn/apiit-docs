import {Typography} from "antd";
import usePageTitle from "@/hooks/usePageTitle.ts";
import CodeViewer from "@/components/CodeViewer/CodeViewer.tsx";
import createSingleEndpoint from "@/codeSamples/createSingleEndpoint/createSingleEndpoint.sample.ts?raw";

const { Title, Paragraph} = Typography;
const CreateSingleEndpoint = () => {
  usePageTitle("Create single endpoint")

  return (
    <div>
      <Title>
        Create single endpoint
      </Title>

      <Paragraph>
        <CodeViewer
          code={createSingleEndpoint}
          language="typescript"
        />
      </Paragraph>
    </div>
  )}

export default CreateSingleEndpoint;
