const Navbar = () => {
  const navlinks = ["Smart mailBoxes", "How it works", "The App", "About"];

  return (
    <nav className="w-full lg:h-32 h-28 relative z-50 flex items-center text-white xl:text-[27px] text-[20px] justify-between">
      <div className="xl:w-1/4 h-full flex items-center ">
        <h1 className="uppercase xl:text-[44px]  text-[30px] font-semibold">
          CUSTO
        </h1>
      </div>
      <div className="lg:w-2/4 lg:flex justify-evenly items-center gap-5 xl:gap-2 hidden ">
        {navlinks.map((link, index) => {
          return (
            <div className="cursor-pointer">
              <div className="overflow-hidden relative navlink">
                <p className="active-link">{link}</p>
                <p className="hidden-link absolute">{link}</p>
              </div>
              <div className="link-underline"></div>
            </div>
          );
        })}
      </div>
      <div className="xl:w-1/4 flex items-center justify-end gap-3">
        <button className="xl:py-4 xl:px-8 py-2 px-7 nav-btn font-semibold rounded-full">
          Order Now
        </button>
        <button className="h-12 aspect-square rounded-full cursor-full bg-[#b8bbb9] md:hidden relative overflow-hidden cursor-pointer">
          <input type="checkbox" id="menu-check" className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"/>
          <div className="h-full w-full pointer-events-none flex flex-col gap-1 items-center justify-center hamburger"> 
            <div className="w-2/4 h-[3px] rounded-full bar-1 bg-white"></div>
            <div className="w-2/4 h-[3px] rounded-full bar-2 bg-white"></div>
            <div className="w-2/4 h-[3px] rounded-full bar-3 bg-white"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
