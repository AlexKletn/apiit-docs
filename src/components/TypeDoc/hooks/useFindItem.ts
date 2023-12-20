import {sections} from "@/components/TypeDoc/constants.ts";
import {useTypeDocContext} from "@/components/TypeDoc/context/TypeDocContext.tsx";
import type {ApiDoc, ItemsTypes} from "@/components/TypeDoc/api-docs.types.ts";

const useFindItemLink = (apiDoc?: ApiDoc) => {
  const { state } = useTypeDocContext();

  const config = apiDoc ?? state.config;

  return (name: string) => {
    const foundSection = sections.find((key) => {
      return (config as Record<string, ItemsTypes[]>)[key].find(({ name: itemName }: ItemsTypes) => name === itemName)
    });

    if (!foundSection) {
      return undefined;
    }

    return [foundSection, name].join('/');
  }
}

export default useFindItemLink;
