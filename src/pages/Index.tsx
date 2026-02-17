import { Link } from "react-router-dom";
import { Eye, Brain, Shield, Move, CheckCircle, AlertTriangle, Users, Target } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

import heroImage from "@/assets/hero-urban-night.jpg";
import awarenessImage from "@/assets/awareness-eyes.jpg";
import urbanImage from "@/assets/hero-threat.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        subtitle="Urban Response"
        title="Αστική ασφάλεια & προσωπική προστασία για πραγματικές συνθήκες"
        description="Ένα σύγχρονο πλαίσιο εκπαίδευσης που δίνει έμφαση στην πρόληψη, την επίγνωση κινδύνου και τη σωστή λήψη αποφάσεων πριν την εμπλοκή."
        ctaText="Επικοινώνησε"
        ctaLink="/contact"
        backgroundImage={heroImage}
      />

      {/* What is Urban Response */}
      <Section subtitle="Τι είναι" title="Urban Response" background="darker">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          <div>
            <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.8, marginBottom: "24px" }}>
              Το Urban Response είναι ένα ανεξάρτητο εκπαιδευτικό framework αστικής ασφάλειας και προσωπικής προστασίας.
            </p>
            <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "32px" }}>
              <strong style={{ color: "#fe4e00" }}>Δεν είναι πολεμική τέχνη</strong> και δεν βασίζεται στη σύγκρουση.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Προετοιμάζει ανθρώπους για αστικά περιστατικά",
                "Εκπαιδεύει τη σκέψη πριν την αντίδραση",
                "Δίνει εργαλεία για αποφυγή, αποκλιμάκωση και ασφαλή έξοδο",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <CheckCircle size={20} style={{ color: "#fe4e00", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "16px", color: "#d4d4d4" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: "relative" }}>
            <img 
              src={awarenessImage} 
              alt="Situational Awareness" 
              style={{ 
                width: "100%", 
                height: "400px", 
                objectFit: "cover", 
                borderRadius: "4px",
              }} 
            />
            <div 
              style={{ 
                position: "absolute", 
                bottom: "-20px", 
                left: "-20px", 
                width: "150px", 
                height: "150px", 
                backgroundColor: "#fe4e00", 
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "20px",
              }}
              className="hidden md:flex"
            >
              <span style={{ fontSize: "48px", fontWeight: 700, color: "#fff" }}>5</span>
              <span style={{ fontSize: "14px", textTransform: "uppercase", color: "#fff", textAlign: "center" }}>Επίπεδα Εκπαίδευσης</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Pillars */}
      <Section subtitle="Οι βασικοί άξονες" title="Εκπαίδευσης" background="gradient">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Eye size={28} />}
            title="Situational Awareness"
            description="Αναγνώριση κινδύνου, περιβάλλοντος και αλλαγών συμπεριφοράς."
          />
          <FeatureCard
            icon={<Brain size={28} />}
            title="Decision Making Under Pressure"
            description="Πότε φεύγω, πότε μιλάω, πότε αντιδρώ."
          />
          <FeatureCard
            icon={<Shield size={28} />}
            title="Avoidance & De-escalation"
            description="Μείωση έντασης πριν φτάσει στο σημείο σύγκρουσης."
          />
          <FeatureCard
            icon={<Move size={28} />}
            title="Physical Response"
            description="Απεμπλοκή, έλεγχος χώρου και ασφαλής διαφυγή - όταν δεν υπάρχει άλλη επιλογή."
          />
          <FeatureCard
            icon={<CheckCircle size={28} />}
            title="Post-Incident Behaviour"
            description="Τι κάνεις μετά: απομάκρυνση, έλεγχος, ψυχραιμία."
          />
        </div>
      </Section>

      {/* Who It's For */}
      <Section background="darker">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {/* For Who */}
          <div 
            style={{ 
              padding: "50px", 
              backgroundColor: "#141414", 
              borderRadius: "4px",
              borderTop: "4px solid #fe4e00",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "30px" }}>
              <Users size={32} style={{ color: "#fe4e00" }} />
              <h3 style={{ fontSize: "24px", color: "#f5f5f5", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
                Σε ποιους απευθύνεται
              </h3>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Ανθρώπους που ζουν και κινούνται καθημερινά στην πόλη",
                "Επαγγελματίες που θέλουν πραγματική αυτοπροστασία",
                "Άτομα που δεν ενδιαφέρονται για \"μαχητικά στυλ\"",
                "Όσους θέλουν πρόληψη, όχι σύγκρουση",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <CheckCircle size={18} style={{ color: "#22c55e", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "16px", color: "#d4d4d4" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div 
            style={{ 
              padding: "50px", 
              backgroundColor: "#141414", 
              borderRadius: "4px",
              borderTop: "4px solid #737373",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "30px" }}>
              <AlertTriangle size={32} style={{ color: "#737373" }} />
              <h3 style={{ fontSize: "24px", color: "#f5f5f5", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
                Σε ποιους ΔΕΝ απευθύνεται
              </h3>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Σε όσους ψάχνουν άθλημα",
                "Σε όσους θέλουν επίδειξη ή ανταγωνισμό",
                "Σε όσους συγχέουν την ασφάλεια με την επιθετικότητα",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "#737373", flexShrink: 0 }}>✕</span>
                  <span style={{ fontSize: "16px", color: "#a3a3a3" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Training Structure */}
      <Section subtitle="Πώς γίνεται" title="Η Εκπαίδευση" background="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "01", title: "Επίπεδα", desc: "Levels 1-5" },
            { number: "02", title: "Σενάρια", desc: "Scenario-based training" },
            { number: "03", title: "Εξέλιξη", desc: "Σταδιακή αύξηση πολυπλοκότητας" },
            { number: "04", title: "Αξιολόγηση", desc: "Με βάση σκέψη & συμπεριφορά" },
          ].map((item, i) => (
            <div 
              key={i}
              style={{ 
                padding: "40px 24px", 
                backgroundColor: "#141414", 
                borderRadius: "4px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "#fe4e00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <span style={{ fontSize: "48px", fontWeight: 700, color: "#fe4e00", fontFamily: "'Noto Sans Display', sans-serif" }}>
                {item.number}
              </span>
              <h4 style={{ fontSize: "18px", color: "#f5f5f5", marginTop: "16px", marginBottom: "8px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "14px", color: "#a3a3a3" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Urban Response */}
      <section
        style={{
          position: "relative",
          padding: "100px 0",
          backgroundImage: `url(${urbanImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,10,10,0.85)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#fe4e00", marginBottom: "12px" }}>
              Γιατί
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#f5f5f5", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
              Urban Response
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {[
              "Γιατί τα περισσότερα περιστατικά αποφεύγονται",
              "Γιατί η απόφαση είναι πιο σημαντική από την τεχνική",
              "Γιατί η ασφάλεια ξεκινά πριν το πρόβλημα",
              "Γιατί η πραγματική ζωή δεν έχει \"σωστές απαντήσεις\"",
            ].map((item, i) => (
              <div 
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "24px",
                  backgroundColor: "rgba(20,20,20,0.8)",
                  borderRadius: "4px",
                  borderLeft: "3px solid #fe4e00",
                }}
              >
                <Target size={24} style={{ color: "#fe4e00", flexShrink: 0 }} />
                <span style={{ fontSize: "16px", color: "#d4d4d4" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Section background="dark">
        <div 
          style={{ 
            textAlign: "center", 
            maxWidth: "700px", 
            margin: "0 auto",
            padding: "60px 40px",
            backgroundColor: "#141414",
            borderRadius: "8px",
            border: "1px solid #333333",
          }}
        >
          <h2 style={{ fontSize: "32px", color: "#f5f5f5", marginBottom: "24px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
            Θες να μάθεις περισσότερα;
          </h2>
          <p style={{ fontSize: "16px", color: "#a3a3a3", marginBottom: "32px", lineHeight: 1.7 }}>
            Επικοινώνησε για πληροφορίες σχετικά με τα τμήματα, τα επίπεδα και τη φιλοσοφία του Urban Response.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "18px 40px",
              backgroundColor: "#fe4e00",
              color: "#ffffff",
              fontSize: "15px",
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
            → Επικοινώνησε
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
