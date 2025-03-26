import { useSelector, useDispatch } from "react-redux";
import {
  openNavbar,
  closeNavbar,
  toggleDropdown,
} from "../../StoreFeatures/Modal/ModalSlice";
import { nileLogo, menu, close } from "../../assets";
import { navLinksItem } from "../../utils";
import { Link, NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect } from "react";
// import { SocialIcons } from "../components";
const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { isOpen, currentElement, dropdownOpen } = useSelector(
    (store) => store.modal
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header
      className={`bg-pry1 py-3  md:p-0 sticky top-0 z-20 ${isOpen ? "" : "w-full"}`}
    >
      <div className="text-primary w-[85%] max-w-[1100px] mx-auto py-3 lg:py-0">
        <div className="flex justify-between lg:gap-24 items-center">
          <Link to="/" id="home">
            <img src={nileLogo} alt="nile-logo" className="logo-width  " />
          </Link>
          {/* Hamburger menu for mobile */}
          <button
            className="text-primary text-3xl lg:hidden"
            onClick={() => dispatch(openNavbar())}
          >
            <img
              src={menu}
              className={`${isOpen ? "hidden border-inspect" : "block"}`}
              alt="hamburger-menu"
              loading="lazy"
            />
          </button>
          {/* Navbar Links */}
          <nav className="lg:flex hidden mx-auto  py-3">
            <div className="py-7 lg:p-0 lg:flex">
              <ul className="lg:flex-container lg:gap-x-4 xl:gap-x-12">
                {navLinksItem.map((item, index) => {
                  const { id, url, text } = item;
                  const isActive = currentElement === id;
                  return (
                    <div
                      key={id}
                      className="relative rounded-lg mt-7 lg:m-0 p-3 lg:p-0 border-b lg:border-0 flex items-center gap-3 border-black"
                    >
                      <li
                        className={`navLink font-medium  text-pry3 hover:bg-primary transitions rounded-md p-3 hover:text-pry2`}
                        onMouseEnter={() =>
                          !isMobile && index === 1 && dispatch(toggleDropdown())
                        }
                        onMouseLeave={() =>
                          !isMobile && index === 1 && dispatch(toggleDropdown())
                        }
                      >
                        {index === 1 ? (
                          <li className="relative flex items-center gap-1 cursor-pointer">
                            {text}
                            <BiChevronDown
                              className={`${
                                dropdownOpen ? "rotate-180" : ""
                              } transition duration-200 ease-in`}
                            />
                            <div
                              className={`bg-white shadow-lg rounded-lg w-[150px] p-2 absolute top-9 z-[1000] ${
                                dropdownOpen ? "visible" : "invisible"
                              }`}
                            >
                              <NavLink
                                to={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-black block hover:bg-zinc-200 p-2"
                              >
                                Blog
                              </NavLink>
                              {/* <NavLink className="text-black block hover:bg-zinc-200 p-2">
                                Hardware
                              </NavLink> */}
                            </div>
                          </li>
                        ) : (
                          <NavLink to={url} className="">
                            {text}
                          </NavLink>
                        )}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </nav>
          <button
            type="button"
            className="hidden p-2 rounded-xl bg-primary text-pry1 transitions hover:bg-slate-950 btn-join-waitList lg:block lg:w-48 lg:h-14"
          >
            <a
              href="https://app.nile.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login/SignUp
            </a>
          </button>

          {/* Mobile Menu*/}
          <div
            className={`fixed top-0 right-0 bottom-0 w-[95%] h-screen bg-pry1 z-50 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            {/* Close button */}
            <div className="flex justify-between items-center p-4">
              <NavLink to="/">
                <img src={nileLogo} alt="" className="logo-width" />
              </NavLink>
              <button
                className="text-gray-600 text-3xl"
                onClick={() => dispatch(closeNavbar())}
              >
                <img src={close} loading="lazy" className="" alt="close icon" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col p-3 gap-4 mt-4">
              {navLinksItem.map((item, index) => {
                const { id, url, text } = item;
                return (
                  <div
                    key={id}
                    className="lg:flex lg:items-center gap-3 p-2 border-b border-black"
                    onClick={() => index!==1&& dispatch(closeNavbar())}
                  >
                    {index === 1 ?
                      <li className="w-full relative   cursor-pointer transition ease-in" onClick={() =>
                          isMobile && index === 1 && dispatch(toggleDropdown())
                        }>
                        <div className="flex items-center gap-1">
                          {text}
                          <BiChevronDown
                              className={`${
                                dropdownOpen ? "rotate-180" : ""
                              } transition duration-200 ease-in`}
                            />
                        </div>
                          
                            <div
                              className={`bg-white shadow-lg rounded-lg w-full lg:w-[150px] p-2 ${
                                dropdownOpen ? "block" : "hidden"
                              }`}
                            >
                              <NavLink
                                to={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-black block hover:bg-zinc-200 p-2"
                              >
                                Blog
                              </NavLink>
                              {/* <NavLink className="text-black block hover:bg-zinc-200 p-2">
                                Hardware
                              </NavLink> */}
                            </div>
                          </li>: <a href={url} className=" text-primary">
                      {text}
                    </a> }
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
