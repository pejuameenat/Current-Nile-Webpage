import { useSelector, useDispatch } from "react-redux";
import { openNavbar, closeNavbar } from "../../StoreFeatures/Modal/ModalSlice";
import { nileLogo, menu, close } from "../../assets";
import { navLinksItem } from "../../utils";
import { NavLink } from "react-router-dom";
// import { SocialIcons } from "../components";
const Nav = () => {
  const { isOpen, currentElement } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <header
      className={`${
        isOpen
          ? "bg-pry1 py-2 md:px-0 sticky top-0 z-20 overflow-x-hidden"
          : "bg-pry1 py-2 md:px-0 sticky top-0 z-20 w-full overflow-x-hidden"
      }`}
    >
      <div className="text-primary w-[85%] max-w-[1000px] mx-auto">
        <div className="flex justify-between  lg:gap-24 items-center py-3">
          <NavLink to="/" id="home">
            <img src={nileLogo} alt="nile-logo" className="logo-width  " />
          </NavLink>
          {/* Hamburger menu for mobile */}
          <button
            className="text-primary text-3xl lg:hidden"
            onClick={() => dispatch(openNavbar())}
          >
            <img
              src={menu}
              className={`${
                isOpen ? "hidden border-inspect" : "block"
              }`}
              alt="hamburger-menu"
              loading="lazy"
            />
          </button>
          {/* Navbar Links */}
          <nav className="lg:flex hidden grow">
            <div className="py-7 lg:p-0 lg:flex">
              <ul className="lg:flex-container lg:gap-x-4 xl:gap-x-16">
                {navLinksItem.map((item) => {
                  const { id, url, text, icon } = item;
                  const isActive = currentElement === id;
                  return (
                    <div
                      key={id}
                      className="relative rounded-lg mt-7 lg:m-0 p-3 lg:p-0 border-b lg:border-0 flex items-center gap-3 border-black"
                    >
                      {/* <img
                        src={icon}
                        alt={text}
                        loading="lazy"
                        className="w-8 lg:hidden"
                      /> */}
                      <li
                        className={
                          "navLink font-medium p-1 text-pry3 hover:bg-primary hover:text-pry2 transitions rounded-md"
                        }
                      >
                        <NavLink to={url}>{text}</NavLink>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </nav>
          <button
            type="button"
            className="hidden p-2 rounded-xl bg-primary text-pry1 font-bold transitions hover:bg-slate-950 btn-join-waitList lg:block lg:w-48 lg:h-14"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Login/SignUp
            </a>
          </button>

          {/* Mobile Menu*/}
          <div
            className={`fixed top-0 right-0 bottom-0 w-80 h-screen bg-pry1 z-50 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                className="text-gray-600 text-3xl"
                onClick={() => dispatch(closeNavbar())}
              >
                <img src={close} loading="lazy" className="" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col px-3 gap-4">
              {navLinksItem.map((item) => {
                const { id, url, text } = item;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-3 p-2 border-b border-black"
                    onClick={() => dispatch(closeNavbar())}
                  >
                    {/* <img src={close} alt={text} loading="lazy" className="w-8" /> */}
                    <a href={url} className=" text-primary">
                      {text}
                    </a>
                  </div>
                );
              })}
              <div className="fixed bottom-1 text-primary">
                {/* <SocialIcons color="#004324" /> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Nav;
