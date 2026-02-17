import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  background?: "dark" | "darker" | "gradient";
  padding?: "small" | "medium" | "large";
  id?: string;
}

const Section = ({
  children,
  title,
  subtitle,
  background = "dark",
  padding = "large",
  id,
}: SectionProps) => {
  const bgColors = {
    dark: "#0a0a0a",
    darker: "#050505",
    gradient: "linear-gradient(180deg, #0a0a0a 0%, #141414 100%)",
  };

  const paddingValues = {
    small: "40px 0",
    medium: "60px 0",
    large: "100px 0",
  };

  return (
    <section
      id={id}
      style={{
        background: bgColors[background],
        padding: paddingValues[padding],
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {(title || subtitle) && (
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            {subtitle && (
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: "#fe4e00",
                  marginBottom: "12px",
                }}
              >
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#f5f5f5",
                  fontFamily: "'Noto Sans Display', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
