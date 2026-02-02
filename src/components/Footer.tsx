import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/Ellipse 2.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0a1929] py-12 text-foreground">
      <div className="container-narrow mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">

          {/* Logo & Description */}
          <div className="space-y-4 max-w-xs">
            <img src={logo} alt="Idenoloji" className="h-12 w-auto" />
            <p className="text-sm text-foreground/80">
              Empowering businesses through smart technology from web development to IT solutions and digital security.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://wa.me/263715039928"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/1AcUFVLEvV/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/trbelectronics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] flex items-center justify-center text-white hover:brightness-90 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Footer Menu Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-foreground/60">
          <p>© 2025 TRB TECHDESIGN . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;