## Στόχος
Featured/OG image (1200×630) που αναπαράγει το hero του `/constitution` — background, emblem, orange divider + "Καταστατικό Λειτουργίας · Έκδοση 1.0", τίτλος, υπότιτλος — με σωστή αναφορά **Urban Response®** (με το ® σε εκθέτη) όπου εμφανίζεται το brand.

## Πλάνο

1. **Brand mark με ®**
   - Στο hero markup δεν εμφανίζεται σήμερα το κείμενο "Urban Response" — το brand φαίνεται μόνο μέσω του emblem/logo. Θα προσθέσω μια μικρή γραμμή brand πάνω από το divider: `URBAN RESPONSE®` (το ® ως `<sup>` σε εκθέτη, μικρότερο μέγεθος, ίδιο orange accent) **μόνο στο render της OG image**, χωρίς να πειράξω το live hero της σελίδας.
   - Εναλλακτικά, αν προτιμάς, να μπει και στο live hero.

2. **Render 1200×630 μέσω Playwright**
   - Άνοιγμα `/constitution` σε viewport 1200×630.
   - DOM injection της γραμμής `Urban Response®` για το screenshot.
   - Element screenshot του hero `<section>` clipped στα 1200×630.

3. **Αποθήκευση**
   - `src/assets/constitution-og.jpg` (για χρήση ως og:image)
   - `/mnt/documents/constitution-og.jpg` (για download)

4. **Meta tags (προαιρετικό)**
   Το site είναι SPA, οπότε ο Facebook crawler δεν εκτελεί JS — τα OG tags πρέπει να μπουν στο `index.html`.
   - **A)** Auto: προσθήκη `og:image` (+ og:title/description/type, twitter:card) στο `index.html` που δείχνει στη νέα εικόνα.
   - **B)** Μόνο η εικόνα — τη βάζεις χειροκίνητα ως featured image στο FB post.

## Ερωτήσεις
1. Το `Urban Response®` να μπει **μόνο στην OG image** ή και στο live hero της σελίδας;
2. Προτιμάς **A** (auto OG tags στο site) ή **B** (μόνο η εικόνα);
