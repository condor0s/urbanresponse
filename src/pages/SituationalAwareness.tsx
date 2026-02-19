import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Eye, AlertTriangle, CheckCircle, Layers, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/awareness-eyes.jpg";

const SituationalAwareness = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Εκπαίδευση"
        title="Situational Awareness"
        description="Η ικανότητα να βλέπεις, να κατανοείς και να αντιδράς σε αυτό που συμβαίνει γύρω σου — πριν γίνει απειλή."
        backgroundImage={heroImage}
        height="60vh"
      />

      {/* Intro */}
      <Section background="darker">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
            Το Situational Awareness (Επίγνωση Κατάστασης) είναι ο ακρογωνιαίος λίθος κάθε συστήματος αστικής ασφάλειας. Δεν πρόκειται για παράνοια ή υπερβολική καχυποψία — αλλά για ένα ήρεμο, δομημένο τρόπο παρατήρησης του περιβάλλοντος.
          </p>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.9 }}>
            Ο στόχος είναι να αναγνωρίζεις έγκαιρα σημάδια κινδύνου, ώστε να έχεις χρόνο και επιλογές — αντί να αναγκαστείς να αντιδράς σε κρίση.
          </p>
        </div>
      </Section>

      {/* Cooper's Color Code */}
      <Section subtitle="Το Μοντέλο" title="Cooper's Color Code" background="dark">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "40px", textAlign: "center" }}>
            Το Urban Response χρησιμοποιεί το ευρέως αναγνωρισμένο σύστημα Color Code του Jeff Cooper ως βάση για την εκπαίδευση επίγνωσης.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { color: "#f5f5f5", label: "WHITE", title: "Απροετοίμαστος", desc: "Δεν αντιλαμβάνεσαι το περιβάλλον σου. Ευάλωτος σε αιφνιδιασμό." },
              { color: "#facc15", label: "YELLOW", title: "Χαλαρή Επίγνωση", desc: "Ήρεμος αλλά παρατηρητικός. Το ιδανικό καθημερινό state." },
              { color: "#f97316", label: "ORANGE", title: "Εστιασμένη Επίγνωση", desc: "Έχεις εντοπίσει κάτι που τραβά την προσοχή σου. Αξιολογείς." },
              { color: "#dc2626", label: "RED", title: "Έτοιμος για Δράση", desc: "Ο κίνδυνος είναι επιβεβαιωμένος. Έτοιμος να ενεργήσεις." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  padding: "24px",
                  backgroundColor: "#141414",
                  borderRadius: "4px",
                  borderLeft: `4px solid ${item.color}`,
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 700, color: item.color, letterSpacing: "2px", minWidth: "70px", marginTop: "3px" }}>{item.label}</span>
                <div>
                  <h4 style={{ fontSize: "17px", color: "#f5f5f5", marginBottom: "6px", fontFamily: "'Noto Sans Display', sans-serif" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: "#a3a3a3" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What we train */}
      <Section subtitle="Τι Εκπαιδεύουμε" background="gradient">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ maxWidth: "900px", margin: "0 auto" }}>
          {[
            { icon: <Eye size={28} />, title: "Παρατήρηση", desc: "Εκπαίδευση ματιού: να βλέπεις αυτό που οι περισσότεροι αγνοούν σε δημόσιους χώρους." },
            { icon: <Layers size={28} />, title: "Ανάλυση", desc: "Κατανόηση πλαισίου: συμπεριφορές, πρότυπα κίνησης, σημεία εξόδου, αστικές ροές." },
            { icon: <Clock size={28} />, title: "Χρόνος Αντίδρασης", desc: "Όσο πιο νωρίς εντοπίσεις τον κίνδυνο, τόσο περισσότερες επιλογές έχεις." },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "36px 24px",
                backgroundColor: "#141414",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#fe4e00", marginBottom: "20px", display: "flex", justifyContent: "center" }}>{item.icon}</div>
              <h4 style={{ fontSize: "17px", color: "#f5f5f5", marginBottom: "12px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>{item.title}</h4>
              <p style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Common mistakes */}
      <Section subtitle="Τα Πιο Συχνά Λάθη" background="darker">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {[
            { icon: <AlertTriangle size={20} />, text: "Τα κινητά και τα ακουστικά μας αποσυνδέουν πλήρως από το περιβάλλον" },
            { icon: <AlertTriangle size={20} />, text: "Η ρουτίνα δημιουργεί τύφλωση — το «γνωστό» περιβάλλον δεν σαρώνεται" },
            { icon: <AlertTriangle size={20} />, text: "Η αποφυγή οπτικής επαφής δεν είναι ταπεινοφροσύνη — είναι αδυναμία ανάγνωσης κατάστασης" },
            { icon: <AlertTriangle size={20} />, text: "Το «εδώ δεν γίνεται τίποτα» είναι η πιο επικίνδυνη νοοτροπία" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "20px", backgroundColor: "#141414", borderRadius: "4px", marginBottom: "12px", borderLeft: "3px solid #dc2626" }}>
              <span style={{ color: "#dc2626", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
              <span style={{ fontSize: "15px", color: "#d4d4d4", lineHeight: 1.7 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ padding: "60px 40px", backgroundColor: "#141414", borderRadius: "8px", borderTop: "4px solid #fe4e00" }}>
            <MapPin size={36} style={{ color: "#fe4e00", margin: "0 auto 20px" }} />
            <h3 style={{ fontSize: "26px", color: "#f5f5f5", marginBottom: "16px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
              Ξεκίνα με την Επίγνωση
            </h3>
            <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "32px" }}>
              Το Situational Awareness είναι η πρώτη ενότητα κάθε εκπαιδευτικού προγράμματος Urban Response. Μάθε να βλέπεις αυτό που οι άλλοι αγνοούν.
            </p>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                backgroundColor: "#fe4e00",
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                borderRadius: "4px",
              }}
            >
              Επικοινωνία
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default SituationalAwareness;
