import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import heroImage from "@/assets/hero-training-framework.jpg";
import { Shield, Eye, Brain, Zap, Target, Users, ArrowRight } from "lucide-react";

const levels = [
  {
    num: 1,
    title: "Awareness & Foundations",
    duration: "5 εβδομάδες",
    goal: "Να σταματήσεις να κινείσαι «στον αυτόματο».",
    icon: Eye,
    includes: [
      "Βασικές αρχές επίγνωσης περιβάλλοντος",
      "Αναγνώριση προειδοποιητικών ενδείξεων (behavioural cues)",
      "Διαχείριση απόστασης και προσωπικού χώρου",
      "Βασικές λεκτικές αποτροπές",
      "Θεμελιώδης φυσική αντίδραση για διαφυγή",
    ],
    learns: [
      "Να εντοπίζει αλλαγές στο περιβάλλον",
      "Να διαβάζει πρόθεση πριν γίνει επίθεση",
      "Να παίρνει απόφαση πριν πανικοβληθεί",
      "Να απομακρύνεται με ασφάλεια",
    ],
    closing: "Το Level 1 δεν αφορά το «χτύπημα».\nΑφορά την πρόληψη.",
  },
  {
    num: 2,
    title: "Pressure & Control",
    duration: "2 μήνες",
    goal: "Να λειτουργείς υπό πίεση.",
    icon: Zap,
    includes: [
      "Διαχείριση έντασης σε κλειστό χώρο",
      "Βελτίωση αντίδρασης σε αιφνιδιασμό",
      "Λήψη αποφάσεων με μειωμένο χρόνο",
      "Διακοπή εμπλοκής και άμεση διαφυγή",
      "Εισαγωγή σε βασικά stress scenarios",
    ],
    learns: [
      "Να σκέφτεται όταν ανεβαίνουν οι παλμοί",
      "Να ελέγχει την αναπνοή",
      "Να διατηρεί απόσταση σε χαοτικό περιβάλλον",
      "Να μην παγώνει",
    ],
    closing: "Το Level 2 εισάγει ρεαλιστική πίεση.\nΧωρίς φαντασία. Χωρίς θεατρινισμούς.",
  },
  {
    num: 3,
    title: "Urban Risk & Behaviour Analysis",
    duration: "2 μήνες",
    goal: "Να κατανοείς το ρίσκο πριν εκτεθείς σε αυτό.",
    icon: Brain,
    includes: [
      "Ανάλυση ύποπτης συμπεριφοράς",
      "Αντιμετώπιση παρενόχλησης / επιθετικής προσέγγισης",
      "Διαχείριση πολλαπλών παραγόντων",
      "Βασικές αρχές anti-surveillance awareness",
      "Σενάρια σε ημι-ρεαλιστικό περιβάλλον",
    ],
    learns: [
      "Να εντοπίζει patterns",
      "Να καταλαβαίνει πότε «κάτι δεν πάει καλά»",
      "Να αλλάζει πορεία πριν εκτεθεί",
      "Να σκέφτεται στρατηγικά",
    ],
    closing: "Το Level 3 είναι το σημείο που ξεχωρίζει το Urban Response από μια απλή σχολή αυτοάμυνας.\n\nΕδώ δουλεύουμε σκέψη. Όχι μόνο σώμα.",
  },
  {
    num: 4,
    title: "Complexity & Environmental Adaptation",
    duration: "3 μήνες",
    goal: "Να λειτουργείς σε σύνθετο περιβάλλον.",
    icon: Target,
    includes: [
      "Σενάρια με αντικείμενα, εμπόδια, θόρυβο",
      "Προστασία τρίτου προσώπου",
      "Αντιμετώπιση απρόβλεπτων μεταβλητών",
      "Διαχείριση κούρασης & γνωστικής κόπωσης",
      "Outdoor training modules",
    ],
    learns: [
      "Να προσαρμόζεται",
      "Να κινείται με στρατηγική",
      "Να αξιοποιεί το περιβάλλον",
      "Να διαχειρίζεται χάος",
    ],
    closing: "Το Level 4 δεν είναι «πιο βίαιο».\nΕίναι πιο σύνθετο.",
  },
  {
    num: 5,
    title: "Integration & Leadership Under Stress",
    duration: "10–12 εβδομάδες",
    goal: "Πλήρης ενοποίηση δεξιοτήτων υπό πίεση.",
    icon: Shield,
    includes: [
      "Σύνθετα σενάρια με πολλαπλές μεταβλητές",
      "Λήψη αποφάσεων σε φυσική και γνωστική κόπωση",
      "Διαχείριση απρόβλεπτων αντιδράσεων",
      "Προστασία τρίτου προσώπου",
      "Προχωρημένη διαχείριση απόστασης σε κοντινή εμπλοκή",
      "Άμεση διακοπή σύγκρουσης και ασφαλής απομάκρυνση",
    ],
    learns: [
      "Ψυχραιμία",
      "Τακτική σκέψη για πολίτες",
      "Στρατηγική κίνηση σε χαοτικό περιβάλλον",
      "Έλεγχο αντί για ένταση",
    ],
    closing: "Δεν σε κάνει μαχητή.\nΣε κάνει ικανό να επιστρέφεις ασφαλής.",
    isTop: true,
  },
];

