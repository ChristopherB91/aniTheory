import { useRouteError } from "react-router-dom";

interface RouteError {
  message: string;
  status?: number;
}

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status || error.message}</i>
      </p>
    </div>
  );
};
