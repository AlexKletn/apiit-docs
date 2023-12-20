import type {ReactNode} from "react";

interface CodeViewerProps {
  code: string
  language: 'bash' | 'javascript' | 'typescript'
  settings?: ReactNode
}

export type {
  CodeViewerProps
}
