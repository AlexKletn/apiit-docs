import {Tag, Typography} from "antd";
import classNames from "classnames";
import Properties from "@/components/TypeDoc/components/Properties/Properties.tsx";
import $styles from './Type.module.scss';
import type {TypeProps} from "@/components/TypeDoc/components/Type/types.ts";
import type {FC, PropsWithChildren} from "react";

const TypeWrapper: FC<PropsWithChildren<Pick<TypeProps, 'withTitle'>>> = ({children, withTitle}) => (
  <div>
    <div className={classNames([$styles.typeContent])}>
      { withTitle &&
        <Typography.Text strong>
          Type:
        </Typography.Text>
      }
      {children}
    </div>
  </div>
)

const Type: FC<TypeProps> = ({typeItem, withTitle = false}) => {
  const typeKind = typeItem.kind;

  console.log(typeItem);

  if (typeKind === 'intrinsic') {
    return (
      <TypeWrapper>
        <Tag className={$styles.typeContentTag}>
          { typeItem.type }
        </Tag>
      </TypeWrapper>
    )
  }

  const generic = typeItem.typeArguments && typeItem.typeArguments.length > 0 ? `<${ typeItem.typeArguments.map(({ name, type }) => name ?? type).join(', ')}>` : '';

  if (typeKind === 'reference') {
    return (
      <TypeWrapper withTitle={withTitle}>
        <Tag className={$styles.typeContentTag}>
            { typeItem.name + generic }
        </Tag>
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
      {
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
