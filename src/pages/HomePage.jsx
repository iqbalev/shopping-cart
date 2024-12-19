import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="grid place-content-center gap-4 h-screen p-8">
      <h2 className="text-2xl font-bold uppercase">Welcome to our shop!</h2>
      <button
        type="button"
        className="rounded-sm border border-neutral-800 p-2 text-neutral-800"
      >
        <Link to="shop">Shopping Now</Link>
      </button>
    </section>
  );
}

export default HomePage;
