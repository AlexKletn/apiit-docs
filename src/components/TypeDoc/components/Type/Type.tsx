import {Tag, Typography} from "antd"
import classNames from "classnames";
import {Link} from "react-router-dom";
import {Fragment} from "react";
import Properties from "@/components/TypeDoc/components/Properties/Properties.tsx";
import useFindItemLink from "@/components/TypeDoc/hooks/useFindItem.ts";
import $styles from './Type.module.scss';
import type {FC, PropsWithChildren} from "react";
import type {TypeProps} from "@/components/TypeDoc/components/Type/types.ts";

const TypeWrapper: FC<PropsWithChildren<Pick<TypeProps, 'withTitle'>>> = ({children, withTitle}) => (
  <span className={classNames([$styles.typeContent])}>
    { withTitle &&
      <Typography.Text strong>
        Type:
      </Typography.Text>
    }
    {children}
  </span>
)

const Type: FC<TypeProps> = ({typeItem, withTitle = false}) => {
  const findItemLink = useFindItemLink();
  const typeKind = typeItem.kind;

  if (typeKind === 'intrinsic') {
    return (
      <TypeWrapper>
        <Tag className={$styles.typeContentTag}>
          { typeItem.type }
        </Tag>
      </TypeWrapper>
    )
  }

  const generic = typeItem.typeArguments && typeItem.typeArguments.length > 0 ? (
    <span className={$styles.typeGeneric}>
      {"<"}
        {typeItem.typeArguments.map((type, index, array) => (
          <Fragment key={type.id}>
            <Type
              key={type.id}
              typeItem={type}
            />
            { index + 1 < array.length && ', ' }
          </Fragment>
        ))}
      {">"}
    </span>
  ) : '';

  if (typeKind === 'reference') {
    const itemHref = findItemLink(typeItem.name as string);
    const RefTag = (
      <Tag className={$styles.typeContentTag}>
        { typeItem.name }
        {generic}
      </Tag>
    )

    if(itemHref) {
      return (
        <TypeWrapper withTitle={withTitle}>
          <Link to={itemHref}>
            {RefTag}
          </Link>
        </TypeWrapper>
      )
    }

    return (
      <TypeWrapper withTitle={withTitle}>
        {RefTag}
      </TypeWrapper>
    )
  }
  if (typeKind === "reflection") {
    return (
      <TypeWrapper withTitle={withTitle}>
        <Properties
          className={$styles.typeTable}
          properties={typeItem.properties ?? []}
          isNested
        />
      </TypeWrapper>
    )
  }
  if (typeKind === "union") {
    return (
    <TypeWrapper withTitle={withTitle}>
      union:
      {
        // @ts-ignore
        typeItem.types?.map((type) => <Type
          key={type.id ?? type.name}
          typeItem={type}
        />)
      }
    </TypeWrapper>
    )
  }
  if (typeKind === "literal") {
    return (
    <TypeWrapper withTitle={withTitle}>
      <Tag className={$styles.typeContentTag}>
        {/* @ts-ignore */}
        {typeItem.value}
      </Tag>
    </TypeWrapper>
    )
  }

  return (
    <div>
      { withTitle &&
        <Typography.Title>
          Type:
        </Typography.Title>
      }

      <Tag>
        { typeItem.name || typeItem.type }
      </Tag>
    </div>
  )
}

export default Type;
