import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
  overlay?: boolean;
  height?: string;
  centered?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink = "/contact",
  backgroundImage,
  overlay = true,
  height = "100vh",
  centered = true,
}: HeroSectionProps) => {
  return (
    <section
      style={{
        position: "relative",
        height: height,
        minHeight: "500px",
        display: "flex",
        alignItems: centered ? "center" : "flex-end",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.85) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          padding: centered ? "40px 24px" : "80px 24px",
          textAlign: centered ? "center" : "left",
        }}
      >
        {subtitle && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "#fe4e00",
              marginBottom: "16px",
            }}
          >
            {subtitle}
          </p>
        )}
        
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "24px",
            fontFamily: "'Roboto Condensed', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "2px",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>

        {description && (
          <p
            style={{
              fontSize: "18px",
              color: "#d4d4d4",
              maxWidth: "700px",
              margin: centered ? "0 auto 32px" : "0 0 32px 0",
              lineHeight: 1.7,
            }}
          >
            {description}
          </p>
        )}

        {ctaText && (
          <Link
            to={ctaLink}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 32px",
              backgroundColor: "#fe4e00",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              textDecoration: "none",
              borderRadius: "4px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ff7a33";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fe4e00";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            → {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
