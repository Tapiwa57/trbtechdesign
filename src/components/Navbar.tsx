import {
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Ellipse 2.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/share/1AcUFVLEvV/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/trbelectronics/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Detect scroll for navbar background & social icons
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container-narrow mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="TRB techdesign" className="h-12 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary underline underline-offset-4"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border/30 bg-background/95 backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                {/* Mobile nav links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile social icons */}
                <div className="flex gap-4 mt-4">
                  {socials.map(({ name, icon: Icon }) => (
                    <a
                      key={name}
                      href={socials.find((s) => s.name === name)?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-10 h-10 flex items-center justify-center rounded-full
                        bg-primary text-white
                        transition-all duration-300
                        hover:-translate-y-1 hover:scale-110
                        shadow-md hover:shadow-lg
                      "
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ================= LEFT FIXED SOCIAL BAR (DESKTOP ONLY) ================= */}
      <div
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-40
          hidden md:flex flex-col gap-4
          transition-all duration-500
          ${scrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}
        `}
      >
        {socials.map(({ name, icon: Icon, href }) => (
          <div key={name} className="relative group">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11 flex items-center justify-center rounded-full
                bg-primary text-white
                transition-all duration-300
                hover:-translate-y-1 hover:scale-110
                shadow-md hover:shadow-lg
              "
            >
              <Icon size={18} />
            </a>

            {/* Tooltip */}
            <span
              className="
                absolute left-14 top-1/2 -translate-y-1/2
                whitespace-nowrap px-3 py-1 rounded-md text-xs
                bg-primary text-white
                opacity-0 group-hover:opacity-100
                translate-x-2 group-hover:translate-x-0
                transition-all duration-300
              "
            >
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/263715039928"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 flex items-center justify-center
          rounded-full bg-green-500 text-white
          shadow-lg
          transition-all duration-300
          hover:scale-110 hover:shadow-xl
          md:animate-none animate-bounce
        "
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
};

export default Navbar;