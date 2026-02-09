import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { path: "/", label: "Αρχική" },
  { path: "/about", label: "Σχετικά" },
  { path: "/instructor", label: "Ο Εκπαιδευτής" },
  { path: "/mission", label: "Αποστολή & Όραμα" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Επικοινωνία" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50,
        backgroundColor: "rgba(10, 10, 10, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #333333"
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img 
              src={logo} 
              alt="Urban Response Logo" 
              style={{ height: "60px", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: location.pathname === item.path ? "#fe4e00" : "#f5f5f5",
                  transition: "color 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fe4e00"}
                onMouseLeave={(e) => e.currentTarget.style.color = location.pathname === item.path ? "#fe4e00" : "#f5f5f5"}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden p-2 text-[#f5f5f5] bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "24px",
              borderTop: "1px solid #333333",
            }}
            className="md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  padding: "16px 0",
                  fontSize: "16px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: location.pathname === item.path ? "#fe4e00" : "#f5f5f5",
                  textDecoration: "none",
                  borderBottom: "1px solid #1f1f1f",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
