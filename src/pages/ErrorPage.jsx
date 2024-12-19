import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen p-8">
      <h2 className="text-2xl">
        Page not found. Click <Link to="/">here</Link> to return home.
      </h2>
    </div>
  );
}

export default ErrorPage;
