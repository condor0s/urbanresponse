## Στόχος
Δύο social banners σε editorial/composed στυλ (όχι απλό overlay) που επικοινωνούν το concept της ανάρτησης: «Η βία δεν είναι πάντα εμφανής — η πρόληψη ξεκινά από την παρατήρηση».

## Παραδοτέα
1. **Facebook τετράγωνο** — `1080×1080` → `/mnt/documents/urban-response-fb-square.jpg`
2. **Instagram (νέο format)** — `1080×1350` (4:5 portrait, το νέο default του IG feed) → `/mnt/documents/urban-response-ig-portrait.jpg`

> Σημείωση: Το IG πλέον προωθεί επίσης 1080×1920 (full-bleed). Αν προτιμάς αυτό αντί για 4:5, πες το πριν την υλοποίηση.

## Concept σύνθεσης (κοινό και για τα δύο)
Editorial poster-style, όχι «φωτογραφία + κείμενο από πάνω». Δομή σε layers:

- **Base layer**: Η φωτογραφία (σιλουέτες στο σοκάκι) σε desaturated cool blue, με σκούρο vignette και προσθήκη grain για film texture. Τοποθετημένη με crop ώστε οι σιλουέτες να μην καλύπτονται από το κείμενο.
- **Cinematic overlay**: Σκούρο gradient (μαύρο→διαφανές) από πάνω και κάτω για να «κάθεται» το typography. Λεπτή πορτοκαλί scanline / accent γραμμή που διασχίζει τη σύνθεση.
- **Targeting/observation motif**: Λεπτά γεωμετρικά crosshair brackets ([ ]) γύρω από μία σιλουέτα — οπτικοποιεί το «αναγνωρίζεις σημάδια / παρατήρηση». Σε διακριτικό πορτοκαλί #fe4e00, χαμηλό opacity.
- **Typography stack** (Noto Sans Display, all-caps για τίτλο):
  - Kicker: `URBAN RESPONSE®` (μικρό, tracked-out, λευκό)
  - Headline: `Η ΒΙΑ ΔΕΝ ΕΙΝΑΙ ΠΑΝΤΑ ΕΜΦΑΝΗΣ.` (μεγάλο, condensed, λευκό — με τη λέξη «ΕΜΦΑΝΗΣ» σε πορτοκαλί ή με slash accent)
  - Sub-line: `Η πρόληψη ξεκινά από την παρατήρηση.` (Inter, μεσαίο, ανοιχτό γκρι)
  - Micro tags κάτω: `#Awareness  ·  #UrbanSafety  ·  #PersonalProtection`
- **Logo**: Το επίσημο `Urban-Response®_Logo.png` (transparent) τοποθετημένο διακριτικά — κάτω-δεξιά για FB, κάτω-κέντρο για IG portrait. Μέγεθος ~12% του πλάτους, όχι dominant.

## Διαφοροποιήσεις ανά format
- **FB 1080×1080**: Headline αριστερά, σιλουέτες δεξιά. Split balance.
- **IG 1080×1350**: Vertical stack — φωτογραφία πάνω 60%, μαύρο typography block κάτω 40% με headline + sub + logo.

## Τεχνική εκτέλεση
- Python script με Pillow:
  - Φόρτωση `/mnt/user-uploads/shutterstock_2711492055.jpg` και `/mnt/user-uploads/Urban-Response®_Logo-3.png`
  - Color grade (desaturate + cool tint), vignette, grain noise
  - Composite layers + γεωμετρικά brackets με `ImageDraw`
  - Typography με Noto Sans / Inter (κατέβασμα από Google Fonts αν χρειαστεί)
  - Export σε JPG quality 92
- QA: View κάθε output, έλεγχος για overflow/legibility/contrast πριν παράδοση.

## Τι ΔΕΝ θα κάνω
- Δεν θα χρησιμοποιήσω imagegen (AI generation) — μόνο compositing της δικιάς σου φωτό + logo.
- Δεν θα αλλάξω/επεξεργαστώ το logo.
- Δεν θα αγγίξω website code.
