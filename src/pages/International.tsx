import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Link } from "react-router-dom";
import {
  Eye,
  ScanSearch,
  Gauge,
  GitBranch,
  Shield,
  Move,
  Zap,
  HeartPulse,
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  UserCheck,
  Clock,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-international.jpg";
import instructorImage from "@/assets/instructor-stavros.jpg";

const progression = [
  { title: "AWARENESS", text: "Recognising what is happening in the environment.", icon: <Eye size={24} /> },
  { title: "RECOGNITION", text: "Identifying relevant behavioural and situational cues.", icon: <ScanSearch size={24} /> },
  { title: "ASSESSMENT", text: "Understanding risk, options and consequences.", icon: <Gauge size={24} /> },
  { title: "DECISION", text: "Choosing an appropriate response.", icon: <GitBranch size={24} /> },
  { title: "AVOIDANCE / DE-ESCALATION", text: "Reducing exposure and preventing unnecessary escalation.", icon: <Shield size={24} /> },
  { title: "POSITIONING", text: "Managing distance, movement and environmental factors.", icon: <Move size={24} /> },
  { title: "APPROPRIATE ACTION", text: "Taking proportionate action when necessary.", icon: <Zap size={24} /> },
  { title: "RECOVERY", text: "Understanding what to do immediately after an incident.", icon: <HeartPulse size={24} /> },
];

const formats = [
  {
    title: "INTERNATIONAL SEMINARS",
    text: "Short-format intensive training programmes delivered in English.",
    icon: <Globe size={28} />,
  },
  {
    title: "PROFESSIONAL WORKSHOPS",
    text: "Focused sessions addressing specific aspects of awareness, communication, de-escalation and personal safety.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "CORPORATE TRAINING",
    text: "Training designed for employees and professionals who operate in public, urban or unpredictable environments.",
    icon: <Building2 size={28} />,
  },
  {
    title: "EDUCATIONAL PROGRAMMES",
    text: "Adaptable programmes for universities, colleges, educational institutions and young adults.",
    icon: <GraduationCap size={28} />,
  },
  {
    title: "CUSTOM PROGRAMMES",
    text: "Training can be adapted to the needs, environment and profile of the participating organisation.",
    icon: <UserCheck size={28} />,
  },
];

const trainingAreas = [
  "Situational Awareness",
  "Behavioural Recognition",
  "Threat Assessment",
  "Decision-Making Under Pressure",
  "Avoidance",
  "De-escalation",
  "Communication Under Pressure",
  "Personal Boundaries",
  "Distance & Positioning",
  "Environmental Awareness",
  "Appropriate Physical Response",
  "Post-Event Awareness",
];

const audiences = [
  {
    title: "ORGANISATIONS",
    text: "Training for organisations seeking to improve personal safety awareness and decision-making.",
    icon: <Building2 size={26} />,
  },
  {
    title: "CORPORATE TEAMS",
    text: "Practical safety and awareness training for employees and professionals.",
    icon: <Briefcase size={26} />,
  },
  {
    title: "EDUCATIONAL INSTITUTIONS",
    text: "Programmes designed for students, young adults and young leaders.",
    icon: <GraduationCap size={26} />,
  },
  {
    title: "PROFESSIONAL GROUPS",
    text: "Adapted training for professionals working in public-facing or unpredictable environments.",
    icon: <UserCheck size={26} />,
  },
  {
    title: "PRIVATE GROUPS",
    text: "Selected seminars and workshops for groups outside Greece.",
    icon: <Users size={26} />,
  },
];

const deliveryFormats = [
  "Half-day workshops",
  "One-day seminars",
  "Short intensive programmes",
  "Bespoke organisational training",
];

const cardStyle: React.CSSProperties = {
  backgroundColor: "#141414",
  border: "1px solid #1f1f1f",
  borderRadius: "4px",
  padding: "32px",
  transition: "all 0.3s ease",
};

const International = () => {
  return (
    <Layout>
      {/* 1. HERO */}
      <HeroSection
        title="Urban Response® International"
        subtitle="International Programmes"
        description="Prevention-first training for safer decision-making in urban environments."
        ctaText="International Training Enquiry"
        ctaLink="/contact"
        backgroundImage={heroBg}
        height="88vh"
      />

      <Section background="dark" padding="medium">
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "20px" }}>
            Urban Response® is an independent training framework focused on awareness, threat recognition,
            decision-making, avoidance, de-escalation and personal protection in modern urban environments.
          </p>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.9 }}>
            International programmes are available in English for organisations, educational institutions,
            professional groups and selected private training events.
          </p>
        </div>
      </Section>

      {/* 2. WHAT IS URBAN RESPONSE */}
      <Section background="darker" title="What is Urban Response®?" subtitle="The Framework">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <div style={{ flex: "1 1 380px", minWidth: "min(100%, 380px)" }}>
            <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
              Urban Response® is a prevention-first, civilian-oriented framework designed to develop practical
              awareness, recognition, assessment and decision-making skills in everyday urban environments.
            </p>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9 }}>
              The system focuses on what happens before, during and after a potentially threatening situation —
              not simply on physical response.
            </p>
          </div>
          <div style={{ flex: "1 1 380px", minWidth: "min(100%, 380px)" }}>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "24px" }}>
              Participants learn to recognise developing situations, assess risk, make appropriate decisions,
              avoid unnecessary confrontation, communicate effectively, manage distance and positioning, and
              respond appropriately when physical action cannot be avoided.
            </p>
            <div
              style={{
                borderLeft: "3px solid #fe4e00",
                paddingLeft: "20px",
                backgroundColor: "#141414",
                padding: "20px 20px 20px 20px",
              }}
            >
              <p style={{ fontSize: "17px", color: "#f5f5f5", lineHeight: 1.8, fontWeight: 600 }}>
                Urban Response® is not built on memorising techniques. It is built on developing decision-making
                under pressure.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. THE APPROACH */}
      <Section background="dark" title="The Urban Response Approach" subtitle="Progression">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", maxWidth: "820px", margin: "0 auto" }}>
          {progression.map((step, index) => (
            <div key={step.title}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px",
                  backgroundColor: "#141414",
                  border: "1px solid #1f1f1f",
                  borderLeft: "3px solid #fe4e00",
                  borderRadius: "4px",
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    backgroundColor: "#1f1f1f",
                    color: "#fe4e00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", color: "#fe4e00", fontWeight: 700, letterSpacing: "1px" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      style={{
                        fontSize: "20px",
                        color: "#f5f5f5",
                        fontFamily: "'Roboto Condensed', sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.7, marginTop: "8px" }}>{step.text}</p>
                </div>
              </div>
              {index < progression.length - 1 && (
                <div style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}>
                  <span style={{ color: "#fe4e00", fontSize: "20px", lineHeight: 1 }}>↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 4. INTERNATIONAL TRAINING */}
      <Section background="darker" title="International Training" subtitle="Programme Formats">
        <p
          style={{
            fontSize: "17px",
            color: "#a3a3a3",
            lineHeight: 1.9,
            maxWidth: "820px",
            margin: "0 auto 50px",
            textAlign: "center",
          }}
        >
          Urban Response® international programmes are designed for organisations and groups seeking practical
          training in urban safety, personal protection, awareness and decision-making.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {formats.map((item) => (
            <div
              key={item.title}
              style={{ ...cardStyle, flex: "1 1 300px", minWidth: "min(100%, 300px)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#fe4e00";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1f1f1f";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ color: "#fe4e00", marginBottom: "20px" }}>{item.icon}</div>
              <h3
                style={{
                  fontSize: "19px",
                  color: "#f5f5f5",
                  fontFamily: "'Roboto Condensed', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "15px", color: "#a3a3a3", lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CORE TRAINING AREAS */}
      <Section background="dark" title="Core Training Areas" subtitle="One Connected Framework">
        <p
          style={{
            fontSize: "17px",
            color: "#a3a3a3",
            lineHeight: 1.9,
            maxWidth: "820px",
            margin: "0 auto 50px",
            textAlign: "center",
          }}
        >
          These are not isolated techniques. Each area supports and depends on the others, forming a single,
          continuous decision-making framework.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {trainingAreas.map((area, index) => (
            <div
              key={area}
              style={{
                flex: "1 1 calc(33.333% - 8px)",
                minWidth: "min(100%, 260px)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                backgroundColor: "#141414",
                border: "1px solid #1f1f1f",
                borderRadius: "4px",
                padding: "20px 22px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fe4e00")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1f1f1f")}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#fe4e00",
                  letterSpacing: "1px",
                  minWidth: "24px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "16px", color: "#f5f5f5", fontWeight: 500 }}>{area}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. WHO IS IT FOR */}
      <Section background="darker" title="Who is Urban Response® International For?" subtitle="Audience">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {audiences.map((item) => (
            <div
              key={item.title}
              style={{ ...cardStyle, flex: "1 1 300px", minWidth: "min(100%, 300px)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#fe4e00";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1f1f1f";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ color: "#fe4e00", marginBottom: "18px" }}>{item.icon}</div>
              <h3
                style={{
                  fontSize: "18px",
                  color: "#f5f5f5",
                  fontFamily: "'Roboto Condensed', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "15px", color: "#a3a3a3", lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. DELIVERY */}
      <Section background="dark" title="International Delivery" subtitle="Language & Formats">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 320px", minWidth: "min(100%, 320px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <Globe size={30} style={{ color: "#fe4e00" }} />
              <p style={{ fontSize: "20px", color: "#f5f5f5", fontWeight: 600 }}>
                Programmes can be delivered in English.
              </p>
            </div>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9 }}>
              Where required, the programme can be adapted to the profile of the participants and to the training
              environment.
            </p>
          </div>
          <div style={{ flex: "1 1 320px", minWidth: "min(100%, 320px)" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#fe4e00",
                marginBottom: "20px",
              }}
            >
              Urban Response® international training can be delivered as:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {deliveryFormats.map((format) => (
                <div
                  key={format}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    backgroundColor: "#141414",
                    border: "1px solid #1f1f1f",
                    borderRadius: "4px",
                    padding: "16px 20px",
                  }}
                >
                  <Clock size={18} style={{ color: "#fe4e00", flexShrink: 0 }} />
                  <span style={{ fontSize: "16px", color: "#f5f5f5" }}>{format}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 8. CPD */}
      <Section background="darker" title="CPD" subtitle="Professional Development">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            alignItems: "center",
            backgroundColor: "#141414",
            border: "1px solid #1f1f1f",
            borderLeft: "3px solid #fe4e00",
            borderRadius: "4px",
            padding: "40px",
            maxWidth: "980px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "110px",
              height: "110px",
              flexShrink: 0,
              borderRadius: "50%",
              backgroundColor: "#1f1f1f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fe4e00",
            }}
          >
            <Award size={48} />
          </div>
          <div style={{ flex: "1 1 320px", minWidth: "min(100%, 320px)" }}>
            <h3
              style={{
                fontSize: "22px",
                color: "#f5f5f5",
                fontFamily: "'Roboto Condensed', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "14px",
              }}
            >
              Urban Response® is a CPD Provider
            </h3>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9 }}>
              Urban Response® operates within a structured professional development framework and is a registered
              CPD Provider. CPD certification applies only to programmes that have completed the relevant
              certification process; it is not automatically granted to every international seminar or workshop.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. FOUNDER */}
      <Section background="dark" title="Founder & Lead Instructor" subtitle="Leadership">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 300px", minWidth: "min(100%, 300px)" }}>
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden" }}>
              <img
                src={instructorImage}
                alt="Stavros Baroutas, Founder and Lead Instructor of Urban Response"
                loading="lazy"
                style={{ width: "100%", height: "auto", display: "block", filter: "grayscale(20%) contrast(105%)" }}
              />
            </div>
          </div>
          <div style={{ flex: "1 1 380px", minWidth: "min(100%, 380px)" }}>
            <h3
              style={{
                fontSize: "26px",
                color: "#f5f5f5",
                fontFamily: "'Roboto Condensed', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              Stavros Baroutas
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#fe4e00",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Founder & Lead Instructor — Urban Response®
            </p>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "18px" }}>
              Stavros Baroutas is the founder and lead instructor of Urban Response®. His work is based on many
              years of hands-on instructional experience in civilian personal protection, combined with
              international training in hostile environment awareness and continuing professional development in
              risk management and urban safety.
            </p>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "18px" }}>
              His focus is curriculum development: structuring awareness, recognition, assessment and
              decision-making into a coherent, teachable framework that transfers to real urban conditions rather
              than to demonstration settings.
            </p>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "28px" }}>
              The Urban Response® methodology is the result of that development work — prevention-first,
              decision-centred and adaptable to different environments, organisations and groups.
            </p>
            <Link
              to="/instructor"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#fe4e00",
                textDecoration: "none",
              }}
            >
              Full profile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* 10. CTA */}
      <section
        style={{
          padding: "100px 24px",
          background: "linear-gradient(180deg, #0a0a0a 0%, #141414 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              color: "#f5f5f5",
              fontFamily: "'Roboto Condensed', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "24px",
              lineHeight: 1.2,
            }}
          >
            Bring Urban Response® to your organisation
          </h2>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "16px" }}>
            Interested in hosting an Urban Response® seminar or workshop?
          </p>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "40px" }}>
            Contact us to discuss available training formats, dates and requirements.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px 36px",
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
            International Training Enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default International;
