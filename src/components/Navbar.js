import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const navlinks = ["Smart mailBoxes", "How it works", "The App", "About"];
  const menuLinks = [
    "Home",
    "Smart mailBoxes",
    "How it works",
    "The App",
    "About",
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuClass = isMenuOpen ? "menu-open" : "menu-hidden";

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {" "}
      <nav className="w-full lg:h-32 h-28 relative z-50 flex items-center text-white xl:text-[27px] text-[20px] justify-between">
        <div className="xl:w-1/4 h-full flex items-center ">
          <h1 className="uppercase xl:text-[44px]  text-[30px] font-semibold z-[300]">
            CUSTO
          </h1>
        </div>
        <div className="lg:w-2/4 lg:flex justify-evenly items-center gap-5 xl:gap-2 hidden ">
          {navlinks.map((link, index) => {
            return (
              <div key={index} className="cursor-pointer">
                <div className="overflow-hidden relative navlink">
                  <p className="active-link">{link}</p>
                  <p className="hidden-link absolute">{link}</p>
                </div>
                <div className="link-underline"></div>
              </div>
            );
          })}
        </div>
        <div className="xl:w-1/4 relative flex items-center justify-end gap-3">
          <button className="xl:py-4 xl:px-8 py-2 px-7 nav-btn font-semibold rounded-full">
            Order Now
          </button>
          <button
            onClick={(e) => {
              document.querySelector("#menu-check").disabled = true;
              setTimeout(() => {
                document.querySelector("#menu-check").disabled = false;
              }, 600);
            }}
            className={`h-12 menu-btn aspect-square rounded-full cursor-full ${
              !isMenuOpen ? "bg-[#b8bbb9]" : "bg-[#444]"
            } lg:hidden relative overflow-hidden cursor-pointer z-[1000] transition-all duration-500`}
          >
            <input
              onClick={handleMenu}
              type="checkbox"
              id="menu-check"
              className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
            />
            <div className="h-full w-full pointer-events-none flex flex-col gap-1 items-center justify-center hamburger">
              <div className="w-2/4 h-[3px] rounded-full bar-1 bg-white"></div>
              <div className="w-2/4 h-[3px] rounded-full bar-2 bg-white"></div>
              <div className="w-2/4 h-[3px] rounded-full bar-3 bg-white"></div>
            </div>
          </button>
        </div>
        <div
          className={`w-screen  translate-x-full h-screen top-0 left-0 bg-black fixed z-50 ${menuClass} pt-20 p-6 flex flex-col justify-between menu lg:hidden `}
        >
          <ul className="pt-10 md:pt-20 menu-link-container">
            <li className="text-[3.5rem] font-semibold menu-link relative">
              Home
            </li>
            <li className="text-[3.5rem] font-semibold  menu-link relative">
              Smart mailboxes
            </li>
            <li className="text-[3.5rem] font-semibold  menu-link relative">
              How it works
            </li>
            <li className="text-[3.5rem] font-semibold  menu-link relative">
              The app
            </li>
            <li className="text-[3.5rem] font-semibold  menu-link relative">
              About
            </li>
          </ul>
          <button className=" bg-white text-black h-20 w-full font-semibold tracking-wide rounded-full text-[27px] cursor-pointer relative grid place-items-center group">
            <div className="border-black overflow-hidden relative">
              <p className="group-hover:-translate-y-full transition-all ease duration-300">
                Order now
              </p>
              <p className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-all ease duration-300">
                Order now
              </p>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
