import {Suspense} from "react"
import {Skeleton} from "antd";
import type {
ComponentType,
FC,
LazyExoticComponent
} from "react"

const LazyPageWrapper: FC<{
  lazy: LazyExoticComponent<ComponentType>
}> = ({ lazy: Lazy }) => {

  return (
    <Suspense fallback={<Skeleton title />}>
      <Lazy />
    </Suspense>)
}

export default LazyPageWrapper;
