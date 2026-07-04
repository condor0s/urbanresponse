import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import {
  Scroll,
  Compass,
  Eye,
  Heart,
  BookOpen,
  Layers,
  UserCheck,
  ShieldCheck,
  Gavel,
  Award,
  Copyright,
  AlertOctagon,
  RefreshCw,
  FileEdit,
  Flag,
} from "lucide-react";
import heroImage from "@/assets/hero-urban-night.jpg";
import constitutionEmblem from "@/assets/constitution-emblem.png";

const ORANGE = "#fe4e00";
const TEXT = "#d4d4d4";
const HEAD = "#f5f5f5";
const MUTED = "#a3a3a3";
const CARD = "#141414";
const CARD_SOFT = "#1a1a1a";

const principles = [
  { en: "See Early", gr: "Δες Νωρίς" },
  { en: "Understand Change", gr: "Κατανόησε τη Μεταβολή" },
  { en: "Create Options", gr: "Δημιούργησε Επιλογές" },
  { en: "Decide Early", gr: "Αποφάσισε Έγκαιρα" },
  { en: "Protect Responsibly", gr: "Προστάτευσε Υπεύθυνα" },
];

const values = [
  "Υπευθυνότητα",
  "Σεβασμός",
  "Ψυχραιμία",
  "Αυτοπειθαρχία",
  "Ταπεινότητα",
  "Επαγγελματισμός",
  "Νομιμότητα",
  "Συνεχής Βελτίωση",
];

const methodology = [
  "Παρατήρηση",
  "Πρόληψη",
  "Διαχείριση Κινδύνου",
  "Λήψη Αποφάσεων",
  "Προστασία",
];

const levels = ["Foundation Level", "Intermediate Level", "Advanced Level", "Instructor Level"];

const instructorDuties = [
  "να διδάσκουν σύμφωνα με τα εγκεκριμένα πρότυπα",
  "να εκπροσωπούν επαγγελματικά τον οργανισμό",
  "να λειτουργούν ως πρότυπα συμπεριφοράς",
  "να προστατεύουν την ποιότητα της εκπαίδευσης",
  "να συνεχίζουν τη δική τους επαγγελματική ανάπτυξη",
];

const instructorObligations = [
  "δεν τροποποιούν επίσημο εκπαιδευτικό υλικό χωρίς έγκριση",
  "δεν παρουσιάζουν προσωπικές απόψεις ως επίσημη θέση του Urban Response",
  "τηρούν τα πρότυπα αξιολόγησης και πιστοποίησης",
  "συμμετέχουν σε ανανεώσεις, επιμορφώσεις ή επαναξιολογήσεις όταν απαιτείται",
];

const codeOfConduct = [
  "να σέβονται τη νομοθεσία",
  "να αποφεύγουν την περιττή σύγκρουση",
  "να μη χρησιμοποιούν τις γνώσεις τους για παράνομους σκοπούς",
  "να αντιμετωπίζουν τους άλλους με σεβασμό",
  "να διατηρούν υψηλό επίπεδο επαγγελματικής και ηθικής συμπεριφοράς",
];

const disciplinary = [
  { level: 1, action: "Προφορική Προειδοποίηση" },
  { level: 2, action: "Έγγραφη Προειδοποίηση" },
  { level: 3, action: "Προσωρινή Αναστολή" },
  { level: 4, action: "Οριστική Διαγραφή" },
];

const revisionItems = [
  "εκπαιδευτικών προγραμμάτων",
  "εγχειριδίων",
  "προτύπων αξιολόγησης",
  "διαδικασιών πιστοποίησης",
  "λειτουργικών κανονισμών",
];

const missionItems = [
  "η ανάπτυξη επίγνωσης κατάστασης",
  "η εκπαίδευση στην πρόληψη κινδύνων",
  "η βελτίωση της λήψης αποφάσεων",
  "η ανάπτυξη δεξιοτήτων προσωπικής ασφάλειας",
  "η προστασία τρίτων προσώπων",
  "η προώθηση υπεύθυνης συμπεριφοράς σε καθημερινές και έκτακτες συνθήκες",
];

