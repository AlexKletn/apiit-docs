import {useEffect, useState} from "react";
import {Spin} from "antd";
import TypeDoc from "@/components/TypeDoc/TypeDoc.tsx";
import {getDocs} from "@/api";

const ApiPage = () => {
  const [apiJson, setApiJson ] = useState();

  useEffect(() => {
    getDocs.request().getResult().then(({ data }) => {
      setApiJson(data);
    })
  }, [1])

  if (!apiJson) {
    return (
      <Spin fullscreen />
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
