import { Link } from "react-router-dom";

export default function NotfoundPage() {
  return (
    <div>
      This page doesn't exist. Return <Link to="/">home</Link> to search a new
      film!
    </div>
  );
}
