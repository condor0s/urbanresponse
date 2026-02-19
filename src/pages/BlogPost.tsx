import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag, Share2, BookOpen, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";

import heroImage from "@/assets/hero-urban-night.jpg";
import awarenessImage from "@/assets/awareness-eyes.jpg";

const categoryColors: Record<string, string> = {
  Επίγνωση: "#fe4e00",
  Φιλοσοφία: "#3b82f6",
  Τεχνικές: "#22c55e",
  Εκπαίδευση: "#a855f7",
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("el-GR", { day: "numeric", month: "long", year: "numeric" });
};

// Example full article content for demo
const demoContent = {
  intro: `Η επίγνωση του περιβάλλοντος — ή αλλιώς situational awareness — είναι ίσως η πιο κρίσιμη δεξιότητα που μπορεί να αναπτύξει κάποιος για την προσωπική του ασφάλεια. Δεν πρόκειται για παράνοια. Πρόκειται για μια συνειδητή, ήρεμη προσοχή στα σήματα που μας στέλνει το περιβάλλον μας.`,
  sections: [
    {
      title: "Τι είναι το Situational Awareness",
      body: `Ο Endsley ορίζει το situational awareness ως τη «σύλληψη των στοιχείων του περιβάλλοντος εντός ενός όγκου χρόνου και χώρου, την κατανόηση της σημασίας τους, και την πρόβλεψη της κατάστασής τους στο άμεσο μέλλον».

Στην πράξη, αυτό σημαίνει ότι δεν αρκεί να βλέπεις — πρέπει να αντιλαμβάνεσαι, να ερμηνεύεις και να προβλέπεις. Το μυαλό μας το κάνει αυτό συνεχώς, αλλά μπορούμε να το εκπαιδεύσουμε να το κάνει καλύτερα.`,
    },
    {
      title: "Τα 3 Επίπεδα Επίγνωσης",
      body: `**Επίπεδο 1 — Αντίληψη:** Παρατηρείς τα στοιχεία του περιβάλλοντος. Ποιος βρίσκεται γύρω σου, τι κρατά, πού κοιτά, πώς κινείται.

**Επίπεδο 2 — Κατανόηση:** Συνδέεις τα παρατηρούμενα στοιχεία με εκτίμηση του τι σημαίνουν. Ένας άνθρωπος που στέκεται ακίνητος σε ένα πολυσύχναστο δρόμο και κοιτά επίμονα στην ίδια κατεύθυνση — τι υποδηλώνει;

**Επίπεδο 3 — Πρόβλεψη:** Εκτιμάς τι είναι πιθανό να συμβεί. Αυτό σου δίνει τον χρόνο να αποφύγεις πριν εμφανιστεί η απειλή.`,
    },
    {
      title: "Πρακτικές Τεχνικές για την Πόλη",
      body: `**Κάθισε πάντα με πλάτη στον τοίχο.** Σε χώρους εστίασης ή αναμονής, επιλέγεις θέση που σου δίνει οπτικό πεδίο 180°+.

**Σκάναρε την είσοδο.** Κάθε φορά που εισέρχεσαι σε νέο χώρο, αφιέρωσε 3 δευτερόλεπτα για να εκτιμήσεις τι βλέπεις.

**Αναγνώρισε τις εξόδους.** Εστιατόριο, σταθμός μετρό, εμπορικό κέντρο — που βγαίνεις αν χρειαστεί;

**Απόθεσε το κινητό.** Ο ευκολότερος τρόπος να σε αιφνιδιάσουν είναι να κοιτάς οθόνη.`,
    },
    {
      title: "Η Παγίδα της Υπερεπίγνωσης",
      body: `Η επίγνωση του κινδύνου δεν σημαίνει συνεχή αγχώδη παρατήρηση. Αυτό κουράζει, δεν μπορεί να διατηρηθεί, και δεν είναι αποτελεσματικό.

Το ζητούμενο είναι μια χαλαρή, baseline επίγνωση — αυτό που ο Jeff Cooper ονομάζει «Κίτρινο Επίπεδο» στο Color Code σύστημά του. Είσαι χαλαρός, απολαμβάνεις τη μέρα σου, αλλά δεν έχεις απενεργοποιήσει τις κεραίες σου.`,
    },
  ],
  conclusion: `Το situational awareness δεν είναι δεξιότητα για ειδικούς ή πρώην στρατιωτικούς. Είναι κάτι που μπορεί να μάθει ο καθένας — και το Urban Response το διδάσκει ακριβώς αυτό: πρακτικά, χωρίς τακτικιστικές υπερβολές, με εστίαση στην πραγματική καθημερινή ζωή.`,
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the post or use first as demo
  const post = blogPosts.find((p) => p.slug === slug) ?? blogPosts[0];
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const accentColor = categoryColors[post.category] ?? "#fe4e00";

  return (
    <Layout>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "380px",
          overflow: "hidden",
        }}
      >
        <img
          src={heroImage}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.5) 60%, transparent 100%)",
          }}
        />
        {/* Category bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: accentColor,
          }}
        />

        {/* Breadcrumb & meta */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: 0,
            right: 0,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <Link
              to="/blog"
              style={{
                fontSize: "12px",
                color: "#a3a3a3",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "1px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <ArrowLeft size={12} /> Blog
            </Link>
            <span style={{ color: "#404040", fontSize: "12px" }}>/</span>
            <span
              style={{
                fontSize: "12px",
                color: accentColor,
                textTransform: "uppercase",
                letterSpacing: "1px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Tag size={12} /> {post.category}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 44px)",
              fontWeight: 700,
              color: "#f5f5f5",
              fontFamily: "'Noto Sans Display', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              lineHeight: 1.2,
              maxWidth: "800px",
            }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <section style={{ background: "#0a0a0a", padding: "80px 0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "60px",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid"
        >
          {/* Article body */}
          <article>
            {/* Meta bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                paddingBottom: "32px",
                marginBottom: "40px",
                borderBottom: "1px solid #1f1f1f",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: "#737373",
                }}
              >
                <Calendar size={13} />
                {formatDate(post.date)}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: "#737373",
                }}
              >
                <Clock size={13} />
                {post.readTime}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: "#737373",
                }}
              >
                <BookOpen size={13} />
                Σταύρος Μπαρούτας
              </span>
            </div>

            {/* Intro */}
            <p
              style={{
                fontSize: "19px",
                color: "#d4d4d4",
                lineHeight: 1.9,
                marginBottom: "48px",
                fontStyle: "italic",
                borderLeft: `3px solid ${accentColor}`,
                paddingLeft: "24px",
              }}
            >
              {demoContent.intro}
            </p>

            {/* Image */}
            <div
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                marginBottom: "48px",
                position: "relative",
              }}
            >
              <img
                src={awarenessImage}
                alt="Situational Awareness"
                style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundColor: accentColor,
                }}
              />
            </div>

            {/* Sections */}
            {demoContent.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: "48px" }}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#f5f5f5",
                    fontFamily: "'Noto Sans Display', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "20px",
                    paddingBottom: "12px",
                    borderBottom: "1px solid #1f1f1f",
                  }}
                >
                  {section.title}
                </h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: "16px",
                      color: "#a3a3a3",
                      lineHeight: 1.9,
                      marginBottom: "16px",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}

            {/* Conclusion box */}
            <div
              style={{
                padding: "36px",
                backgroundColor: "#141414",
                border: "1px solid #1f1f1f",
                borderLeft: `4px solid ${accentColor}`,
                borderRadius: "4px",
                marginBottom: "48px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: accentColor,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                Συμπέρασμα
              </p>
              <p style={{ fontSize: "16px", color: "#d4d4d4", lineHeight: 1.9 }}>{demoContent.conclusion}</p>
            </div>

            {/* Share / CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "32px",
                borderTop: "1px solid #1f1f1f",
              }}
            >
              <Link
                to="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#737373",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 600,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#737373")}
              >
                <ArrowLeft size={14} /> Όλα τα άρθρα
              </Link>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#737373",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 600,
                }}
              >
                <Share2 size={14} /> Κοινοποίηση
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: "100px" }}>
            {/* About author */}
            <div
              style={{
                backgroundColor: "#141414",
                border: "1px solid #1f1f1f",
                borderRadius: "4px",
                padding: "28px",
                marginBottom: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "#fe4e00",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                Ο Συγγραφέας
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "#1f1f1f",
                    border: "2px solid #fe4e00",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#fe4e00",
                      fontFamily: "'Noto Sans Display', sans-serif",
                    }}
                  >
                    ΣΜ
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#f5f5f5", marginBottom: "4px" }}>
                    Σταύρος Μπαρούτας
                  </p>
                  <p style={{ fontSize: "12px", color: "#737373" }}>Εκπαιδευτής Urban Response</p>
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: 1.7 }}>
                Εκπαιδευτής αστικής ασφάλειας και προσωπικής προστασίας με πολυετή εμπειρία.
              </p>
              <Link
                to="/instructor"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  color: "#fe4e00",
                  textDecoration: "none",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginTop: "16px",
                }}
              >
                Προφίλ <ChevronRight size={12} />
              </Link>
            </div>

            {/* Other articles */}
            <div
              style={{
                backgroundColor: "#141414",
                border: "1px solid #1f1f1f",
                borderRadius: "4px",
                padding: "28px",
                marginBottom: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "#fe4e00",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "20px",
                }}
              >
                Σχετικά Άρθρα
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {otherPosts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/blog/${p.slug}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div
                      style={{
                        paddingBottom: "16px",
                        borderBottom: "1px solid #1f1f1f",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "11px",
                          color: categoryColors[p.category] ?? "#fe4e00",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginBottom: "6px",
                        }}
                      >
                        {p.category}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#d4d4d4",
                          fontWeight: 600,
                          lineHeight: 1.4,
                          fontFamily: "'Noto Sans Display', sans-serif",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {p.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA box */}
            <div
              style={{
                backgroundColor: "#fe4e00",
                borderRadius: "4px",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                Ξεκίνα Σήμερα
              </p>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "'Noto Sans Display', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: 1.3,
                  marginBottom: "20px",
                }}
              >
                Θέλεις να εκπαιδευτείς;
              </p>
              <Link
                to="/contact"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  backgroundColor: "#ffffff",
                  color: "#fe4e00",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Επικοινωνία
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
