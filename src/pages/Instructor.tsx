import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Award, Globe, Shield, BookOpen } from "lucide-react";

import urbanImage from "@/assets/urban-silhouette.jpg";
import instructorImage from "@/assets/instructor-stavros.jpg";

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

      {/* Bio */}
      <Section background="darker">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] items-start">
            {/* Main Content */}
            <div className="md:col-span-2">
              <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
                Ο Σταύρος Μπαρούτας είναι εκπαιδευτής αστικής ασφάλειας και προσωπικής προστασίας με πολυετή εμπειρία στη φυσική αυτοπροστασία και στη διαχείριση καταστάσεων κινδύνου στο αστικό περιβάλλον.
              </p>
              <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "24px" }}>
                Η προσέγγισή του βασίζεται στην πρόληψη, την επίγνωση του περιβάλλοντος και τη σωστή λήψη αποφάσεων πριν τη σύγκρουση, δίνοντας έμφαση στην αποφυγή, την ασφαλή απομάκρυνση και τη διαχείριση πίεσης όταν η εμπλοκή δεν μπορεί να αποφευχθεί.
              </p>
              <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "24px" }}>
                Έχει ολοκληρώσει διεθνή προγράμματα εκπαίδευσης στον τομέα της προσωπικής ασφάλειας, του situational awareness και της αντιμετώπισης καταστάσεων αυξημένου κινδύνου (hostile environments), τόσο δια ζώσης όσο και διαδικτυακά.
              </p>
              <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9 }}>
                Επιπλέον, έχει λάβει εξειδικευμένη online εκπαίδευση σε θέματα counter-surveillance και anti-surveillance awareness, με έμφαση στην αναγνώριση συμπεριφορικών μοτίβων, την έγκαιρη ανίχνευση κινδύνου και τη λήψη αποφάσεων πρόληψης σε αστικό πλαίσιο.
              </p>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Instructor Photo */}
              <div 
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "4px solid #fe4e00",
                }}
              >
                <img 
                  src={instructorImage} 
                  alt="Σταύρος Μπαρούτας - Εκπαιδευτής" 
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              
              {/* Expertise Box */}
              <div 
                style={{
                  padding: "30px",
                  backgroundColor: "#141414",
                  borderRadius: "4px",
                  borderTop: "4px solid #fe4e00",
                }}
              >
                <h4 style={{ fontSize: "16px", color: "#f5f5f5", marginBottom: "20px", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase" }}>
                  Εξειδίκευση
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { icon: <Shield size={20} />, text: "Αστική Αυτοπροστασία" },
                    { icon: <Globe size={20} />, text: "Hostile Environment Awareness" },
                    { icon: <Award size={20} />, text: "Counter-Surveillance" },
                    { icon: <BookOpen size={20} />, text: "Situational Awareness" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ color: "#fe4e00" }}>{item.icon}</span>
                      <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Quote */}
      <Section background="dark">
        <div 
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "50px",
            backgroundColor: "#141414",
            borderRadius: "8px",
            borderLeft: "4px solid #fe4e00",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "20px", color: "#d4d4d4", lineHeight: 1.8, fontStyle: "italic", marginBottom: "20px" }}>
            "Μέσα από το Urban Response, μεταφέρει αυτή τη γνώση σε πολίτες που θέλουν να κινούνται στην πόλη με επίγνωση, ψυχραιμία και αυτοπεποίθηση, χωρίς υπερβολές και χωρίς ψευδαισθήσεις ασφάλειας."
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
          <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "24px" }}>
            Η προσέγγιση του Urban Response δεν εστιάζει στη μάχη ή στις πολεμικές τέχνες, αλλά στην πρόληψη, την επίγνωση του περιβάλλοντος, τη λήψη αποφάσεων υπό πίεση και την υπεύθυνη αντιμετώπιση επικίνδυνων καταστάσεων στην καθημερινή ζωή.
          </p>
          
          <div 
            style={{
              marginTop: "40px",
              padding: "30px",
              backgroundColor: "#1a1a1a",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "16px", color: "#fe4e00", fontWeight: 600, marginBottom: "12px" }}>
              Στόχος
            </p>
            <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.8 }}>
              Η παροχή ποιότητας, ασφάλειας και υπευθυνότητας στην εκπαίδευση, με έμφαση σε δεξιότητες που είναι χρήσιμες και εφαρμόσιμες στην πραγματική ζωή, ανεξαρτήτως ηλικίας ή φυσικής κατάστασης των συμμετεχόντων.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Instructor;
