import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Link } from "react-router-dom";
import {
  Eye,
  ShieldAlert,
  Target,
  Compass,
  Crown,
  GraduationCap,
  Users,
  Briefcase,
  Building2,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroBg from "@/assets/hero-training-tracks.jpg";

interface Track {
  title: string;
  icon: JSX.Element;
  intro: string;
  audience: string[];
  topics: string[];
  closing: string;
}

const tracks: Track[] = [
  {
    title: "School Safety & Education Track",
    icon: <GraduationCap size={32} />,
    intro:
      "Η εκπαιδευτική διαδρομή School Safety & Education Track έχει σχεδιαστεί για ανθρώπους και οργανισμούς που δραστηριοποιούνται στον χώρο της εκπαίδευσης.",
    audience: [
      "Εκπαιδευτικούς",
      "Καθηγητές",
      "Προσωπικό σχολείων",
      "Φροντιστήρια",
      "Εκπαιδευτικούς οργανισμούς",
    ],
    topics: [
      "Αναγνώριση ανησυχητικών συμπεριφορών",
      "Διαχείριση συγκρούσεων μεταξύ μαθητών",
      "Λεκτική αποκλιμάκωση",
      "Βασικές αρχές ασφάλειας σε σχολικό περιβάλλον",
      "Διαχείριση κρίσιμων περιστατικών",
      "Λήψη αποφάσεων υπό πίεση",
    ],
    closing:
      "Στόχος του προγράμματος είναι η δημιουργία ασφαλέστερων εκπαιδευτικών περιβαλλόντων μέσα από την πρόληψη, την επίγνωση και την αποτελεσματική αντίδραση.",
  },
  {
    title: "Family Protection Track",
    icon: <Users size={32} />,
    intro:
      "Το Family Protection Track επικεντρώνεται στην καθημερινή ασφάλεια της οικογένειας και στην προστασία των εξαρτώμενων μελών σε δημόσιους χώρους και συνθήκες πίεσης.",
    audience: ["Γονείς", "Κηδεμόνες", "Οικογένειες"],
    topics: [
      "Προστασία παιδιών σε δημόσιους χώρους",
      "Κίνηση και διαχείριση οικογένειας σε συνθήκες πίεσης",
      "Αναγνώριση πιθανών κινδύνων",
      "Διαχείριση επειγόντων περιστατικών",
      "Προτεραιοποίηση ενεργειών σε καταστάσεις κρίσης",
    ],
    closing:
      "Το πρόγραμμα επικεντρώνεται στην προστασία των εξαρτώμενων μελών της οικογένειας και στην ανάπτυξη ασφαλών συνηθειών στην καθημερινότητα.",
  },
  {
    title: "Corporate Safety Track",
    icon: <Briefcase size={32} />,
    intro:
      "Το Corporate Safety Track απευθύνεται σε επαγγελματικά περιβάλλοντα όπου η διαχείριση έντασης, δύσκολων συμπεριφορών και κρίσιμων περιστατικών αποτελεί σημαντικό μέρος της καθημερινότητας.",
    audience: [
      "Επιχειρήσεις",
      "Στελέχη",
      "Προσωπικό υποδοχής",
      "Τμήματα εξυπηρέτησης πελατών",
      "Επαγγελματικούς οργανισμούς",
    ],
    topics: [
      "Διαχείριση δύσκολων ή επιθετικών συμπεριφορών",
      "Workplace Conflict Management",
      "Verbal De-escalation",
      "Personal Safety Awareness",
      "Incident Response",
      "Decision Making Under Pressure",
    ],
    closing:
      "Το πρόγραμμα βοηθά τους εργαζόμενους να διαχειρίζονται αποτελεσματικά καταστάσεις έντασης, να βελτιώνουν την επαγγελματική τους συμπεριφορά και να λειτουργούν με ασφάλεια στον χώρο εργασίας.",
  },
  {
    title: "Community Safety Track",
    icon: <Building2 size={32} />,
    intro:
      "Το Community Safety Track έχει σχεδιαστεί για φορείς, οργανισμούς και κοινότητες που θέλουν να ενισχύσουν την ετοιμότητα, την πρόληψη και την ασφάλεια των πολιτών.",
    audience: [
      "Δήμους",
      "Κοινότητες",
      "Συλλόγους",
      "Κοινωνικούς φορείς",
      "Μη κερδοσκοπικούς οργανισμούς",
    ],
    topics: [
      "Awareness & Prevention",
      "Αναγνώριση κινδύνων στην κοινότητα",
      "Προσωπική ασφάλεια",
      "Διαχείριση περιστατικών",
      "Βασικές αρχές ετοιμότητας και αντίδρασης",
    ],
    closing:
      "Το πρόγραμμα στοχεύει στην ενίσχυση της ασφάλειας των πολιτών και στην ανάπτυξη μιας πιο ενημερωμένης και προετοιμασμένης κοινότητας.",
  },
  {
    title: "Women's Personal Safety Track",
    icon: <Shield size={32} />,
    intro:
      "Το Women's Personal Safety Track εστιάζει στην πρόληψη, στην αναγνώριση κινδύνου και στη λήψη σωστών αποφάσεων πριν μια κατάσταση εξελιχθεί σε πραγματική απειλή.",
    audience: ["Γυναίκες", "Φοιτήτριες", "Επαγγελματίες", "Ταξιδιώτισσες"],
    topics: [
      "Situational Awareness",
      "Boundary Setting",
      "Risk Recognition",
      "Escape Decision-Making",
      "Personal Safety Strategies",
      "Practical Response Options",
    ],
    closing:
      "Το πρόγραμμα δίνει έμφαση στην επίγνωση, στην πρόληψη, στη διαχείριση ορίων και στην ικανότητα γρήγορης αξιολόγησης μιας κατάστασης, με στόχο την αποφυγή περιττών κινδύνων και την ασφαλέστερη αντίδραση όταν οι συνθήκες το απαιτούν.",
  },
];

const coreModules = [
  { label: "Situational Awareness", icon: <Eye size={22} /> },
  { label: "Prevention & Avoidance", icon: <ShieldAlert size={22} /> },
  { label: "Threat Assessment", icon: <Target size={22} /> },
  { label: "Urban Control", icon: <Compass size={22} /> },
  { label: "Leadership Under Pressure", icon: <Crown size={22} /> },
];

const approachPillars = ["Awareness", "Prevention", "Decision", "Response"];

const TrackCard = ({ track }: { track: Track }) => (
  <article
    className="flex flex-col h-full"
    style={{
      backgroundColor: "#141414",
      borderRadius: "4px",
      borderTop: "4px solid #fe4e00",
      padding: "40px 32px",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div
      className="flex items-center justify-center"
      style={{
        width: "64px",
        height: "64px",
        backgroundColor: "#1f1f1f",
        borderRadius: "50%",
        color: "#fe4e00",
        marginBottom: "24px",
      }}
    >
      {track.icon}
    </div>

    <h3
      style={{
        fontSize: "22px",
        fontWeight: 700,
        color: "#f5f5f5",
        marginBottom: "16px",
        fontFamily: "'Roboto Condensed', sans-serif",
        textTransform: "uppercase",
        letterSpacing: "1px",
        lineHeight: 1.2,
      }}
    >
      {track.title}
    </h3>

    <p style={{ fontSize: "15px", color: "#a3a3a3", lineHeight: 1.7, marginBottom: "24px" }}>
      {track.intro}
    </p>

    <div style={{ marginBottom: "20px" }}>
      <h4
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#fe4e00",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "12px",
        }}
      >
        Απευθύνεται σε:
      </h4>
      <ul className="flex flex-wrap gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {track.audience.map((a) => (
          <li
            key={a}
            style={{
              fontSize: "13px",
              color: "#d4d4d4",
              backgroundColor: "#1f1f1f",
              padding: "6px 12px",
              borderRadius: "2px",
              border: "1px solid #333333",
            }}
          >
            {a}
          </li>
        ))}
      </ul>
    </div>

    <div style={{ marginBottom: "24px" }}>
      <h4
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#fe4e00",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "12px",
        }}
      >
        Αντικείμενα εκπαίδευσης:
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
        {track.topics.map((t) => (
          <li
            key={t}
            className="flex items-start gap-2"
            style={{ fontSize: "14px", color: "#d4d4d4", lineHeight: 1.6 }}
          >
            <CheckCircle2 size={16} style={{ color: "#fe4e00", flexShrink: 0, marginTop: "3px" }} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>

    <p
      className="mt-auto"
      style={{
        fontSize: "14px",
        color: "#a3a3a3",
        lineHeight: 1.7,
        fontStyle: "italic",
        borderTop: "1px solid #1f1f1f",
        paddingTop: "20px",
      }}
    >
      {track.closing}
    </p>
  </article>
);

const TrainingTracks = () => {
  return (
    <Layout>
      <HeroSection
        title="Εξειδικευμένες Εκπαιδευτικές Διαδρομές"
        subtitle="Urban Response® System"
        description="Το Urban Response® δεν αποτελεί απλώς ένα πρόγραμμα προσωπικής ασφάλειας. Είναι ένα ολοκληρωμένο σύστημα εκπαίδευσης που μπορεί να προσαρμοστεί στις ιδιαίτερες ανάγκες διαφορετικών ομάδων, επαγγελματικών χώρων και κοινωνικών περιβαλλόντων."
        backgroundImage={heroBg}
        height="70vh"
      />

      {/* Intro */}
      <Section background="dark" padding="medium">
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.8 }}>
            Πέρα από το βασικό πρόγραμμα εκπαίδευσης, το Urban Response® προσφέρει
            εξειδικευμένες εκπαιδευτικές διαδρομές, σχεδιασμένες για συγκεκριμένες
            ανάγκες και πραγματικές προκλήσεις της καθημερινότητας.
          </p>
        </div>
      </Section>

      {/* Core Program */}
      <Section background="gradient" padding="large" subtitle="Foundation" title="Urban Response® Core Program">
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            backgroundColor: "#141414",
            borderLeft: "4px solid #fe4e00",
            padding: "48px 40px",
            borderRadius: "4px",
          }}
        >
          <p style={{ fontSize: "16px", color: "#d4d4d4", lineHeight: 1.8, marginBottom: "32px" }}>
            Το βασικό πρόγραμμα του Urban Response® αποτελεί τη θεμελιώδη εκπαίδευση
            του συστήματος και περιλαμβάνει:
          </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {coreModules.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-3 bg-[#0a0a0a] border border-[#333333] rounded px-5 py-4"
              >
                <span className="text-[#fe4e00]">{m.icon}</span>
                <span className="text-sm font-semibold text-[#f5f5f5] uppercase tracking-wide">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "15px", color: "#a3a3a3", lineHeight: 1.8, fontStyle: "italic" }}>
            Οι συμμετέχοντες αναπτύσσουν δεξιότητες αναγνώρισης κινδύνου, λήψης
            αποφάσεων υπό πίεση, διαχείρισης συγκρούσεων και προστασίας του εαυτού
            τους και τρίτων σε πραγματικές συνθήκες.
          </p>
        </div>
      </Section>

      {/* Specialized Tracks */}
      <Section
        background="dark"
        padding="large"
        subtitle="Specialized Pathways"
        title="Οι Εκπαιδευτικές Διαδρομές"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((t) => (
            <TrackCard key={t.title} track={t} />
          ))}
        </div>
      </Section>

      {/* The Urban Response Approach */}
      <Section background="gradient" padding="large" subtitle="Philosophy" title="The Urban Response® Approach">
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "18px", color: "#d4d4d4", lineHeight: 1.8, marginBottom: "24px" }}>
            Η φιλοσοφία του Urban Response® βασίζεται στην πρόληψη, την επίγνωση και
            τη λήψη αποφάσεων.
          </p>
          <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "12px" }}>
            Δεν εκπαιδεύουμε ανθρώπους να αναζητούν τη σύγκρουση.
          </p>
          <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "56px" }}>
            Εκπαιδεύουμε ανθρώπους να αναγνωρίζουν έγκαιρα τους κινδύνους, να
            αποφεύγουν τις περιττές συγκρούσεις και να λειτουργούν αποτελεσματικά
            όταν οι συνθήκες το απαιτούν.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-12">
            {approachPillars.map((p, i) => (
              <div key={p} className="flex items-center gap-3 md:gap-5">
                <div
                  style={{
                    padding: "16px 28px",
                    border: "2px solid #fe4e00",
                    borderRadius: "4px",
                    backgroundColor: "rgba(254, 78, 0, 0.05)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#f5f5f5",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      fontFamily: "'Roboto Condensed', sans-serif",
                    }}
                  >
                    {p}
                  </span>
                </div>
                {i < approachPillars.length - 1 && (
                  <ArrowRight size={24} style={{ color: "#fe4e00" }} />
                )}
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#fe4e00",
              fontFamily: "'Roboto Condensed', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Urban Response® – Prepared for Reality.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="darker" padding="medium">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#f5f5f5",
              marginBottom: "20px",
              fontFamily: "'Roboto Condensed', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Ενδιαφέρεστε για ένα πρόγραμμα;
          </h3>
          <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.7, marginBottom: "32px" }}>
            Επικοινωνήστε μαζί μας για να σχεδιάσουμε την κατάλληλη εκπαιδευτική
            διαδρομή για εσάς, την ομάδα ή τον οργανισμό σας.
          </p>
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
            → Επικοινωνήστε μαζί μας
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default TrainingTracks;
