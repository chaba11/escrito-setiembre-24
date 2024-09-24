import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return(
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}