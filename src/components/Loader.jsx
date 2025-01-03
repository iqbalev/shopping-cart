function Loader() {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="animate-spin w-8 h-8 rounded-full border border-x-2 border-y-2 border-b-indigo-500"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
