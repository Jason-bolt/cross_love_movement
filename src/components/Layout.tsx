import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import classNames from "classnames";

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const headerRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      headerRef.current &&
      !(headerRef.current as unknown as HTMLElement)?.contains(
        event.target as Node
      )
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach the click event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="bg-amber-50 text-white relative" ref={headerRef}>
        <div className="container mx-auto flex justify-between items-center py-6 px-6 sm:px-24">
          <a
            href="/"
            className="text-3xl text-heading-text font-bold hover:text-heading-text"
          >
            <img
              src="https://cross-lovemovement.my.canva.site/_assets/media/64e32a6ad47338405ae6e564fb4a0c96.png"
              alt="name"
              className="object-cover w-full h-10"
            />
          </a>
          <nav className="space-x-6 hidden xl:flex">
            <a
              href="/#home"
              className={classNames(
                "text-heading-text",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
            >
              Home
            </a>
            <a
              href="#about_us"
              className={classNames(
                "text-heading-text",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
            >
              About Us
            </a>
            <a
              href="#our_team"
              className={classNames(
                "text-heading-text",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
            >
              Our Team
            </a>
            <a
              href="#our_work"
              className={classNames(
                "text-heading-text",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
            >
              Our Work
            </a>
            <a
              href="#current_project"
              className={classNames(
                "text-heading-text",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
            >
              Current Project
            </a>
            <a
              href="#news_and_updates"
              className={classNames(
                "text-heading-text",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
            >
              News & Updates
            </a>
            <a
              href="#gallery"
              className={classNames(
                "text-heading-text",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
            >
              Gallery
            </a>
            <a
              href="#contact_us"
              className={classNames(
                "text-heading-text",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
            >
              Contact Us
            </a>
          </nav>
          <button
            className="xl:hidden flex items-center text-heading-text-dark hover:text-heading-text-darker"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="text-3xl" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="px-6 pb-4 text-left bg-amber-50 absolute top-20 w-full left-0 z-20 sm:px-24 md:px-32 xl:hidden">
            <a
              href="/#home"
              className={classNames(
                "text-heading-text",
                "block py-2",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about_us"
              className={classNames(
                "text-heading-text",
                "block py-2",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#our_team"
              className={classNames(
                "text-heading-text",
                "block py-2",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
              onClick={toggleMenu}
            >
              Our Team
            </a>
            <a
              href="#our_work"
              className={classNames(
                "text-heading-text",
                "block py-2",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
              onClick={toggleMenu}
            >
              Our Work
            </a>
            <a
              href="#current_project"
              className={classNames(
                "text-heading-text",
                "block py-2",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
              onClick={toggleMenu}
            >
              Current Project
            </a>
            <a
              href="#news_and_updates"
              className={classNames(
                "text-heading-text",
                "block py-2",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
              onClick={toggleMenu}
            >
              News & Updates
            </a>
            <a
              href="#gallery"
              className={classNames(
                "text-heading-text",
                "block py-2",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
              onClick={toggleMenu}
            >
              Gallery
            </a>
            <a
              href="#contact_us"
              className={classNames(
                "text-heading-text",
                "block py-2",
                "hover:text-heading-text-dark hover:font-bold",
                { "text-heading-text-dark font-bold": false }
              )}
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </nav>
        )}
      </header>

      <Outlet />

      {/* <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}

      <footer className="bg-gray-200 py-7">
        <div className="flex flex-col px-6 items-center justify-center text-gray-500 text-xs">
          <div>
            <p>
              Copyright &copy; Appiatu Group of businesses. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