const visionItems = [
  "σκέφτονται υπεύθυνα",
  "παρατηρούν αποτελεσματικά",
  "ενεργούν ψύχραιμα",
  "προστατεύουν τον εαυτό τους και τους άλλους",
  "συμβάλλουν σε ασφαλέστερες κοινότητες",
];

const finalIs = [
  "παρατήρησης",
  "πρόληψης",
  "διαχείρισης κινδύνου",
  "λήψης αποφάσεων",
  "υπεύθυνης προσωπικής ασφάλειας",
];

// Reusable article header
const ArticleHeader = ({
  num,
  title,
  icon,
}: {
  num: number;
  title: string;
  icon: React.ReactNode;
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
    <div
      style={{
        width: "56px",
        height: "56px",
        borderRadius: "4px",
        backgroundColor: "#0a0a0a",
        border: `1px solid ${ORANGE}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: ORANGE,
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div>
      <p
        style={{
          fontSize: "12px",
          color: ORANGE,
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "4px",
        }}
      >
        Άρθρο {num}
      </p>
      <h3
        style={{
          fontSize: "26px",
          color: HEAD,
          fontFamily: "'Noto Sans Display', sans-serif",
          fontWeight: 700,
        }}
      >
        {title}
      </h3>
    </div>
  </div>
);

const ArticleCard = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <article
    style={{
      padding: "44px",
      backgroundColor: CARD,
      borderRadius: "6px",
      borderLeft: `3px solid ${ORANGE}`,
      ...style,
    }}
  >
    {children}
  </article>
);

const BulletList = ({ items, color = ORANGE }: { items: string[]; color?: string }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
    {items.map((item, i) => (
      <li
        key={i}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "14px",
          fontSize: "16px",
          color: TEXT,
          lineHeight: 1.7,
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: color,
            marginTop: "10px",
            flexShrink: 0,
          }}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Constitution = () => {
  return (
    <Layout>
      <section
        style={{
          position: "relative",
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.9) 70%, rgba(10,10,10,0.97) 100%)",
          }}
        />
        {/* Decorative corner brackets */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "32px",
            border: `1px solid ${ORANGE}33`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${ORANGE}33 0%, transparent 70%)`,
                filter: "blur(20px)",
              }}
            />
            <img
              src={constitutionEmblem}
              alt="Urban Response Constitution Emblem"
              width={200}
              height={200}
              style={{
                position: "relative",
                width: "clamp(140px, 22vw, 200px)",
                height: "auto",
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.6))",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: ORANGE,
            }}
          >
            <span style={{ height: "1px", width: "40px", background: ORANGE }} />
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "4px",
                margin: 0,
              }}
            >
              Καταστατικό Λειτουργίας · Έκδοση 1.0
            </p>
            <span style={{ height: "1px", width: "40px", background: ORANGE }} />
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "'Roboto Condensed', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Το Καταστατικό του Urban Response
          </h1>
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: MUTED,
              margin: 0,
            }}
          >
            Constitution & Operating Standards
          </p>
        </div>
      </section>

      {/* Preamble */}
      <Section background="darker">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              padding: "50px",
              backgroundColor: CARD,
              borderRadius: "6px",
              borderTop: `4px solid ${ORANGE}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <Scroll size={28} style={{ color: ORANGE }} />
              <h2
                style={{
                  fontSize: "22px",
                  color: HEAD,
                  fontFamily: "'Noto Sans Display', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontWeight: 700,
                }}
              >
                Προοίμιο
              </h2>
            </div>
            <p style={{ fontSize: "17px", color: TEXT, lineHeight: 1.9, marginBottom: "20px" }}>
              Το Urban Response αποτελεί ένα σύστημα εκπαίδευσης προσωπικής ασφάλειας, πρόληψης,
              διαχείρισης κινδύνου και λήψης αποφάσεων, σχεδιασμένο για τις απαιτήσεις του
              σύγχρονου αστικού περιβάλλοντος.
            </p>
            <p style={{ fontSize: "17px", color: TEXT, lineHeight: 1.9, marginBottom: "20px" }}>
              Σκοπός του <strong style={{ color: HEAD }}>δεν</strong> είναι η προώθηση της βίας ή
              της σύγκρουσης.
            </p>
            <p style={{ fontSize: "17px", color: TEXT, lineHeight: 1.9, marginBottom: "24px" }}>
              Σκοπός του είναι η ανάπτυξη ανθρώπων που μπορούν να{" "}
              <strong style={{ color: ORANGE }}>παρατηρούν έγκαιρα</strong>, να{" "}
              <strong style={{ color: ORANGE }}>αξιολογούν αποτελεσματικά</strong>, να{" "}
              <strong style={{ color: ORANGE }}>λαμβάνουν καλύτερες αποφάσεις</strong> και να{" "}
              <strong style={{ color: ORANGE }}>προστατεύουν υπεύθυνα</strong> τον εαυτό τους και
              τους άλλους.
            </p>
            <p style={{ fontSize: "16px", color: MUTED, lineHeight: 1.8, marginBottom: "32px" }}>
              Το παρόν Καταστατικό Λειτουργίας καθορίζει τις αρχές, τις αξίες, τη δομή και τα
              πρότυπα λειτουργίας του Urban Response.
            </p>
            <div
              style={{
                paddingTop: "24px",
                borderTop: "1px solid #262626",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "13px", color: MUTED, letterSpacing: "1px", textTransform: "uppercase" }}>
                Founder &amp; Director
              </span>
              <span style={{ fontSize: "14px", color: HEAD, fontWeight: 600 }}>
                Stavros Baroutas
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Article 1 – Name */}
      <Section background="dark">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={1} title="Ονομασία" icon={<Flag size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "20px" }}>
              Η επίσημη ονομασία του συστήματος είναι:
            </p>
            <p
              style={{
                fontSize: "32px",
                color: HEAD,
                fontFamily: "'Noto Sans Display', sans-serif",
                fontWeight: 700,
                marginBottom: "24px",
                letterSpacing: "1px",
              }}
            >
              Urban Response
            </p>
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "12px" }}>
              Για διεθνή χρήση δύναται να χρησιμοποιείται η ονομασία:
            </p>
            <p style={{ fontSize: "20px", color: ORANGE, fontWeight: 600 }}>
              Urban Response Personal Safety System
            </p>
          </ArticleCard>
        </div>
      </Section>

      {/* Article 2 – Mission */}
      <Section background="darker">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={2} title="Αποστολή" icon={<Compass size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "24px" }}>
              Αποστολή του Urban Response είναι:
            </p>
            <BulletList items={missionItems} />
          </ArticleCard>
        </div>
      </Section>

      {/* Article 3 – Vision */}
      <Section background="dark">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={3} title="Όραμα" icon={<Eye size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "24px" }}>
              Όραμα του Urban Response είναι η δημιουργία μιας κοινότητας ανθρώπων που:
            </p>
            <BulletList items={visionItems} />
          </ArticleCard>
        </div>
      </Section>

      {/* Article 4 – The Five Principles */}
      <Section background="gradient">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "12px",
                color: ORANGE,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Άρθρο 4
            </p>
            <h3
              style={{
                fontSize: "36px",
                color: HEAD,
                fontFamily: "'Noto Sans Display', sans-serif",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Οι Πέντε Βασικές Αρχές
            </h3>
            <p style={{ fontSize: "15px", color: MUTED, maxWidth: "620px", margin: "0 auto", lineHeight: 1.8 }}>
              Το Urban Response βασίζεται στις ακόλουθες θεμελιώδεις αρχές. Όλα τα εκπαιδευτικά
              προγράμματα, οι πιστοποιήσεις και οι δραστηριότητες οφείλουν να ευθυγραμμίζονται με
              αυτές.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {principles.map((p, i) => (
              <div
                key={i}
                style={{
                  flex: "1 1 180px",
                  minWidth: "min(100%, 180px)",
                  padding: "32px 24px",
                  backgroundColor: CARD,
                  borderRadius: "6px",
                  borderTop: `3px solid ${ORANGE}`,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontFamily: "'Noto Sans Display', sans-serif",
                    color: "#262626",
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  0{i + 1}
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    color: ORANGE,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {p.en}
                </p>
                <p style={{ fontSize: "14px", color: TEXT, lineHeight: 1.6 }}>{p.gr}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Article 5 – Values */}
      <Section background="darker">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={5} title="Αξίες" icon={<Heart size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "28px" }}>
              Οι βασικές αξίες του Urban Response είναι:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {values.map((v, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1 1 calc(25% - 9px)",
                    minWidth: "min(100%, calc(25% - 9px))",
                    maxWidth: "calc(25% - 9px)",
                    padding: "18px 16px",
                    backgroundColor: "#0a0a0a",
                    border: "1px solid #262626",
                    borderRadius: "4px",
                    textAlign: "center",
                    fontSize: "14px",
                    color: HEAD,
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {v}
                </div>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: MUTED, marginTop: "28px", fontStyle: "italic" }}>
              Οι αξίες αυτές διέπουν τη συμπεριφορά μαθητών, εκπαιδευτών και συνεργατών.
            </p>
          </ArticleCard>
        </div>
      </Section>

      {/* Article 6 – Methodology */}
      <Section background="dark">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={6} title="Εκπαιδευτική Μεθοδολογία" icon={<BookOpen size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "24px" }}>
              Η εκπαιδευτική φιλοσοφία του Urban Response βασίζεται στις αρχές:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
              {methodology.map((m, i) => (
                <span
                  key={i}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: ORANGE,
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "16px" }}>
              Η εκπαίδευση δίνει προτεραιότητα:
            </p>
            <BulletList
              items={[
                "στην αποφυγή",
                "στην αποκλιμάκωση",
                "στην έγκαιρη αναγνώριση κινδύνων",
                "στην υπεύθυνη διαχείριση περιστατικών",
              ]}
            />
            <p style={{ fontSize: "15px", color: MUTED, marginTop: "24px", fontStyle: "italic" }}>
              …πριν από οποιαδήποτε φυσική αντιπαράθεση.
            </p>
          </ArticleCard>
        </div>
      </Section>

      {/* Article 7 – Structure */}
      <Section background="darker">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={7} title="Δομή Εκπαίδευσης" icon={<Layers size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "28px" }}>
              Το Urban Response δύναται να αποτελείται από διαδοχικά επίπεδα εκπαίδευσης.
              Ενδεικτικά:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {levels.map((lvl, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1 1 200px",
                    minWidth: "min(100%, 200px)",
                    padding: "24px 20px",
                    backgroundColor: CARD_SOFT,
                    borderRadius: "4px",
                    borderBottom: `3px solid ${ORANGE}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: MUTED,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Level 0{i + 1}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      color: HEAD,
                      fontFamily: "'Noto Sans Display', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {lvl}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: MUTED, marginTop: "24px", fontStyle: "italic" }}>
              Η δομή των επιπέδων μπορεί να αναθεωρείται ανάλογα με τις ανάγκες του οργανισμού.
            </p>
          </ArticleCard>
        </div>
      </Section>

      {/* Article 8 & 9 – Instructors */}
      <Section background="dark">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            <ArticleCard style={{ flex: "1 1 320px", minWidth: "min(100%, 320px)" }}>
              <ArticleHeader num={8} title="Εκπαιδευτές" icon={<UserCheck size={26} />} />
              <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "20px" }}>
                Οι εκπαιδευτές του Urban Response οφείλουν:
              </p>
              <BulletList items={instructorDuties} />
            </ArticleCard>
            <ArticleCard style={{ flex: "1 1 320px", minWidth: "min(100%, 320px)" }}>
              <ArticleHeader num={9} title="Υποχρεώσεις Εκπαιδευτών" icon={<ShieldCheck size={26} />} />
              <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "20px" }}>
                Οι πιστοποιημένοι εκπαιδευτές:
              </p>
              <BulletList items={instructorObligations} />
            </ArticleCard>
          </div>
        </div>
      </Section>

      {/* Article 10 – Code of Conduct */}
      <Section background="darker">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={10} title="Κώδικας Δεοντολογίας" icon={<Gavel size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "24px" }}>
              Όλα τα μέλη της κοινότητας Urban Response οφείλουν:
            </p>
            <BulletList items={codeOfConduct} />
          </ArticleCard>
        </div>
      </Section>

      {/* Article 11 – Certifications */}
      <Section background="dark">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={11} title="Πιστοποιήσεις" icon={<Award size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "20px" }}>
              Οι πιστοποιήσεις απονέμονται μόνο σε εκπαιδευόμενους που πληρούν τα κριτήρια του
              αντίστοιχου επιπέδου.
            </p>
            <div
              style={{
                padding: "24px",
                backgroundColor: "#0a0a0a",
                borderLeft: `3px solid ${ORANGE}`,
                borderRadius: "4px",
              }}
            >
              <p style={{ fontSize: "15px", color: MUTED, lineHeight: 1.8 }}>
                Η πιστοποίηση αποτελεί αναγνώριση ολοκλήρωσης εκπαιδευτικών απαιτήσεων και{" "}
                <strong style={{ color: HEAD }}>όχι εγγύηση επαγγελματικής ικανότητας</strong> ή
                επιχειρησιακής επάρκειας.
              </p>
            </div>
          </ArticleCard>
        </div>
      </Section>

      {/* Article 12 – IP */}
      <Section background="darker">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader
              num={12}
              title="Χρήση Ονόματος & Πνευματικής Ιδιοκτησίας"
              icon={<Copyright size={26} />}
            />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "20px" }}>
              Το όνομα <strong style={{ color: HEAD }}>Urban Response</strong>, τα λογότυπα, τα
              εγχειρίδια, οι παρουσιάσεις, οι πιστοποιήσεις και κάθε σχετικό εκπαιδευτικό υλικό
              αποτελούν πνευματική ιδιοκτησία του Urban Response.
            </p>
            <p style={{ fontSize: "16px", color: ORANGE, fontWeight: 600, lineHeight: 1.8 }}>
              Απαγορεύεται η χρήση, αναπαραγωγή ή διανομή τους χωρίς προηγούμενη έγγραφη άδεια.
            </p>
          </ArticleCard>
        </div>
      </Section>

      {/* Article 13 – Disciplinary */}
      <Section background="dark">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ArticleCard>
            <ArticleHeader num={13} title="Πειθαρχικές Διαδικασίες" icon={<AlertOctagon size={26} />} />
            <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "28px" }}>
              Σε περίπτωση σοβαρής παραβίασης των αρχών ή των κανόνων του Urban Response δύναται
              να επιβληθούν:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {disciplinary.map((d) => (
                <div
                  key={d.level}
                  style={{
                    flex: "1 1 200px",
                    minWidth: "min(100%, 200px)",
                    padding: "24px 20px",
                    backgroundColor: CARD_SOFT,
                    borderRadius: "4px",
                    borderTop: `3px solid ${ORANGE}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: ORANGE,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      fontWeight: 700,
                    }}
                  >
                    Επίπεδο {d.level}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: HEAD,
                      fontWeight: 600,
                      lineHeight: 1.5,
                    }}
                  >
                    {d.action}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: MUTED, marginTop: "24px", fontStyle: "italic" }}>
              Η σοβαρότητα της παράβασης καθορίζει το επίπεδο της πειθαρχικής ενέργειας.
            </p>
          </ArticleCard>
        </div>
      </Section>

      {/* Article 14 & 15 – Revision */}
      <Section background="darker">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            <ArticleCard style={{ flex: "1 1 320px", minWidth: "min(100%, 320px)" }}>
              <ArticleHeader num={14} title="Αναθεώρηση Προτύπων" icon={<RefreshCw size={26} />} />
              <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "20px" }}>
                Το Urban Response διατηρεί το δικαίωμα αναθεώρησης:
              </p>
              <BulletList items={revisionItems} />
              <p style={{ fontSize: "14px", color: MUTED, marginTop: "20px", fontStyle: "italic" }}>
                …ώστε να ανταποκρίνονται στις σύγχρονες εκπαιδευτικές και επιχειρησιακές απαιτήσεις.
              </p>
            </ArticleCard>
            <ArticleCard style={{ flex: "1 1 320px", minWidth: "min(100%, 320px)" }}>
              <ArticleHeader num={15} title="Τροποποίηση Καταστατικού" icon={<FileEdit size={26} />} />
              <p style={{ fontSize: "16px", color: TEXT, lineHeight: 1.9, marginBottom: "16px" }}>
                Το παρόν Καταστατικό Λειτουργίας δύναται να τροποποιείται από τη Διοίκηση του
                Urban Response όταν αυτό κρίνεται απαραίτητο για τη βελτίωση της λειτουργίας και
                της εκπαιδευτικής ποιότητας του οργανισμού.
              </p>
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#0a0a0a",
                  borderLeft: `3px solid ${ORANGE}`,
                  borderRadius: "4px",
                }}
              >
                <p style={{ fontSize: "15px", color: HEAD, fontWeight: 600 }}>
                  Κάθε νέα έκδοση αντικαθιστά τις προηγούμενες.
                </p>
              </div>
            </ArticleCard>
          </div>
        </div>
      </Section>

      {/* Article 16 – Final Statement */}
      <Section background="gradient">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              padding: "60px 50px",
              backgroundColor: CARD,
              borderRadius: "6px",
              border: `1px solid ${ORANGE}`,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: ORANGE,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Άρθρο 16 · Τελική Δήλωση
            </p>
            <h3
              style={{
                fontSize: "30px",
                color: HEAD,
                fontFamily: "'Noto Sans Display', sans-serif",
                fontWeight: 700,
                marginBottom: "32px",
                lineHeight: 1.3,
              }}
            >
              Το Urban Response δεν είναι σύστημα βίας.
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
              {[
                "Δεν αποτελεί σύστημα επιθετικής συμπεριφοράς.",
                "Δεν δημιουργήθηκε για την αναζήτηση συγκρούσεων.",
                "Δεν προωθεί την κουλτούρα της βίας.",
              ].map((line, i) => (
                <p key={i} style={{ fontSize: "16px", color: MUTED }}>
                  {line}
                </p>
              ))}
            </div>
            <p
              style={{
                fontSize: "16px",
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Το Urban Response αποτελεί σύστημα:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "36px" }}>
              {finalIs.map((item, i) => (
                <span
                  key={i}
                  style={{
                    padding: "10px 18px",
                    backgroundColor: "#0a0a0a",
                    border: `1px solid ${ORANGE}`,
                    color: ORANGE,
                    fontSize: "13px",
                    fontWeight: 600,
                    borderRadius: "4px",
                    letterSpacing: "1px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "17px", color: HEAD, lineHeight: 1.8, fontStyle: "italic" }}>
              Θεμελιώδης σκοπός του είναι η προστασία της ανθρώπινης ζωής, η αποφυγή περιττών
              συγκρούσεων και η ανάπτυξη υπεύθυνων πολιτών που μπορούν να λειτουργούν αποτελεσματικά
              σε ένα συνεχώς μεταβαλλόμενο περιβάλλον.
            </p>
          </div>
        </div>
      </Section>

      {/* Colophon */}
      <Section background="darker">
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              padding: "40px",
              backgroundColor: "#0a0a0a",
              borderRadius: "6px",
              border: "1px solid #262626",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: MUTED,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Urban Response Constitution &amp; Operating Standards
            </p>
            <p style={{ fontSize: "14px", color: HEAD, marginBottom: "8px" }}>Version 1.0</p>
            <p style={{ fontSize: "13px", color: MUTED }}>
              © {new Date().getFullYear()} Urban Response — All Rights Reserved
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Constitution;
