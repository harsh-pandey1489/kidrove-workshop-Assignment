const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-2xl text-blue-600">
          Kidrove
        </h1>

        <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg">
          Enroll Now
        </button>

      </div>
    </nav>
  );
};

export default Navbar;