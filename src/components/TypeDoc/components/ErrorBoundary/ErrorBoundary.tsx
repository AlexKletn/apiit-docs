import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const ErrorBoundary = () =>  {
  let error = useRouteError();
  console.error(error);

  if(error && isRouteErrorResponse(error)) {
    <h1>
      {error.status}
      {error.statusText}
    </h1>
  }

  return (
    <h1>
      {(error as Error).message ?? error}
    </h1>
  );
}

export default ErrorBoundary;
