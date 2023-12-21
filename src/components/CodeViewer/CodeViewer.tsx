import {useMemo} from "react";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";

import useClipboard from "@custom-react-hooks/use-clipboard";
import {Button, message} from "antd";
import {CopyOutlined} from "@ant-design/icons";
import $styles from './CodeViewer.module.scss';
import type {FC} from "react";
import type {CodeViewerProps} from "./types.ts";


const CodeViewer: FC<CodeViewerProps> = ({ code, language, settings }) => {
  const preparedCode = useMemo(() => code.replace(/\n$/, ''), [code]);
  const lineCount = useMemo(() => preparedCode.match(/\n/g)?.length ?? 1, [preparedCode])
  const [messageApi, contextHolder] = message.useMessage();

  const { copyToClipboard } = useClipboard();

  const copyToClipboardHandler = async () => {
    await copyToClipboard(code);
    messageApi.success('Copied')
  }

  return (
    <div className={$styles.codeViewer}>
      {contextHolder}
      <div className={$styles.codeViewerSettings}>
        { settings }
        <Button
          icon={<CopyOutlined />}
          type="link"
          onClick={copyToClipboardHandler}
        />
      </div>

      <div>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={lineCount > 1}
        >
          {preparedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeViewer;