const TrainingFramework = () => {
  return (
    <Layout>
      <HeroSection
        title="Το Εκπαιδευτικό Πλαίσιο"
        subtitle="Urban Response Training System"
        description="Πέντε επίπεδα δομημένης εκπαίδευσης — από την επίγνωση μέχρι την πλήρη ενοποίηση δεξιοτήτων υπό πίεση."
        backgroundImage={heroImage}
      />

      {/* Intro Section */}
      <Section background="darker" padding="large">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "20px", color: "#f5f5f5", lineHeight: 1.8, marginBottom: "16px", fontStyle: "italic" }}>
            Το Urban Response δεν είναι πολεμική τέχνη.
          </p>
          <p style={{ fontSize: "20px", color: "#f5f5f5", lineHeight: 1.8, marginBottom: "16px", fontStyle: "italic" }}>
            Δεν είναι άθλημα.
          </p>
          <p style={{ fontSize: "20px", color: "#f5f5f5", lineHeight: 1.8, marginBottom: "32px", fontStyle: "italic" }}>
            Δεν είναι σύστημα «μάχης».
          </p>
          <div style={{ width: "60px", height: "4px", backgroundColor: "#fe4e00", margin: "0 auto 32px" }} />
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.8, marginBottom: "24px" }}>
            Είναι ένα δομημένο πλαίσιο αστικής ασφάλειας και διαχείρισης κινδύνου για τον σύγχρονο πολίτη.
          </p>
          <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.8 }}>
            Η εκπαίδευση εξελίσσεται σε πέντε επίπεδα, με προοδευτική αύξηση δυσκολίας, πίεσης και ευθύνης. 
            Κάθε level διαρκεί περίπου 3 μήνες (12 εβδομάδες), με 2 προπονήσεις την εβδομάδα των 90 λεπτών.
          </p>
        </div>
      </Section>

      {/* Levels */}
      {levels.map((level, index) => {
        const Icon = level.icon;
        return (
          <Section
            key={level.num}
            background={index % 2 === 0 ? "dark" : "darker"}
            padding="large"
          >
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              {/* Level Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
                <span
                  style={{
                    fontSize: "64px",
                    fontWeight: 900,
                    color: "#fe4e00",
                    fontFamily: "'Noto Sans Display', sans-serif",
                    lineHeight: 1,
                    opacity: 0.9,
                  }}
                >
                  {level.num}
                </span>
                <div>
                  <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "3px", color: "#a3a3a3", marginBottom: "4px" }}>
                    Level {level.num}
                  </p>
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#f5f5f5",
                      fontFamily: "'Noto Sans Display', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      margin: 0,
                    }}
                  >
                    {level.title}
                  </h2>
                </div>
              </div>

              {/* Duration & Goal */}
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  marginBottom: "40px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "14px", color: "#fe4e00", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                  Διάρκεια: {level.duration}
                </span>
                <span style={{ fontSize: "14px", color: "#d4d4d4" }}>
                  Στόχος: {level.goal}
                </span>
              </div>

              {/* Two columns: Includes + Learns */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                  marginBottom: "40px",
                }}
                className="max-md:!grid-cols-1"
              >
                {/* Includes */}
                <div
                  style={{
                    backgroundColor: "#141414",
                    padding: "32px",
                    borderLeft: "4px solid #fe4e00",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: "#fe4e00",
                      marginBottom: "20px",
                      fontFamily: "'Noto Sans Display', sans-serif",
                    }}
                  >
                    Τι Περιλαμβάνει
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {level.includes.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          marginBottom: "12px",
                          fontSize: "15px",
                          color: "#d4d4d4",
                          lineHeight: 1.6,
                        }}
                      >
                        <ArrowRight size={14} style={{ color: "#fe4e00", marginTop: "5px", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learns */}
                <div
                  style={{
                    backgroundColor: "#141414",
                    padding: "32px",
                    borderLeft: "4px solid #333333",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: "#a3a3a3",
                      marginBottom: "20px",
                      fontFamily: "'Noto Sans Display', sans-serif",
                    }}
                  >
                    {level.isTop ? "Τι Καλλιεργεί" : "Τι Μαθαίνει ο Συμμετέχων"}
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {level.learns.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          marginBottom: "12px",
                          fontSize: "15px",
                          color: "#d4d4d4",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "#fe4e00" }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Closing Statement */}
              <div
                style={{
                  borderTop: "1px solid #333333",
                  paddingTop: "24px",
                }}
              >
                {level.closing.split("\n").map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "16px",
                      color: level.isTop ? "#fe4e00" : "#a3a3a3",
                      fontStyle: "italic",
                      lineHeight: 1.8,
                      margin: 0,
                      fontWeight: level.isTop ? 600 : 400,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* Difference Section */}
      <Section background="darker" padding="large" title="Πώς Διαφέρει;" subtitle="Urban Response vs Κλασική Σχολή">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="max-md:!grid-cols-1"
        >
          {/* Classic */}
          <div style={{ backgroundColor: "#141414", padding: "32px", borderLeft: "4px solid #333333" }}>
            <h3 style={{ fontSize: "16px", color: "#a3a3a3", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "'Noto Sans Display', sans-serif" }}>
              Σχολές Box / Kickbox
            </h3>
            {["Δουλεύουν τεχνική", "Δουλεύουν φυσική αντοχή", "Δουλεύουν αγωνιστική απόδοση"].map((item, i) => (
              <p key={i} style={{ fontSize: "15px", color: "#737373", marginBottom: "8px", lineHeight: 1.6 }}>
                — {item}
              </p>
            ))}
          </div>

          {/* Urban Response */}
          <div style={{ backgroundColor: "#141414", padding: "32px", borderLeft: "4px solid #fe4e00" }}>
            <h3 style={{ fontSize: "16px", color: "#fe4e00", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "'Noto Sans Display', sans-serif" }}>
              Urban Response
            </h3>
            {["Δουλεύει απόφαση", "Δουλεύει επίγνωση", "Δουλεύει συμπεριφορά", "Δουλεύει περιβάλλον", "Δουλεύει αποφυγή"].map((item, i) => (
              <p key={i} style={{ fontSize: "15px", color: "#d4d4d4", marginBottom: "8px", lineHeight: 1.6 }}>
                <ArrowRight size={14} style={{ color: "#fe4e00", display: "inline", marginRight: "8px" }} />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "48px", maxWidth: "700px", margin: "48px auto 0" }}>
          <p style={{ fontSize: "16px", color: "#a3a3a3", fontStyle: "italic", lineHeight: 1.8, marginBottom: "8px" }}>
            Η φυσική αντίδραση είναι μόνο ένα κομμάτι.
          </p>
          <p style={{ fontSize: "16px", color: "#a3a3a3", fontStyle: "italic", lineHeight: 1.8, marginBottom: "8px" }}>
            Δεν εκπαιδεύουμε για ρινγκ. Δεν εκπαιδεύουμε για επίδειξη.
          </p>
          <p style={{ fontSize: "18px", color: "#fe4e00", fontWeight: 600, lineHeight: 1.8 }}>
            Εκπαιδεύουμε για επιστροφή στο σπίτι με ασφάλεια.
          </p>
        </div>
      </Section>

      {/* Who is it for */}
      <Section background="dark" padding="large" title="Ποιον Αφορά;" subtitle="Για Κάθε Πολίτη">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
            {[
              "Πολίτες που θέλουν ρεαλιστική γνώση",
              "Άνδρες & γυναίκες που κινούνται καθημερινά σε αστικό περιβάλλον",
              "Γονείς",
              "Επαγγελματίες",
              "Άτομα που θέλουν πρόληψη, όχι επιθετικότητα",
            ].map((item, i) => (
              <p key={i} style={{ fontSize: "16px", color: "#d4d4d4", lineHeight: 1.8 }}>
                <Users size={14} style={{ color: "#fe4e00", display: "inline", marginRight: "10px" }} />
                {item}
              </p>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #333333", paddingTop: "32px" }}>
            <p style={{ fontSize: "15px", color: "#a3a3a3", marginBottom: "8px" }}>
              Δεν απαιτείται προηγούμενη εμπειρία.
            </p>
            <p style={{ fontSize: "15px", color: "#a3a3a3", marginBottom: "24px" }}>
              Δεν απαιτείται εξαιρετική φυσική κατάσταση.
            </p>
            <p style={{ fontSize: "18px", color: "#fe4e00", fontWeight: 600 }}>
              Απαιτείται διάθεση να μάθεις να σκέφτεσαι.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default TrainingFramework;
