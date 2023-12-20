import {type FC, useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {
Alert,
Divider,
Typography
} from "antd"

import useTypeDocMenu from "@/components/TypeDoc/hooks/useTypeDocMenu.ts";
import useSectionMenu from "@/hooks/useSectionMenu.ts";
import Properties from "@/components/TypeDoc/components/Properties/Properties.tsx";
import Signatures from "@/components/TypeDoc/components/Signatures/Signatures.tsx";
import Methods from "@/components/TypeDoc/components/Methods/Methods.tsx";
import Type from "@/components/TypeDoc/components/Type/Type.tsx";

import type {ApiDoc, ItemsTypes} from "@/components/TypeDoc/api-docs.types.ts";
import type {TypeDocProps} from "@/components/TypeDoc/types.ts";

const TypeDoc: FC<TypeDocProps> = ({ config, basePath = '/api'}) => {
  const menu = useTypeDocMenu(config, basePath);
  useSectionMenu(menu);

  const { section, name } = useParams<{
    section: keyof ApiDoc,
    name: string
  }>();
  const navigate = useNavigate();

  // @ts-ignore
  if(!section && !name && menu[0].children[0].key) {
    // @ts-ignore
    navigate(menu[0].children[0].key)
  }

  const item = useMemo(() => config[section as keyof ApiDoc]?.find((item: ItemsTypes) => item.name === name), [section, name])
  const existSections = useMemo(() => ({
    properties: !!item?.properties && item.properties.length > 0,
    description: !!item?.comment.description,
    signatures: !!item?.signatures && item.signatures.length > 0,
    methods: !!item?.methods && item.methods.length > 0,
    type: !!item?.type,
  }), [item]);

  console.log(item)

  if (!item) {
    return <Alert message="error" />
  }

  return (
    <div>
      <Typography.Title>
        { item.name }
      </Typography.Title>

      {existSections.properties && (
        <Typography.Paragraph>
          {item.comment.description}
        </Typography.Paragraph>
      )}

      <Divider />

      {existSections.properties && (
          <Properties
            properties={item.properties ?? []}
            withTitle
          />
        )}
      {existSections.signatures && (
          <Signatures
            signatures={item.signatures ?? []}
            withTitle
          />
        )}
      {existSections.methods && (
          <Methods
            methods={item.methods ?? []}
            withTitle
          />
        )}
      {existSections.type && (
          <Type
            typeItem={item.type ?? []}
            withTitle
          />
        )}
    </div>
  )
}

export default TypeDoc;
