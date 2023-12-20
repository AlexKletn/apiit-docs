import {type FC, useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {
Alert,
Button,
Divider,
Typography
} from "antd"

import {GithubOutlined} from "@ant-design/icons";
import useTypeDocMenu from "@/components/TypeDoc/hooks/useTypeDocMenu.ts";
import useSectionMenu from "@/hooks/useSectionMenu.ts";
import Properties from "@/components/TypeDoc/components/Properties/Properties.tsx";
import Signatures from "@/components/TypeDoc/components/Signatures/Signatures.tsx";
import Methods from "@/components/TypeDoc/components/Methods/Methods.tsx";
import Type from "@/components/TypeDoc/components/Type/Type.tsx";

import {TypeDocCtx} from "@/components/TypeDoc/context/TypeDocContext.tsx";
import {sections} from "@/components/TypeDoc/constants.ts";
import useFindItemLink from "@/components/TypeDoc/hooks/useFindItem.ts";
import usePageTitle from "@/hooks/usePageTitle.ts";
import type {ApiDoc, ItemsTypes} from "@/components/TypeDoc/api-docs.types.ts";
import type {TypeDocProps} from "@/components/TypeDoc/types.ts";


const TypeDoc: FC<TypeDocProps> = ({ config, basePath = '/api'}) => {
  const navigate = useNavigate();
  const findLink = useFindItemLink(config);
  const menu = useTypeDocMenu(config, basePath);
  useSectionMenu(menu);


  const { section, name } = useParams<{
    section: keyof ApiDoc,
    name: string
  }>();

  if (!sections?.includes(section as string)) {
    const itemLink = findLink(section as string);
    if(itemLink) navigate(itemLink, {
      replace: true
    })
  }

  usePageTitle(`${name}`)

  // @ts-ignore
  if(!section && !name && menu[0].children[0].key) {
    // @ts-ignore
    navigate(menu[0].children[0].key)
  }

  const item = useMemo(() => config[section as keyof ApiDoc]?.find((item) => item.name === name), [section, name]) as unknown as ItemsTypes;

  const existSections = useMemo(() => ({
    properties: !!item?.properties && item.properties.length > 0,
    description: !!item?.comment.description,
    signatures: !!item?.signatures && item.signatures.length > 0,
    methods: !!item?.methods && item.methods.length > 0,
    type: !!item?.type,
    source: !!item?.source,
  }), [item]);

  if (!item) {
    return <Alert message="error" />
  }

  return (
    <TypeDocCtx.Provider config={config}>
      <div>
        <Typography.Title>
          { item.name }
        </Typography.Title>

        { existSections.source && (
          <Button
            href={item.source.url}
            type="link"
            target="_blank"
            icon={<GithubOutlined />}
          >
            source
          </Button>
        )}

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
            /* @ts-ignore */
            typeItem={item.type ?? []}
            withTitle
          />
        )}
      </div>
    </TypeDocCtx.Provider>
  )
}

export default TypeDoc;
