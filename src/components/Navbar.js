const Navbar = () => {
  const navlinks = ["Smart mailBoxes", "How it works", "The App", "About"];

  return (
    <nav className="w-full h-32 flex items-center text-white text-[27px] px-16">
      <div className="w-1/4 h-full flex items-center">
        <h1 className="uppercase text-[44px] font-semibold">CUSTO</h1>
      </div>
      <div className="w-2/4 flex justify-evenly items-center gap-2">
        {navlinks.map((link, index) => {
          return (
            <div className="cursor-pointer">
              <div className="overflow-hidden font-semibold relative navlink">
                <p className="active-link">{link}</p>
                <p className="hidden-link absolute">{link}</p>
              </div>
              <div className="link-underline"></div>
            </div>
          );
        })}
      </div>
      <div className="w-1/4 flex items-center justify-end">
        <button className="py-4 px-8 nav-btn font-semibold rounded-full">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
