import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { MessageSquare, Volume2, AlertTriangle, CheckCircle, Shield, User } from "lucide-react";
import heroImage from "@/assets/hero-urban-night.jpg";

const Deescalation = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Εκπαίδευση"
        title="De-escalation"
        description="Η τέχνη να αποτρέπεις τη σύγκρουση πριν αρχίσει — με λόγια, στάση σώματος και ψυχραιμία."
        backgroundImage={heroImage}
        height="60vh"
      />

      {/* Intro */}
      <Section background="darker">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
            Το de-escalation είναι η πιο σημαντική — και πιο υποτιμημένη — δεξιότητα στην αστική ασφάλεια. Η ικανότητα να μειώνεις την ένταση μιας κατάστασης προτού εξελιχθεί σε βία είναι αυτό που πραγματικά διαφοροποιεί τον εκπαιδευμένο από τον αδύναμο.
          </p>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.9 }}>
            Στο Urban Response, το de-escalation δεν είναι ευγένεια — είναι <strong style={{ color: "#fe4e00" }}>τακτική αντίδραση</strong> που επιλέγεις συνειδητά για να κερδίσεις χρόνο και να αποφύγεις τη σύγκρουση.
          </p>
        </div>
      </Section>

      {/* Why it matters */}
      <Section subtitle="Γιατί Είναι Κρίσιμο" background="dark">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={28} />, title: "Αποτρέπει Τραυματισμούς", desc: "Κάθε φυσική σύγκρουση, ακόμα και «νικημένη», έχει κόστος. Το de-escalation αποτρέπει τον κίνδυνο τελείως." },
              { icon: <User size={28} />, title: "Δείχνει Δύναμη", desc: "Ο έλεγχος της κατάστασης χωρίς χτύπημα απαιτεί περισσότερη αυτοκυριαρχία και εκπαίδευση από τη φυσική αντίδραση." },
              { icon: <MessageSquare size={28} />, title: "Νομική Προστασία", desc: "Η επίδειξη προσπάθειας αποφυγής σύγκρουσης έχει σημαντικές νομικές συνέπειες υπέρ σου." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "36px 24px", backgroundColor: "#141414", borderRadius: "4px", textAlign: "center" }}>
                <div style={{ color: "#fe4e00", marginBottom: "20px", display: "flex", justifyContent: "center" }}>{item.icon}</div>
                <h4 style={{ fontSize: "17px", color: "#f5f5f5", marginBottom: "12px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Core techniques */}
      <Section subtitle="Βασικές Αρχές" title="Τι Εκπαιδεύουμε" background="gradient">
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          {[
            {
              num: "01",
              title: "Φωνητικός Έλεγχος",
              desc: "Τόνος φωνής, ρυθμός ομιλίας, επιλογή λέξεων. Ο τρόπος που μιλάς έχει μεγαλύτερη επίδραση από αυτά που λες.",
            },
            {
              num: "02",
              title: "Γλώσσα Σώματος",
              desc: "Στάση σώματος, απόσταση, οπτική επαφή. Μη λεκτικά σήματα που δείχνουν αυτοπεποίθηση χωρίς επιθετικότητα.",
            },
            {
              num: "03",
              title: "Ενεργητική Ακρόαση",
              desc: "Αφήνεις τον άλλον να εκφραστεί χωρίς να τον κλιμακώνεις. Αναγνωρίζεις τη φόρτιση του χωρίς να επιβεβαιώνεις την επίθεση.",
            },
            {
              num: "04",
              title: "Δημιουργία Εξόδου",
              desc: "Του δίνεις έναν τρόπο να υποχωρήσει χωρίς να χάσει «το πρόσωπό του». Μειώνεις την ανάγκη του να επιδείξει δύναμη.",
            },
            {
              num: "05",
              title: "Αξιολόγηση Συνεχής",
              desc: "Παράλληλα με τη λεκτική διαχείριση, παρατηρείς συνεχώς αν η κατάσταση επιδεινώνεται — και είσαι έτοιμος να δράσεις.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "24px",
                padding: "24px 28px",
                backgroundColor: "#141414",
                borderRadius: "4px",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#fe4e00", fontFamily: "'Noto Sans Display', sans-serif", minWidth: "36px" }}>{item.num}</span>
              <div>
                <h4 style={{ fontSize: "17px", color: "#f5f5f5", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase", marginBottom: "8px" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Myths */}
      <Section subtitle="Παρεξηγήσεις" title="Τι ΔΕΝ Είναι De-escalation" background="darker">
        <div style={{ maxWidth: "750px", margin: "0 auto" }}>
          {[
            { wrong: "Δεν είναι παθητικότητα ή φόβος", right: "Είναι συνειδητή επιλογή ισχύος" },
            { wrong: "Δεν είναι ικετεία", right: "Είναι έλεγχος ρυθμού και κατεύθυνσης" },
            { wrong: "Δεν λειτουργεί με όλους εξ ίσου", right: "Αλλά εκπαιδεύεσαι να αναγνωρίζεις πότε να σταματάς" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                marginBottom: "12px",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "20px", backgroundColor: "#1a0a0a", borderLeft: "3px solid #dc2626", display: "flex", alignItems: "center", gap: "12px" }}>
                <AlertTriangle size={16} style={{ color: "#dc2626", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{item.wrong}</span>
              </div>
              <div style={{ padding: "20px", backgroundColor: "#0a1a0a", borderLeft: "3px solid #22c55e", display: "flex", alignItems: "center", gap: "12px" }}>
                <CheckCircle size={16} style={{ color: "#22c55e", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "#d4d4d4" }}>{item.right}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ padding: "60px 40px", backgroundColor: "#141414", borderRadius: "8px", borderTop: "4px solid #fe4e00" }}>
            <Volume2 size={36} style={{ color: "#fe4e00", margin: "0 auto 20px" }} />
            <h3 style={{ fontSize: "26px", color: "#f5f5f5", marginBottom: "16px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
              Μάθε να Αποτρέπεις
            </h3>
            <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "32px" }}>
              Το de-escalation εκπαιδεύεται μέσα από role-play σενάρια και πρακτικά drills. Είναι δεξιότητα — όχι χαρακτήρας.
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

export default Deescalation;
