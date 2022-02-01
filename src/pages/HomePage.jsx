import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// form steps
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HomePage() {
  const query = useQuery();
  // const submission = query.get("submission");

  return (
    <div className="px-4 border border-gray-400 rounded-sm">
      <h1 className="my-4 text-xl">Home Page</h1>
      <Link to="/error">
        <button className="hover:text-gray-500 underline">error page</button>
      </Link>
      <br />
      <Link to="/doesNotExist">
        <button className="hover:text-gray-500 underline">404 page</button>
      </Link>
      <br />
      <div className="my-4"></div>
    </div>
  );
}

export default HomePage;
