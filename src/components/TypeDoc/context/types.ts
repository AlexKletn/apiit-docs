import type {ApiDoc} from "@/components/TypeDoc/api-docs.types.ts";

interface TypeDocContextState {
  config: ApiDoc
}
interface TypeDocContextActions {
  setConfig: (apiDoc: ApiDoc) => void
}

interface TypeDocContextType {
  state: TypeDocContextState,
  actions: TypeDocContextActions
}

export type {
  TypeDocContextState,
  TypeDocContextActions,
  TypeDocContextType
}
