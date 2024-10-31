import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  message: string;
  status?: number;
}

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="text-red-600 flex flex-col items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status || error.message}</i>
      </p>
      <button className="p-4 border-solid border-red-600 border-2 rounded-2xl">
        <Link to="/">Click here to return</Link>
      </button>
    </div>
  );
};
