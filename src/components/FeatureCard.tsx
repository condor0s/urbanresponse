import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  accentColor?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  accentColor = "#fe4e00",
}: FeatureCardProps) => {
  return (
    <div
      style={{
        padding: "40px 30px",
        backgroundColor: "#141414",
        borderRadius: "4px",
        borderLeft: `4px solid ${accentColor}`,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {icon && (
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#1f1f1f",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            color: accentColor,
          }}
        >
          {icon}
        </div>
      )}
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#f5f5f5",
          marginBottom: "16px",
          fontFamily: "'Roboto Condensed', sans-serif",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "15px",
          color: "#a3a3a3",
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
