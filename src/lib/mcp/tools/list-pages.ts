import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PAGES = [
  { path: "/", title: "Αρχική", description: "Urban Response — εκπαίδευση προσωπικής ασφάλειας και ετοιμότητας στην πόλη." },
  { path: "/about", title: "Σχετικά", description: "Ποιοι είμαστε και τι είναι το Urban Response." },
  { path: "/mission", title: "Αποστολή", description: "Οι πέντε θεμελιώδεις αρχές του Urban Response." },
  { path: "/instructor", title: "Εκπαιδευτής", description: "Σταύρος Μπαρούτας — Founder & Methodology Developer." },
  { path: "/training-tracks", title: "Εκπαιδευτικά Επίπεδα", description: "Τα 5 προοδευτικά επίπεδα εκπαίδευσης." },
  { path: "/faq", title: "Συχνές Ερωτήσεις", description: "Απαντήσεις σε συχνές ερωτήσεις για το πρόγραμμα." },
  { path: "/contact", title: "Επικοινωνία", description: "Στοιχεία επικοινωνίας και φόρμα." },
];

export default defineTool({
  name: "list_pages",
  title: "List site pages",
  description: "List every public page on the Urban Response site with its path, title, and a short description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PAGES, null, 2) }],
    structuredContent: { pages: PAGES },
  }),
});
