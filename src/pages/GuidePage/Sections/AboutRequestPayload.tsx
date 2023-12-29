import {Typography} from "antd";
import {Link} from "react-router-dom";
import usePageTitle from "@/hooks/usePageTitle.ts";

const { Title, Paragraph, Text} = Typography;
const AboutRequestPayload = () => {
  usePageTitle("About request payload")

  return (
    <div>
      <Title>
        About request payload
      </Title>

      <Paragraph>
        The Endpoint.request method takes a “payload” object as a parameter and substitutes it according to the following rules:
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Text mark>Deprecated - see next</Text> Relying on <Link to="/api-description/typeAliases/ParamsConfig">paramsConfig</Link>
          </li>
        </ul>
        <ul>
          <li>
            The keys defined in the path are substituted automatically
          </li>
          <li>
            <Text code>GET</Text> requests:
            <ul>
              <li>
                all meanings not involved in path params are placed in query params
              </li>
            </ul>
          </li>
          <li>
            <Text code>POST/PUT/PATCH/DELETE</Text> requests:
            <ul>
              <li>
                Values with keys defined in <Text code> queryParamsKeys</Text> are placed in query params
              </li>
              <li>
                All remaining values are placed in the request body
              </li>
            </ul>
          </li>
        </ul>
      </Paragraph>
    </div>
  )}

export default AboutRequestPayload;
