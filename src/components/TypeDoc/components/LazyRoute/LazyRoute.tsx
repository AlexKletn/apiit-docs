import React from "react";
import ErrorBoundary from "@/components/TypeDoc/components/ErrorBoundary/ErrorBoundary.tsx";
import LazyPageWrapper from "@/components/TypeDoc/components/LazyRoute/LazyPageWrapper.tsx";
import type {ComponentType} from "react";

const lazyRoute = async (importPromise: Promise<{default: ComponentType<any>}>) => {
  return {
    Component: () => (
      <LazyPageWrapper lazy={(React.lazy(() => importPromise))}/>
    ),
    ErrorBoundary,
  }
}

export default lazyRoute;
