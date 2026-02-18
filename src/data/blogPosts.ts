export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "situational-awareness-στην-πολη",
    title: "Situational Awareness: Πώς να «βλέπεις» την πόλη διαφορετικά",
    excerpt:
      "Η επίγνωση του περιβάλλοντος είναι η πρώτη γραμμή άμυνας. Μάθε πώς να αναγνωρίζεις ανεπαίσθητα σήματα κινδύνου πριν εξελιχθούν σε πρόβλημα.",
    content: "",
    date: "2025-02-10",
    category: "Επίγνωση",
    readTime: "5 λεπτά",
  },
  {
    id: "2",
    slug: "αποφυγη-vs-αντιδραση",
    title: "Αποφυγή vs Αντίδραση: Γιατί η σκέψη κερδίζει πάντα",
    excerpt:
      "Η ταχύτητα αντίδρασης δεν είναι το μυστικό της ασφάλειας. Είναι η ικανότητα να αναγνωρίζεις εγκαίρως και να επιλέγεις σωστά — πριν χρειαστεί να αντιδράσεις.",
    content: "",
    date: "2025-01-28",
    category: "Φιλοσοφία",
    readTime: "4 λεπτά",
  },
  {
    id: "3",
    slug: "de-escalation-καθημερινες-συγκρουσεις",
    title: "De-escalation: Εργαλεία για καθημερινές συγκρούσεις",
    excerpt:
      "Ακόμα και οι πιο εντεταμένες καταστάσεις μπορούν να αποκλιμακωθούν με τις σωστές λέξεις, τη σωστή στάση και τη σωστή απόσταση. Δες πώς.",
    content: "",
    date: "2025-01-14",
    category: "Τεχνικές",
    readTime: "6 λεπτά",
  },
  {
    id: "4",
    slug: "urban-response-level-1",
    title: "Τι περιλαμβάνει το Level 1 του Urban Response",
    excerpt:
      "Αναλυτική παρουσίαση του πρώτου επιπέδου εκπαίδευσης: τι μαθαίνεις, πώς αξιολογείσαι και γιατί η βάση είναι το σημαντικότερο κομμάτι.",
    content: "",
    date: "2024-12-20",
    category: "Εκπαίδευση",
    readTime: "7 λεπτά",
  },
];

export const getLatestPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
