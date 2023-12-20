import {useMemo} from "react";
import {
Card,
Tag,
Typography
} from "antd"
import classNames from "classnames";
import Signatures from "@/components/TypeDoc/components/Signatures/Signatures.tsx";

import $stylesCommon from '../Section.module.scss';
import $styles from './Methods.module.scss';
import type {FC} from "react";
import type {MethodsTableProps} from "@/components/TypeDoc/components/Methods/types.ts";

const Methods: FC<MethodsTableProps> = ({methods, withTitle = false}) => {
  const publicMethods = useMemo(
    () => methods
      .filter((method) => method.accessibility === "public" || method.static)
      .sort((a, b) => {
        if (a.static && !b.static) {
          return -1;
        } else if (!a.static && b.static) {
          return 1;
        }

        return 0;
      }),
    [methods]
  )

  return (
    <div>
      {
        withTitle && (
          <Typography.Title level={3}>
            Methods:
          </Typography.Title>
        )
      }

      <div className={[$styles.methodsList, $stylesCommon.sectionContent].join(' ')}>
        {
          publicMethods.map(({ id,name, signatures, static: isStatic }) => (
            <Card
              key={id}
              size="small"
              className={classNames({ [$styles.createMethodCard]: name === 'create'})}
              title={(
                <span>
                  {
                    isStatic && <Tag color="processing">static</Tag>
                  }
                  {name}
                </span>
              )}
            >
              <Signatures signatures={signatures} />
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Methods;
