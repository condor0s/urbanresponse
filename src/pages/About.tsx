import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { CheckCircle, Target, Users, BookOpen } from "lucide-react";

import umbrellaImage from "@/assets/umbrella-dark.jpg";
import awarenessImage from "@/assets/awareness-woman.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroSection
        subtitle="Σχετικά"
        title="About Urban Response"
        description="Σύγχρονο πλαίσιο αστικής ασφάλειας και προσωπικής προστασίας, σχεδιασμένο για ανθρώπους που ζουν, εργάζονται και κινούνται στην πόλη."
        backgroundImage={umbrellaImage}
        height="60vh"
      />

      {/* Main Content */}
      <Section background="darker">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
            Το Urban Response είναι ένα σύγχρονο πλαίσιο αστικής ασφάλειας και προσωπικής προστασίας, σχεδιασμένο για ανθρώπους που ζουν, εργάζονται και κινούνται στην πόλη.
          </p>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.9 }}>
            Δεν πρόκειται για πολεμική τέχνη ούτε για σύστημα μάχης, αλλά για μια ολοκληρωμένη προσέγγιση που δίνει έμφαση στην <strong style={{ color: "#fe4e00" }}>πρόληψη</strong>, την <strong style={{ color: "#fe4e00" }}>επίγνωση του περιβάλλοντος</strong> και τη <strong style={{ color: "#fe4e00" }}>σωστή λήψη αποφάσεων</strong> πριν η κατάσταση οδηγηθεί σε εμπλοκή.
          </p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section subtitle="Η φιλοσοφία μας" background="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          <div>
            <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "24px" }}>
              Η φιλοσοφία του Urban Response βασίζεται στην παραδοχή ότι η ασφάλεια στην πόλη δεν ξεκινά από τη φυσική σύγκρουση, αλλά από την ικανότητα να αντιλαμβάνεσαι έγκαιρα τον κίνδυνο και να αποφεύγεις καταστάσεις που μπορούν να κλιμακωθούν.
            </p>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9, marginBottom: "24px" }}>
              Η εκπαίδευση επικεντρώνεται στη νοοτροπία, την παρατήρηση, την κατανόηση του περιβάλλοντος και τη λήψη ψύχραιμων αποφάσεων υπό πίεση.
            </p>
            <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9 }}>
              Όταν η αποφυγή δεν είναι πλέον εφικτή, το Urban Response προετοιμάζει τον εκπαιδευόμενο να αντιδράσει με ασφάλεια και υπευθυνότητα, με στόχο τη διακοπή της εμπλοκής και την άμεση διαφυγή.
            </p>
          </div>
          <div>
            <img 
              src={awarenessImage} 
              alt="Φιλοσοφία Urban Response" 
              style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "4px" }}
            />
          </div>
        </div>
      </Section>

      {/* How We Train */}
      <Section subtitle="Πώς εκπαιδεύουμε" background="gradient">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "40px" }}>
            Η εκπαίδευση στο Urban Response είναι ρεαλιστική, δομημένη και προσαρμοσμένη στις απαιτήσεις της καθημερινής ζωής. Περιλαμβάνει θεωρία, πρακτικά drills και σενάρια που προσομοιώνουν πραγματικές αστικές συνθήκες, χωρίς υπερβολές και χωρίς επιθετική προσέγγιση.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen size={32} />, title: "Θεωρία", desc: "Κατανόηση αρχών και στρατηγικών" },
              { icon: <Target size={32} />, title: "Drills", desc: "Πρακτική εξάσκηση σε ελεγχόμενο περιβάλλον" },
              { icon: <Users size={32} />, title: "Σενάρια", desc: "Προσομοίωση πραγματικών καταστάσεων" },
            ].map((item, i) => (
              <div 
                key={i}
                style={{
                  padding: "40px 24px",
                  backgroundColor: "#141414",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                <div style={{ color: "#fe4e00", marginBottom: "20px" }}>{item.icon}</div>
                <h4 style={{ fontSize: "18px", color: "#f5f5f5", marginBottom: "12px", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase" }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: "14px", color: "#a3a3a3" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.8, marginTop: "40px" }}>
            Η φυσική αυτοπροστασία αποτελεί μέρος της συνολικής μεθοδολογίας και διδάσκεται μέσω του εκπαιδευτικού σκέλους <strong style={{ color: "#fe4e00" }}>Urban Krav Maga</strong>, με έμφαση στην αντίδραση σε κοντινή απόσταση, τη διακοπή της εμπλοκής και την ασφαλή απομάκρυνση από τον κίνδυνο.
          </p>
        </div>
      </Section>

      {/* Who It's For */}
      <Section subtitle="Σε ποιους" title="Απευθυνόμαστε" background="darker">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "32px", textAlign: "center" }}>
            Το Urban Response απευθύνεται σε ανθρώπους που θέλουν να νιώθουν ασφαλείς στην καθημερινότητά τους, χωρίς να αναζητούν σύγκρουση ή εντυπωσιασμό.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            {[
              "Άνδρες και γυναίκες κάθε ηλικίας και φυσικής κατάστασης",
              "Επαγγελματίες που κινούνται συχνά σε αστικό περιβάλλον",
              "Η εκπαίδευση προσαρμόζεται στο επίπεδο και τις ανάγκες του κάθε συμμετέχοντα",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "20px", backgroundColor: "#141414", borderRadius: "4px" }}>
                <CheckCircle size={22} style={{ color: "#fe4e00", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "16px", color: "#d4d4d4" }}>{item}</span>
              </div>
            ))}
          </div>
          
          <p style={{ fontSize: "16px", color: "#a3a3a3", textAlign: "center", fontStyle: "italic" }}>
            Βασικός στόχος: η ανάπτυξη αυτοπεποίθησης, ελέγχου και υπευθυνότητας.
          </p>
        </div>
      </Section>

      {/* Our Approach */}
      <Section background="dark">
        <div 
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px",
            backgroundColor: "#141414",
            borderRadius: "8px",
            borderLeft: "4px solid #fe4e00",
          }}
        >
          <h3 style={{ fontSize: "28px", color: "#f5f5f5", marginBottom: "24px", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase" }}>
            Η προσέγγισή μας
          </h3>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.9, marginBottom: "20px" }}>
            Στο Urban Response δεν μετράμε την επιτυχία με τεχνικές ή βαθμούς, αλλά με την ικανότητα του εκπαιδευόμενου να <strong style={{ color: "#fe4e00" }}>επιστρέφει με ασφάλεια στο σπίτι του</strong>.
          </p>
          <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.9 }}>
            Η εκπαίδευση δίνει προτεραιότητα στη σκέψη, την πρόληψη και τη σωστή αντίδραση, ώστε η φυσική εμπλοκή να παραμένει η τελευταία επιλογή.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
