import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="border-b-4 border-solid border-b-red-600 flex flex-wrap justify-center items-center font-custom sm:justify-around md:justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-16 max-w-ful overflow-visible"
          />
        </Link>
        <ul className="list-none font-bold text-red-600 text-3xl flex flex-wrap gap-2 justify-center">
          <li>
            <Link
              to="posts"
              className="active:text-red-500 hover:text-red-500 hover:text-4xl transition-all"
            >
              Post
            </Link>
          </li>
          <li>
            <Link
              to="favorite"
              className="active:text-red-500 hover:text-red-500 hover:text-4xl transition-all"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="active:text-red-500 hover:text-red-500 hover:text-4xl transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
