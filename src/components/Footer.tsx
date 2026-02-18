import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #333333" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 24px 30px" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Urban Response" style={{ height: "80px", marginBottom: "20px" }} />
            <p style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: 1.8 }}>
              Σύγχρονο εκπαιδευτικό πλαίσιο αστικής ασφάλειας και προσωπικής προστασίας.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "18px", color: "#f5f5f5", marginBottom: "20px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
              Σελίδες
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { path: "/about", label: "Σχετικά" },
                { path: "/instructor", label: "Ο Εκπαιδευτής" },
                { path: "/mission", label: "Αποστολή & Όραμα" },
                { path: "/blog", label: "Blog" },
                { path: "/faq", label: "FAQ" },
                { path: "/contact", label: "Επικοινωνία" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    fontSize: "14px",
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#fe4e00"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#a3a3a3"}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Training */}
          <div>
            <h4 style={{ fontSize: "18px", color: "#f5f5f5", marginBottom: "20px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
              Εκπαίδευση
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ fontSize: "14px", color: "#a3a3a3" }}>Situational Awareness</li>
              <li style={{ fontSize: "14px", color: "#a3a3a3" }}>Decision Making</li>
              <li style={{ fontSize: "14px", color: "#a3a3a3" }}>De-escalation</li>
              <li style={{ fontSize: "14px", color: "#a3a3a3" }}>Physical Response</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: "18px", color: "#f5f5f5", marginBottom: "20px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
              Επικοινωνία
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a 
                href="tel:+306989040174" 
                style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#a3a3a3", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fe4e00"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#a3a3a3"}
              >
                <Phone size={18} style={{ color: "#fe4e00" }} />
                (+30) 6989 040 174
              </a>
              <a 
                href="tel:+302310441777" 
                style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#a3a3a3", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fe4e00"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#a3a3a3"}
              >
                <Phone size={18} style={{ color: "#fe4e00" }} />
                (+30) 2310 441777
              </a>
              <a 
                href="mailto:info@kravmagakalamarias.gr" 
                style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#a3a3a3", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fe4e00"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#a3a3a3"}
              >
                <Mail size={18} style={{ color: "#fe4e00" }} />
                info@kravmagakalamarias.gr
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#a3a3a3" }}>
                <MapPin size={18} style={{ color: "#fe4e00", flexShrink: 0, marginTop: "2px" }} />
                <span>Εθνικής Αντιστάσεως 16<br />Καλαμαριά, 55 133</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[50px] pt-[30px] border-t border-[#1f1f1f] flex flex-col md:flex-row items-center md:justify-between gap-[10px]">
          <p style={{ fontSize: "13px", color: "#737373" }}>
            © {new Date().getFullYear()} Urban Response. Με επιφύλαξη παντός δικαιώματος.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
