import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Shield, Zap, Target, Move, CheckCircle, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/threat-scenario.jpg";

const PhysicalResponse = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Εκπαίδευση"
        title="Physical Response"
        description="Απλές, αποτελεσματικές τεχνικές φυσικής αντίδρασης για ρεαλιστικές αστικές καταστάσεις — όταν όλες οι άλλες επιλογές έχουν εξαντληθεί."
        backgroundImage={heroImage}
        height="60vh"
      />

      {/* Intro */}
      <Section background="darker">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
            Η φυσική αντίδραση είναι η <strong style={{ color: "#fe4e00" }}>τελευταία επιλογή</strong> στο πλαίσιο του Urban Response — και αυτό την κάνει ακόμα πιο σημαντική να εκπαιδεύσεις σωστά.
          </p>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.9 }}>
            Δεν πρόκειται για πολεμική τέχνη ή σύστημα μάχης. Πρόκειται για ελάχιστη, αποτελεσματική αντίδραση με στόχο μία και μόνο: να σταματήσεις την απειλή και να φύγεις με ασφάλεια.
          </p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section subtitle="Η Φιλοσοφία" title="Urban Krav Maga" background="dark">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ padding: "40px", backgroundColor: "#141414", borderRadius: "8px", borderLeft: "4px solid #fe4e00", marginBottom: "40px" }}>
            <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9 }}>
              Το φυσικό σκέλος του Urban Response βασίζεται στο <strong style={{ color: "#fe4e00" }}>Urban Krav Maga</strong> — μια προσαρμοσμένη έκδοση του Krav Maga για αστικές συνθήκες. Απλό, άμεσο, ρεαλιστικό.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: <Zap size={28} />, title: "Απλό", desc: "Λίγες τεχνικές που δουλεύουν κάτω από στρες, ακόμα και χωρίς χρόνια εξάσκησης." },
              { icon: <Target size={28} />, title: "Άμεσο", desc: "Στοχεύει στη διακοπή της επίθεσης και στη δημιουργία ευκαιρίας φυγής." },
              { icon: <Move size={28} />, title: "Ρεαλιστικό", desc: "Εκπαιδεύεται σε ρεαλιστικά σενάρια αστικού περιβάλλοντος, όχι σε γυμναστήριο τουρνουά." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "32px 24px", backgroundColor: "#141414", borderRadius: "4px", textAlign: "center" }}>
                <div style={{ color: "#fe4e00", marginBottom: "16px", display: "flex", justifyContent: "center" }}>{item.icon}</div>
                <h4 style={{ fontSize: "17px", color: "#f5f5f5", marginBottom: "10px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What we train */}
      <Section subtitle="Αντικείμενα Εκπαίδευσης" title="Τι Εκπαιδεύουμε" background="gradient">
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Αντίδραση σε Κοντινή Απόσταση", desc: "Χτυπήματα, clench και διακοπή εμπλοκής σε περιβάλλον κοντινής επαφής." },
              { title: "Ελευθέρωση από Κρατήσεις", desc: "Απελευθέρωση από κοινές κρατήσεις (λαιμός, χέρι, αγκάλιασμα) με ελάχιστες κινήσεις." },
              { title: "Αντίδραση σε Αιφνιδιασμό", desc: "Αντίδραση σε ξαφνικές επιθέσεις χωρίς προειδοποίηση, από διάφορες γωνίες." },
              { title: "Προστασία Τρίτων", desc: "Βασικές τεχνικές για προστασία συνοδού ή αδύναμου ατόμου σε απειλητική κατάσταση." },
              { title: "Αφαίρεση Αντικειμένου", desc: "Ασφαλής αντιμετώπιση επιθέσεων με αντικείμενο (μαχαίρι, ρόπαλο) με έμφαση στη φυγή." },
              { title: "Αντίδραση στο Έδαφος", desc: "Βασικές τεχνικές για επανόρθωση από πτώση και αποφυγή αδυναμίας στο έδαφος." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "22px", backgroundColor: "#141414", borderRadius: "4px" }}>
                <CheckCircle size={20} style={{ color: "#fe4e00", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h4 style={{ fontSize: "15px", color: "#f5f5f5", fontWeight: 600, marginBottom: "6px" }}>{item.title}</h4>
                  <p style={{ fontSize: "13px", color: "#a3a3a3", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who it's for */}
      <Section subtitle="Σε Ποιους Απευθύνεται" background="darker">
        <div style={{ maxWidth: "750px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "32px", textAlign: "center" }}>
            Η φυσική αντίδραση δεν απαιτεί αθλητική διάπλαση ή προηγούμενη εμπειρία σε πολεμικές τέχνες.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Άνδρες και γυναίκες κάθε ηλικίας και επιπέδου φυσικής κατάστασης",
              "Άτομα χωρίς προηγούμενη εμπειρία σε πολεμικές τέχνες",
              "Επαγγελματίες που εκτίθενται σε ρίσκο στο εργασιακό τους περιβάλλον",
              "Όποιος θέλει να νιώθει ασφαλής χωρίς να αναζητά σύγκρουση",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "18px 20px", backgroundColor: "#141414", borderRadius: "4px" }}>
                <CheckCircle size={18} style={{ color: "#22c55e", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontSize: "15px", color: "#d4d4d4", lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Important note */}
      <Section background="dark">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ padding: "40px", backgroundColor: "#1a0a0a", borderRadius: "8px", borderLeft: "4px solid #dc2626", marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <AlertTriangle size={24} style={{ color: "#dc2626" }} />
              <h4 style={{ fontSize: "18px", color: "#f5f5f5", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>Σημαντική Σημείωση</h4>
            </div>
            <p style={{ fontSize: "16px", color: "#d4d4d4", lineHeight: 1.9 }}>
              Η φυσική αντίδραση διδάσκεται πάντα στο πλαίσιο της συνολικής εκπαίδευσης Urban Response — μετά από situational awareness, decision making και de-escalation. Δεν είναι αυτοσκοπός. Είναι η τελευταία γραμμή άμυνας.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ padding: "60px 40px", backgroundColor: "#141414", borderRadius: "8px", borderTop: "4px solid #fe4e00" }}>
              <Shield size={36} style={{ color: "#fe4e00", margin: "0 auto 20px" }} />
              <h3 style={{ fontSize: "26px", color: "#f5f5f5", marginBottom: "16px", fontFamily: "'Noto Sans Display', sans-serif", textTransform: "uppercase" }}>
                Ξεκίνα την Εκπαίδευσή σου
              </h3>
              <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "32px" }}>
                Η φυσική αντίδραση διδάσκεται σε ρεαλιστικά σενάρια, με έμφαση στο αποτέλεσμα — να επιστρέψεις ασφαλής.
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
        </div>
      </Section>
    </Layout>
  );
};

export default PhysicalResponse;
