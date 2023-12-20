import type {ApiDoc} from "./api-docs.types";

interface ApiDocItemType {
  name: string
}

interface TypeDocProps {
  config: ApiDoc
  basePath?: string
}

export type {TypeDocProps, ApiDocItemType};
