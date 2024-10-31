import { useState, useEffect } from "react";

const Navbar = () => {
  // State untuk menandai apakah navbar fixed atau tidak saat di-scroll
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  // State untuk mengelola apakah hamburger aktif atau tidak
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  // Function untuk toggle navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function untuk toggle hamburger menu
  const handleHamburgerClick = () => {
    setIsHamburgerActive(!isHamburgerActive); // Toggle state hamburger
  };

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
        isNavbarFixed ? "navbar-fixed" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        {" "}
        {/* Tambahkan padding hanya di sini */}
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="font-bold text-xl block py-6 text-blue-600"
            >
              Oka Wiyana
            </a>
          </div>

          {/* Tombol Hamburger */}
          <div className="flex items-center">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block lg:hidden ${
                isHamburgerActive ? "hamburger-active" : ""
              }`} // Flexbox mengatur posisi lebih baik
              onClick={handleHamburgerClick} // Event handler untuk klik
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            {/* Menu Navigasi */}
            <nav
              id="nav-menu"
              className={`${
                isHamburgerActive ? "block" : "hidden"
              } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-0 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex lg:space-x-8 pl-10">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base py-2 flex group-hover:text-blue-600"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base py-2 flex group-hover:text-blue-600"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#skills"
                    className="text-base py-2 flex group-hover:text-blue-600"
                  >
                    Skills
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#services"
                    className="text-base py-2 flex group-hover:text-blue-600"
                  >
                    Layanan
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#projects"
                    className="text-base py-2 flex group-hover:text-blue-600"
                  >
                    Project
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base py-2 flex group-hover:text-blue-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
