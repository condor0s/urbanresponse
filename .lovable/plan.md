## Πλάνο (Επιλογή B — 1200×630 FB standard)

1. **Element-screenshot του hero section** στο φυσικό του ύψος (χωρίς να το στριμώξω) → capture 1200×~780.
2. **Center-crop** σε 1200×630 ώστε το πορτοκαλί `inset:32px` frame να παραμείνει οπτικά κεντραρισμένο (ίδιο περιθώριο πάνω/κάτω/αριστερά/δεξιά) γύρω από το content.
3. **® fix**: αλλαγή σε `font-size: 0.4em; vertical-align: super; top: -1em` ώστε το R να κάθεται πάνω από το cap-height του E, όχι στη μέση του.
4. **Έξοδοι**:
   - `/mnt/documents/constitution-og.jpg`
   - `src/assets/constitution-og.jpg`
   - `public/og-constitution.jpg`
5. **QA**: μέτρηση pixel των margins (top/bottom/left/right του frame) για επιβεβαίωση ισότητας πριν το παραδώσω.
