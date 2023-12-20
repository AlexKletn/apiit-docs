import {useMemo} from "react";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";

import useClipboard from "@custom-react-hooks/use-clipboard";
import {Button} from "antd";
import {CopyOutlined} from "@ant-design/icons";
import $styles from './CodeViewer.module.scss';
import type {CodeViewerProps} from "./types.ts";
import type {FC} from "react";


const CodeViewer: FC<CodeViewerProps> = ({ code, language, settings }) => {
  const preparedCode = useMemo(() => code.replace(/\n$/, ''), [code]);
  const lineCount = useMemo(() => preparedCode.match(/\n/g)?.length ?? 1, [preparedCode])

  const { copyToClipboard } = useClipboard();

  const copyToClipboardHandler = () => {
    copyToClipboard(code);
  }

  return (
    <div className={$styles.codeViewer}>
      <div className={$styles.codeViewerSettings}>
        { settings }
        <Button
          icon={<CopyOutlined />}
          type="link"
          onClick={copyToClipboardHandler}
        />
      </div>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={lineCount > 1}
      >
        {preparedCode}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeViewer;
