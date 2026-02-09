import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Target, Eye, CheckCircle, AlertTriangle, Shield, Brain, Move } from "lucide-react";

import threatImage from "@/assets/threat-scenario.jpg";

const Mission = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        subtitle="Αποστολή & Όραμα"
        title="Γιατί υπάρχει το Urban Response"
        backgroundImage={threatImage}
        height="50vh"
      />

      {/* Mission & Vision */}
      <Section background="darker">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div 
            style={{
              padding: "50px",
              backgroundColor: "#141414",
              borderRadius: "4px",
              borderTop: "4px solid #fe4e00",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <Target size={32} style={{ color: "#fe4e00" }} />
              <h3 style={{ fontSize: "24px", color: "#f5f5f5", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase" }}>
                Αποστολή
              </h3>
            </div>
            <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9 }}>
              Η αποστολή του Urban Response είναι να εκπαιδεύει ανθρώπους να αναγνωρίζουν τον κίνδυνο, να λαμβάνουν σωστές αποφάσεις και να προστατεύουν τον εαυτό τους στο αστικό περιβάλλον, με έμφαση στην πρόληψη, την επίγνωση και την <strong style={{ color: "#fe4e00" }}>ασφαλή επιστροφή στο σπίτι</strong>.
            </p>
          </div>

          {/* Vision */}
          <div 
            style={{
              padding: "50px",
              backgroundColor: "#141414",
              borderRadius: "4px",
              borderTop: "4px solid #737373",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <Eye size={32} style={{ color: "#737373" }} />
              <h3 style={{ fontSize: "24px", color: "#f5f5f5", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase" }}>
                Όραμα
              </h3>
            </div>
            <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9 }}>
              Το όραμα του Urban Response είναι μια κοινωνία όπου οι άνθρωποι κινούνται στην πόλη με επίγνωση, ψυχραιμία και αυτοπεποίθηση, χωρίς να χρειάζεται να έρθουν σε σύγκρουση για να είναι ασφαλείς.
            </p>
          </div>
        </div>
      </Section>

      {/* WHY */}
      <Section subtitle="WHY" title="Γιατί υπάρχει το Urban Response" background="dark">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "32px", textAlign: "center" }}>
            Υπάρχει γιατί οι περισσότεροι άνθρωποι δεν κινδυνεύουν επειδή δεν ξέρουν να παλέψουν, αλλά επειδή:
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              "Δεν αναγνωρίζουν έγκαιρα τον κίνδυνο",
              "Παγώνουν ή αντιδρούν λάθος",
              "Μπαίνουν σε καταστάσεις που θα μπορούσαν να είχαν αποφευχθεί",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", backgroundColor: "#141414", borderRadius: "4px", borderLeft: "3px solid #dc2626" }}>
                <AlertTriangle size={22} style={{ color: "#dc2626", flexShrink: 0 }} />
                <span style={{ fontSize: "16px", color: "#d4d4d4" }}>{item}</span>
              </div>
            ))}
          </div>
          
          <div 
            style={{
              padding: "40px",
              backgroundColor: "#141414",
              borderRadius: "8px",
              borderLeft: "4px solid #fe4e00",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "18px", color: "#fe4e00", fontWeight: 600 }}>
              Το Urban Response υπάρχει για να βοηθά ανθρώπους να επιστρέφουν ασφαλείς στο σπίτι τους, όχι για να αποδείξουν κάτι, όχι για να κερδίσουν μια σύγκρουση.
            </p>
          </div>
        </div>
      </Section>

      {/* HOW */}
      <Section subtitle="HOW" title="Πώς το κάνει" background="gradient">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "40px", textAlign: "center" }}>
            Το Urban Response εκπαιδεύει μέσα από ένα ολοκληρωμένο πλαίσιο αστικής ασφάλειας που βασίζεται σε:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-[50px]">
            {[
              { icon: <Eye size={24} />, text: "Επίγνωση περιβάλλοντος (Situational Awareness)" },
              { icon: <Shield size={24} />, text: "Πρόληψη και αποφυγή ρίσκου" },
              { icon: <Brain size={24} />, text: "Λήψη σωστών αποφάσεων υπό πίεση" },
              { icon: <Target size={24} />, text: "Διαχείριση στρες και φόβου" },
              { icon: <Move size={24} />, text: "Απλή, ρεαλιστική φυσική αντίδραση" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "24px", backgroundColor: "#1a1a1a", borderRadius: "4px" }}>
                <span style={{ color: "#fe4e00", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                <span style={{ fontSize: "15px", color: "#d4d4d4" }}>{item.text}</span>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: "center" }}>
            <h4 style={{ fontSize: "18px", color: "#f5f5f5", marginBottom: "20px", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase" }}>
              Η εκπαίδευση είναι:
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              {["Πρακτική", "Προσαρμοσμένη στην καθημερινή ζωή", "Χωρίς υπερβολές, χωρίς ηρωισμούς"].map((item, i) => (
                <span 
                  key={i}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#fe4e00",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 600,
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT */}
      <Section subtitle="WHAT" title="Τι είναι στην πράξη" background="darker">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "32px", textAlign: "center" }}>
            Το Urban Response είναι ένα σύγχρονο εκπαιδευτικό πλαίσιο αστικής ασφάλειας και προσωπικής προστασίας.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              "Εκπαίδευση πρόληψης και επίγνωσης",
              "Σενάρια καθημερινών αστικών κινδύνων",
              "Διαχείριση απρόβλεπτων καταστάσεων",
              "Φυσική αυτοπροστασία με στόχο τη διακοπή της εμπλοκής και την απομάκρυνση",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", backgroundColor: "#141414", borderRadius: "4px" }}>
                <CheckCircle size={22} style={{ color: "#22c55e", flexShrink: 0 }} />
                <span style={{ fontSize: "16px", color: "#d4d4d4" }}>{item}</span>
              </div>
            ))}
          </div>
          
          <div 
            style={{
              padding: "40px",
              backgroundColor: "#141414",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "16px", color: "#a3a3a3", marginBottom: "20px" }}>
              <span style={{ color: "#737373" }}>✕</span> Δεν είναι άθλημα.<br />
              <span style={{ color: "#737373" }}>✕</span> Δεν είναι πολεμική τέχνη.<br />
              <span style={{ color: "#737373" }}>✕</span> Δεν είναι στρατιωτική εκπαίδευση.
            </p>
            <p style={{ fontSize: "18px", color: "#fe4e00", fontWeight: 600 }}>
              Είναι εκπαίδευση για πραγματικούς ανθρώπους, σε πραγματικές πόλεις, σε πραγματικές συνθήκες.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Mission;
