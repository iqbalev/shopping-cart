import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="grid place-content-center gap-4 h-screen p-8">
      <h2 className="text-2xl font-bold uppercase text-center">
        Welcome to our shop
      </h2>
      <Link
        to="shop"
        className="rounded-md p-4 text-white text-2xl bg-indigo-500 text-center"
      >
        Shop Now
      </Link>
    </section>
  );
}

export default HomePage;
