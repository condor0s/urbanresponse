import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Award, Globe, Shield, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import urbanImage from "@/assets/urban-silhouette.jpg";
import instructorImage from "@/assets/instructor-stavros-new.jpg";

const expertiseItems = [
  { icon: <Shield size={18} />, text: "Αστική Αυτοπροστασία" },
  { icon: <Globe size={18} />, text: "Hostile Environment Awareness" },
  { icon: <Award size={18} />, text: "Counter-Surveillance" },
  { icon: <BookOpen size={18} />, text: "Situational Awareness" },
];

const Instructor = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        subtitle="Ο Εκπαιδευτής"
        title="Σταύρος Μπαρούτας"
        description="Εκπαιδευτής αστικής ασφάλειας και προσωπικής προστασίας με πολυετή εμπειρία στη φυσική αυτοπροστασία και στη διαχείριση καταστάσεων κινδύνου."
        backgroundImage={urbanImage}
        height="60vh"
      />

      {/* Bio — full-bleed photo left, text right */}
      <section style={{ background: "#050505" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>

            {/* Photo Column */}
            <div style={{ position: "relative", overflow: "hidden", minHeight: "480px" }}>
              <img
                src={instructorImage}
                alt="Σταύρος Μπαρούτας - Εκπαιδευτής Urban Response"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              {/* subtle gradient to blend into dark bg on right edge */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, transparent 60%, #050505 100%)",
                pointerEvents: "none",
              }} />
              {/* bottom gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, #050505 0%, transparent 30%)",
                pointerEvents: "none",
              }} />

              {/* Orange accent bar */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "5px",
                height: "100%",
                backgroundColor: "#fe4e00",
              }} />
            </div>

            {/* Text Column */}
            <div style={{
              padding: "80px 60px 80px 50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
              <p style={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "3px",
                color: "#fe4e00",
                marginBottom: "16px",
              }}>
                Βιογραφικό
              </p>

              <h2 style={{
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 700,
                color: "#f5f5f5",
                fontFamily: "'Noto Sans Display', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                lineHeight: 1.15,
                marginBottom: "32px",
              }}>
                Σταύρος<br />Μπαρούτας
              </h2>

              <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "20px" }}>
                Εκπαιδευτής αστικής ασφάλειας και προσωπικής προστασίας με πολυετή εμπειρία στη φυσική αυτοπροστασία και στη διαχείριση καταστάσεων κινδύνου στο αστικό περιβάλλον.
              </p>
              <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "20px" }}>
                Η προσέγγισή του βασίζεται στην πρόληψη, την επίγνωση του περιβάλλοντος και τη σωστή λήψη αποφάσεων πριν τη σύγκρουση, δίνοντας έμφαση στην αποφυγή, την ασφαλή απομάκρυνση και τη διαχείριση πίεσης όταν η εμπλοκή δεν μπορεί να αποφευχθεί.
              </p>
              <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "40px" }}>
                Έχει ολοκληρώσει διεθνή προγράμματα εκπαίδευσης στον τομέα της προσωπικής ασφάλειας, του situational awareness, της αντιμετώπισης καταστάσεων αυξημένου κινδύνου (hostile environments) καθώς και εξειδικευμένη εκπαίδευση σε counter-surveillance και anti-surveillance awareness.
              </p>

              {/* Expertise chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {expertiseItems.map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    backgroundColor: "#141414",
                    border: "1px solid #2a2a2a",
                    borderRadius: "4px",
                  }}>
                    <span style={{ color: "#fe4e00" }}>{item.icon}</span>
                    <span style={{ fontSize: "13px", color: "#d4d4d4", fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <Section background="dark">
        <div style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "60px",
          backgroundColor: "#0e0e0e",
          borderRadius: "4px",
          borderLeft: "4px solid #fe4e00",
          position: "relative",
        }}>
          <span style={{
            position: "absolute",
            top: "30px",
            left: "40px",
            fontSize: "80px",
            color: "#fe4e00",
            opacity: 0.15,
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}>"</span>
          <p style={{ fontSize: "20px", color: "#d4d4d4", lineHeight: 1.85, fontStyle: "italic", position: "relative", zIndex: 1 }}>
            Μέσα από το Urban Response, μεταφέρει αυτή τη γνώση σε πολίτες που θέλουν να κινούνται στην πόλη με επίγνωση, ψυχραιμία και αυτοπεποίθηση, χωρίς υπερβολές και χωρίς ψευδαισθήσεις ασφάλειας.
          </p>
        </div>
      </Section>

      {/* Professional Profile */}
      <Section subtitle="Επαγγελματικό Προφίλ" title="Urban Response" background="gradient">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
            Το σύστημα Urban Response έχει αναπτυχθεί μέσα από πολυετή εμπειρία στη διδασκαλία αυτοπροστασίας και εκπαίδευσης σε αστικά περιβάλλοντα.
          </p>
          <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "24px" }}>
            Η μεθοδολογία του βασίζεται σε πρακτική, instructor-level εμπειρία σε συστήματα αυτοπροστασίας για πολίτες, σε συνδυασμό με διεθνή προγράμματα εκπαίδευσης για Hostile Environment Awareness και συνεχή επαγγελματική ανάπτυξη στη διαχείριση κινδύνου και την ασφάλεια σε αστικό περιβάλλον.
          </p>
          <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "40px" }}>
            Η προσέγγιση του Urban Response δεν εστιάζει στη μάχη ή στις πολεμικές τέχνες, αλλά στην πρόληψη, την επίγνωση του περιβάλλοντος, τη λήψη αποφάσεων υπό πίεση και την υπεύθυνη αντιμετώπιση επικίνδυνων καταστάσεων στην καθημερινή ζωή.
          </p>

          <div style={{
            padding: "36px",
            backgroundColor: "#141414",
            borderRadius: "4px",
            borderTop: "3px solid #fe4e00",
            textAlign: "center",
            marginBottom: "40px",
          }}>
            <p style={{ fontSize: "13px", color: "#fe4e00", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>
              Στόχος
            </p>
            <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.85 }}>
              Η παροχή ποιότητας, ασφάλειας και υπευθυνότητας στην εκπαίδευση, με έμφαση σε δεξιότητες που είναι χρήσιμες και εφαρμόσιμες στην πραγματική ζωή, ανεξαρτήτως ηλικίας ή φυσικής κατάστασης των συμμετεχόντων.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 36px",
                backgroundColor: "#fe4e00",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              Επικοινωνήστε μαζί μας <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Instructor;
