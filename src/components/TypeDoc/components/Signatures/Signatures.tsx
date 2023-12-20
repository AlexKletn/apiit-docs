import {useMemo} from "react";
import {List, Typography} from "antd";
import $stylesCommon from '../Section.module.scss';
import type {FC} from "react";
import type {SignaturesTableProps} from "@/components/TypeDoc/components/Signatures/types.ts";

const Signatures: FC<SignaturesTableProps> = ({signatures, withTitle = false }) => {
  const mappedSignatires = useMemo(
    () => signatures.map(({name, parameters, returnType, typeParameters}) => {
      const params = parameters.map((parameter) => `${parameter.name}: ${parameter.type.name ?? parameter.type.type}`).join(', ');
      const generic = typeParameters.length > 0 ? `<${typeParameters.map(({ name }) => name).join(', ')}>` : '';
      const returnStr = returnType.type || returnType.name ? `: ${returnType.name ?? returnType.type}` : '';

      return `${name}${generic}(${params})${returnStr}`;
    }),
    [signatures]
  )

  return (
    <div>
      { withTitle && (
        <Typography.Title level={3}>Signatures</Typography.Title>
      )}

      <List
        className={$stylesCommon.sectionContent}
        bordered
      >
        {
          mappedSignatires.map((param) =>
            <List.Item key={param}>{param}</List.Item>
          )
        }
      </List>
    </div>
  )
}

export default Signatures;
