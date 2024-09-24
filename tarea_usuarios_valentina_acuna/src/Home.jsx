import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Link to={`/users`}> See users :0</Link>
      <Link to={`/users/:country`}> See users by country :)</Link>
    </>
  );
};
