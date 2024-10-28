import logo from "../../public/logo.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="border-b-2 border-solid border-b-red-600 flex justify-between items-center font-custom">
        <img
          src={logo}
          alt="logo"
          className="h-16 max-w-ful overflow-visible"
        />
        <ul className="list-none text-red-600 text-3xl">
          <b className="flex gap-2">
            <li>Post</li>
            <li>Favorites</li>
            <li>Contact</li>
          </b>
        </ul>
      </nav>
    </>
  );
};
