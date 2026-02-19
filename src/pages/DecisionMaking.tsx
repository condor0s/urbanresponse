import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Brain, Zap, Clock, AlertTriangle, CheckCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-threat.jpg";

const DecisionMaking = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Εκπαίδευση"
        title="Decision Making"
        description="Η ικανότητα να παίρνεις σωστές αποφάσεις σε δευτερόλεπτα, υπό πίεση και αβεβαιότητα — χωρίς να παγώνεις."
        backgroundImage={heroImage}
        height="60vh"
      />

      {/* Intro */}
      <Section background="darker">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
            Σε μια κρίσιμη κατάσταση, οι αποφάσεις δεν παίρνονται με ψυχραιμία σε ένα γραφείο — παίρνονται σε κλάσματα δευτερολέπτου, υπό φόβο, αδρεναλίνη και αβεβαιότητα.
          </p>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.9 }}>
            Το Urban Response εκπαιδεύει τον εκπαιδευόμενο να λαμβάνει <strong style={{ color: "#fe4e00" }}>γρήγορες, ρεαλιστικές και υπεύθυνες αποφάσεις</strong> — χωρίς παράλυση, χωρίς πανικό.
          </p>
        </div>
      </Section>

      {/* The OODA Loop */}
      <Section subtitle="Το Μοντέλο" title="OODA Loop" background="dark">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "40px", textAlign: "center" }}>
            Το OODA Loop (Boyd) είναι το βασικό μοντέλο λήψης αποφάσεων που χρησιμοποιείται στο Urban Response. Παρατηρώ → Κατανοώ → Αποφασίζω → Ενεργώ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { letter: "O", word: "Observe", title: "Παρατηρώ", desc: "Συλλέγω πληροφορίες από το περιβάλλον μου — τι βλέπω, τι ακούω, τι αισθάνομαι." },
              { letter: "O", word: "Orient", title: "Προσανατολίζομαι", desc: "Κατανοώ τι σημαίνουν αυτές οι πληροφορίες. Αξιολογώ βάσει εμπειρίας και εκπαίδευσης." },
              { letter: "D", word: "Decide", title: "Αποφασίζω", desc: "Επιλέγω ανάμεσα σε διαθέσιμες δράσεις: αποφυγή, de-escalation, φυγή, αντίδραση." },
              { letter: "A", word: "Act", title: "Ενεργώ", desc: "Εκτελώ την απόφαση με ταχύτητα και αποφασιστικότητα — χωρίς δισταγμό." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "28px",
                  backgroundColor: "#141414",
                  borderRadius: "4px",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#fe4e00",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: "'Noto Sans Display', sans-serif",
                  }}>
                    {item.letter}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "11px", color: "#fe4e00", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{item.word}</p>
                  <h4 style={{ fontSize: "17px", color: "#f5f5f5", marginBottom: "8px", fontFamily: "'Noto Sans Display', sans-serif" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stress & Freeze */}
      <Section subtitle="Το Πρόβλημα" title="Γιατί Παγώνουμε" background="gradient">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "36px", textAlign: "center" }}>
            Υπό απειλή, ο εγκέφαλος ενεργοποιεί την αντίδραση fight-flight-freeze. Χωρίς εκπαίδευση, η πιο συχνή αντίδραση είναι το freeze — ο εγκέφαλος κυριολεκτικά παγώνει.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
            {[
              "Η αδρεναλίνη επηρεάζει τη λεπτή κινητικότητα και τη σκέψη",
              "Ο εγκέφαλος αναζητά γνωστά μοτίβα — αν δεν υπάρχουν, παγώνει",
              "Η εκπαίδευση δημιουργεί αυτοματισμούς που λειτουργούν ακόμα και υπό στρες",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "18px 20px", backgroundColor: "#141414", borderRadius: "4px" }}>
                <AlertTriangle size={18} style={{ color: "#f97316", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontSize: "15px", color: "#d4d4d4", lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <Brain size={24} />, label: "Εκπαίδευση νοοτροπίας" },
              { icon: <Zap size={24} />, label: "Πρακτικά stress inoculation drills" },
              { icon: <Clock size={24} />, label: "Σενάρια υπό χρονική πίεση" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "20px", backgroundColor: "#1a1a1a", borderRadius: "4px" }}>
                <span style={{ color: "#fe4e00" }}>{item.icon}</span>
                <span style={{ fontSize: "14px", color: "#f5f5f5", fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Decision tree */}
      <Section subtitle="Η Ιεραρχία" title="Σειρά Προτεραιότητας Αποφάσεων" background="darker">
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {[
            { num: "01", color: "#22c55e", title: "Αποφυγή", desc: "Η καλύτερη λύση. Μην βρεθείς εκεί." },
            { num: "02", color: "#facc15", title: "De-escalation", desc: "Αν βρεθείς εκεί, λύσε το λεκτικά." },
            { num: "03", color: "#f97316", title: "Φυγή", desc: "Αν δεν λυθεί, φύγε γρήγορα." },
            { num: "04", color: "#dc2626", title: "Φυσική Αντίδραση", desc: "Μόνο αν δεν υπάρχει άλλη επιλογή." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px 24px", backgroundColor: "#141414", borderRadius: "4px", marginBottom: "10px", borderLeft: `4px solid ${item.color}` }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: item.color, fontFamily: "'Noto Sans Display', sans-serif", minWidth: "44px" }}>{item.num}</span>
              <div>
                <h4 style={{ fontSize: "17px", color: "#f5f5f5", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase", marginBottom: "4px" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", color: "#a3a3a3" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ padding: "60px 40px", backgroundColor: "#141414", borderRadius: "8px", borderTop: "4px solid #fe4e00" }}>
            <Brain size={36} style={{ color: "#fe4e00", margin: "0 auto 20px" }} />
            <h3 style={{ fontSize: "26px", color: "#f5f5f5", marginBottom: "16px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
              Εκπαίδευσε τον Εγκέφαλό σου
            </h3>
            <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "32px" }}>
              Το Decision Making εκπαιδεύεται — δεν είναι έμφυτο. Μάθε να σκέφτεσαι γρήγορα και να δρας αποφασιστικά.
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

export default DecisionMaking;
