import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-gray-200 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-end">
        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-white transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/bmi"
            className="hover:text-white transition-colors duration-200"
          >
            BMI
          </Link>
          <Link
            to="/temperature"
            className="hover:text-white transition-colors duration-200"
          >
            Temperature
          </Link>
          <Link
            to="/joke"
            className="hover:text-white transition-colors duration-200"
          >
            Joke
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
