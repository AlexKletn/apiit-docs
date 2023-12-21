import {useEffect, useState} from "react";
import {Skeleton} from "antd";
import TypeDoc from "@/components/TypeDoc/TypeDoc.tsx";
import {getDocs} from "@/api";
import type {ApiDoc} from "@/components/TypeDoc/api-docs.types.ts";

const ApiPage = () => {
  const [apiJson, setApiJson ] = useState<ApiDoc>();

  useEffect(() => {
    getDocs.request()
      .getResult()
      .then(({ data }) => {
      setApiJson(data);
    })
  }, [1])

  if (!apiJson) {
    return (
      <Skeleton title/>
    )
  }

  return (
    <TypeDoc
      config={apiJson}
      basePath="/api-description"
    />
  )
}

export default ApiPage;
