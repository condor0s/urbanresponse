## Πρόβλημα
Στο `og-training-tracks.jpg` τα ελληνικά («ΕΚΠΑΙΔΕΥΤΙΚΕΣ», «ΔΙΑΔΡΟΜΕΣ», υπότιτλος) εμφανίζονται ως κουτάκια. Μόνο το λατινικό "URBAN RESPONSE" και το "urbanresponse.lovable.app" βγήκαν σωστά.

Αιτία: χρησιμοποίησα DejaVu μέσω PIL χωρίς σωστό Unicode rendering για τους ελληνικούς χαρακτήρες.

## Τι θα κάνω
1. Κατεβάζω **Noto Sans** (regular + bold) — υποστηρίζει πλήρως ελληνικά και είναι ήδη η οικογένεια του project (Noto Sans Display headings, Inter body).
2. Ξαναφτιάχνω το `public/og-training-tracks.jpg` (1200×630) με **ακριβώς το ίδιο layout**:
   - ίδιο hero image (`hero-training-tracks.jpg`) με cover crop
   - ίδιο gradient overlay (σκούρο αριστερά → πιο ανοιχτό δεξιά)
   - πορτοκαλί accent bar + "URBAN RESPONSE" kicker
   - τίτλος δύο γραμμών: **ΕΚΠΑΙΔΕΥΤΙΚΕΣ / ΔΙΑΔΡΟΜΕΣ** (τώρα αναγνώσιμα)
   - υπότιτλος: «Πέντε επίπεδα. Από την επίγνωση έως την απόκριση.»
   - κάτω πορτοκαλί γραμμή + `urbanresponse.lovable.app`
3. Επαληθεύω ότι όλα τα γράμματα φαίνονται σωστά (QA με zoom στις τρεις γραμμές κειμένου) **πριν** σου το παραδώσω.
4. Τα meta tags στο `index.html` δεν χρειάζονται αλλαγή — δείχνουν ήδη στο ίδιο path (`/og-training-tracks.jpg`).

## Τι ΔΕΝ θα αλλάξει
- Διαστάσεις (1200×630), background image, χρώματα, layout, meta tags.
- Μόνο το font swap + re-render του κειμένου.
