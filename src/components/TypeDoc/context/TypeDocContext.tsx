import React, {
useContext,
useMemo,
useState
} from "react"
import type {FC, PropsWithChildren} from "react";
import type {ApiDoc} from "@/components/TypeDoc/api-docs.types.ts";
import type {TypeDocContextType} from "@/components/TypeDoc/context/types.ts";

const DEFAULT_STATE: Pick<TypeDocContextType, 'state'> = {
  state: {
    config: {}
  }
}

const TypeDocContext = React.createContext<TypeDocContextType>(DEFAULT_STATE as TypeDocContextType);

const TypeDocContextProvider: FC<PropsWithChildren<{config: ApiDoc}>> = ({ children, config: apiDoc }) => {
  const [config, setConfig] = useState<ApiDoc>(apiDoc);

  const ctxState = useMemo(() => ({
    state: {
      config
    },
    actions: {
      setConfig: (apiDoc: ApiDoc) => {
        setConfig(apiDoc);
      },
    }
  }), [config, setConfig])

  return (
    <TypeDocContext.Provider value={ctxState}>
      {children}
    </TypeDocContext.Provider>
  )
}

export const TypeDocCtx = { ...TypeDocContext, Provider: TypeDocContextProvider};

export const useTypeDocContext = () => {
  return useContext(TypeDocContext);
}
