import { Link, useLocation } from "react-router-dom";

export default function MovieList({ data }) {
  const location = useLocation();

  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
              label: "Go back",
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
