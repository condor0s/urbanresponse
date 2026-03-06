import Layout from "@/components/Layout";
import logo from "@/assets/logo.png";
import { ShieldCheck, Calendar, Award, User, Clock } from "lucide-react";

const CertificateVerify2 = () => {
  const cert = {
    student_name: "Σωτήρης Σουφλάκος",
    certificate_level: "Level 3 – Urban Risk & Behaviour Analysis",
    certification_date: "12 Φεβρουαρίου 2026",
    expires_at: "12 Φεβρουαρίου 2028",
    status: "active" as "active" | "expired",
  };

  const isActive = cert.status === "active";

  return (
    <Layout>
      <section style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", padding: "120px 24px 80px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>

          {/* Status badge */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              backgroundColor: isActive ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
              color: isActive ? "#22c55e" : "#ef4444",
              border: `1px solid ${isActive ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
            }}>
              <ShieldCheck size={16} />
              {isActive ? "Ενεργό Πιστοποιητικό" : "Ληγμένο Πιστοποιητικό"}
            </span>
          </div>

          {/* Certificate card */}
          <div style={{
            backgroundColor: "#111111",
            borderRadius: "4px",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
            border: "1px solid #222222",
          }}>
            {/* Top orange bar */}
            <div style={{ height: "6px", background: "linear-gradient(90deg, #fe4e00, #ff7a33)" }} />

            {/* Inner content */}
            <div style={{ padding: "56px 48px 48px", textAlign: "center" }}>

              {/* Logo */}
              <img src={logo} alt="Urban Response" style={{ height: "64px", margin: "0 auto 8px" }} />
              <p style={{ fontSize: "12px", color: "#525252", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "40px" }}>
                Structured Urban Safety Framework
              </p>

              {/* Title */}
              <h1 style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#fe4e00",
                fontFamily: "'Noto Sans Display', sans-serif",
                marginBottom: "32px",
              }}>
                Urban Response Foundation Certificate
              </h1>

              {/* Awarded to */}
              <p style={{ fontSize: "14px", color: "#737373", marginBottom: "8px" }}>
                This certificate is proudly awarded to
              </p>

              {/* Student name */}
              <h2 style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#f5f5f5",
                fontFamily: "'Noto Sans Display', sans-serif",
                marginBottom: "12px",
              }}>
                {cert.student_name}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: "14px",
                color: "#a3a3a3",
                maxWidth: "500px",
                margin: "0 auto 40px",
                lineHeight: 1.7,
              }}>
                For successfully completing the requirements of{" "}
                <strong style={{ color: "#f5f5f5" }}>{cert.certificate_level.split("–")[0].trim()}</strong>{" "}
                within the Urban Response training system, demonstrating applied understanding of
                awareness, decision‑making and controlled response in urban safety environments.
              </p>

              {/* Divider */}
              <div style={{ width: "60px", height: "2px", backgroundColor: "#fe4e00", margin: "0 auto 40px" }} />

              {/* Details grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px 48px",
                maxWidth: "480px",
                margin: "0 auto 40px",
                textAlign: "left",
              }}>
                {[
                  { icon: Calendar, label: "Ημερομηνία", value: cert.certification_date },
                  { icon: Award, label: "Επίπεδο", value: cert.certificate_level.split("–")[0].trim() },
                  { icon: User, label: "Εκπαιδευτής", value: "Stavros Baroutas" },
                  { icon: Clock, label: "Ισχύς έως", value: cert.expires_at },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                      <item.icon size={14} color="#fe4e00" />
                      <span style={{ fontSize: "11px", color: "#525252", textTransform: "uppercase", letterSpacing: "1px" }}>
                        {item.label}
                      </span>
                    </div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#e5e5e5" }}>{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <p style={{ fontSize: "11px", color: "#525252", letterSpacing: "1px" }}>
                Urban Response Certification System — urbanresponse.gr
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default CertificateVerify2;
