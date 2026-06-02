# Νέα σελίδα: Specialized Training Pathways

## Τίτλος στο Navigation Menu
**"Εκπαιδευτικές Διαδρομές"** (URL: `/training-tracks`)

Ταιριάζει με το υπόλοιπο menu που είναι στα ελληνικά (Αρχική, Σχετικά, Ο Εκπαιδευτής, Αποστολή & Όραμα, FAQ, Επικοινωνία) και αντικατοπτρίζει σωστά τον όρο "Specialized Training Pathways".

## Δομή Σελίδας

Ίδιο look & feel με τις υπόλοιπες σελίδες: dark theme (#0a0a0a), accent #fe4e00, Roboto Condensed για τίτλους, χρήση των υπαρχόντων components (`Layout`, `HeroSection`, `Section`, `FeatureCard`).

### 1. Hero Section
- Background: urban/noir εικόνα (επαναχρησιμοποίηση `hero-urban-night.jpg` ή παρόμοιας)
- Subtitle: "URBAN RESPONSE® SYSTEM"
- Title: "ΕΞΕΙΔΙΚΕΥΜΕΝΕΣ ΕΚΠΑΙΔΕΥΤΙΚΕΣ ΔΙΑΔΡΟΜΕΣ"
- Description: το εισαγωγικό κείμενο ("Το Urban Response® δεν αποτελεί απλώς ένα πρόγραμμα...")

### 2. Intro Section
Σύντομη εισαγωγή με το δεύτερο εισαγωγικό κείμενο για τις εξειδικευμένες διαδρομές.

### 3. Core Program Section (highlighted)
Ξεχωριστή ενότητα με έντονο accent border για το **Urban Response® Core Program** ως θεμελιώδες πρόγραμμα. Λίστα με τα 5 modules (Situational Awareness, Prevention & Avoidance, Threat Assessment, Urban Control, Leadership Under Pressure) + περιγραφή.

### 4. Specialized Tracks Grid
Grid (2 στήλες desktop, 1 στήλη mobile) με 5 κάρτες-tracks. Κάθε κάρτα περιλαμβάνει:
- Εικονίδιο (lucide-react: School, Users, Briefcase, Building2, Shield)
- Τίτλος track
- Σύντομη περιγραφή
- "Απευθύνεται σε:" λίστα
- "Αντικείμενα εκπαίδευσης:" λίστα
- Closing statement

Tracks:
1. **School Safety & Education Track** — School icon
2. **Family Protection Track** — Users icon
3. **Corporate Safety Track** — Briefcase icon
4. **Community Safety Track** — Building2 icon
5. **Women's Personal Safety Track** — Shield icon

### 6. The Urban Response® Approach
Closing section με τη φιλοσοφία. 4 pillars σε οριζόντια διάταξη: **Awareness → Prevention → Decision → Response** (με βέλη/separators σε accent χρώμα). Από κάτω το statement "Urban Response® – Prepared for Reality." σαν τονισμένο tagline.

### 7. CTA Section
Κουμπί προς `/contact` με κείμενο "Ενδιαφέρεστε για ένα πρόγραμμα;" → "Επικοινωνήστε μαζί μας".

## Τεχνικά (technical notes)

- Νέο αρχείο: `src/pages/TrainingTracks.tsx`
- Update `src/App.tsx`: import + route `<Route path="/training-tracks" element={<TrainingTracks />} />` πριν το catch-all
- Update `src/components/Header.tsx`: προσθήκη `{ path: "/training-tracks", label: "Εκπαιδευτικές Διαδρομές" }` στο `navItems` (μετά το "Αποστολή & Όραμα")
- Update `src/components/Footer.tsx`: αντίστοιχο link αν υπάρχει sitemap
- Χρήση υπαρχόντων components για συνέπεια· νέο μικρό `TrackCard` component για τις κάρτες των tracks (με λίστες "Απευθύνεται σε" / "Αντικείμενα")
- Όλα τα κείμενα verbatim όπως δόθηκαν
- Mobile-responsive με τα ίδια breakpoints
