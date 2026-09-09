import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logoImage from "../assets/logo/logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "For Businesses", href: "#businesses" },
    { name: "For Workers", href: "#workers" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px] rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
        
        <div className="flex h-[76px] items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* Logo Area */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex min-w-[190px] items-center"
          >
            {/* Replace this placeholder with your real logo later */}
            <img
  src={logoImage}
  alt="SUPERHEROOO logo"
  className="h-[72px] w-[72px] shrink-0 object-contain"
/>

            <div className="ml-3 text-[17px] font-extrabold tracking-wide text-[#061a33]">
              SUPER<span className="text-orange-500">HEROOO</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-slate-600 transition duration-300 hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Area */}
          <div className="hidden min-w-[190px] justify-end lg:flex">
            <a
              href="#contact"
              className="rounded-xl bg-[#061a33] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#061a33] transition hover:text-orange-500 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-6 lg:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 w-fit rounded-xl bg-[#061a33] px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;