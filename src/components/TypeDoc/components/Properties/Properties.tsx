import {useMemo} from "react";
import {Table, Typography} from "antd";
import classNames from "classnames";
import Type from "@/components/TypeDoc/components/Type/Type.tsx";
import $stylesCommon from '../Section.module.scss';
import type {FC} from "react";
import type {PropertiesTableProps} from "@/components/TypeDoc/components/Properties/types.ts";

import type {PropertiesItem, TypesItem} from "@/components/TypeDoc/api-docs.types.ts";


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: (name: string, {optional}: PropertiesItem) => {
      return name + (optional ? '?' : '');
    }
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (typeItem: TypesItem) => {
      return <Type typeItem={typeItem} />;
    }
  }
];

const Properties: FC<PropertiesTableProps> = ({ properties, className= '',  isNested = false, withTitle = false }) => {
  const rendererProps = useMemo(() => properties.filter((property) => property.accessibility ? property.accessibility === "public" : true), [properties])

  if(rendererProps.length === 0) {
    return undefined;
  }

  return (
    <div>
      {
        withTitle && (
          <Typography.Title level={3}>
            Properties:
          </Typography.Title>
        )
      }

      <Table
        bordered
        pagination={false}
        className={classNames([$stylesCommon.sectionContent, className])}
        columns={columns}
        dataSource={rendererProps}
        size={isNested ? 'small' : 'middle'}
      />
    </div>
  )
}

export default Properties;
