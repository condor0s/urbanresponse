import Layout from "@/components/Layout";
import Section from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Τι είναι το Urban Response;",
    answer: "Το Urban Response είναι ένα σύγχρονο πλαίσιο αστικής ασφάλειας και προσωπικής προστασίας. Εστιάζει στην πρόληψη, την επίγνωση του περιβάλλοντος και τη σωστή λήψη αποφάσεων στην καθημερινή ζωή μέσα στην πόλη. Στόχος του Urban Response είναι να βοηθά τους ανθρώπους να αναγνωρίζουν έγκαιρα τον κίνδυνο, να αποφεύγουν την εμπλοκή και να επιστρέφουν με ασφάλεια στο σπίτι τους.",
  },
  {
    question: "Είναι πολεμική τέχνη;",
    answer: "Όχι. Το Urban Response δεν είναι πολεμική τέχνη, άθλημα ή σύστημα μάχης. Δεν βασίζεται στον ανταγωνισμό ή στη σύγκρουση. Η φυσική αντίδραση αποτελεί μόνο ένα μικρό μέρος της συνολικής εκπαίδευσης και χρησιμοποιείται αποκλειστικά όταν η αποφυγή δεν είναι πλέον εφικτή.",
  },
  {
    question: "Διδάσκετε αυτοάμυνα;",
    answer: "Διδάσκουμε αυτοπροστασία, όχι μάχη. Η εκπαίδευση επικεντρώνεται στην αποφυγή, την αποκλιμάκωση και τη σωστή απόφαση πριν την εμπλοκή. Όταν απαιτείται φυσική αντίδραση, αυτή έχει ως στόχο τη διακοπή της κατάστασης και την ασφαλή απομάκρυνση — όχι την επικράτηση ή την τιμωρία του άλλου.",
  },
  {
    question: "Απευθύνεται μόνο σε άτομα με εμπειρία;",
    answer: "Όχι. Το Urban Response απευθύνεται σε άνδρες και γυναίκες κάθε ηλικίας και φυσικής κατάστασης. Η εκπαίδευση προσαρμόζεται στο επίπεδο, τις δυνατότητες και τις ανάγκες κάθε συμμετέχοντα, χωρίς να απαιτείται προηγούμενη εμπειρία.",
  },
  {
    question: "Χρειάζεται καλή φυσική κατάσταση;",
    answer: "Όχι απαραίτητα. Η έμφαση δίνεται στη σκέψη, την επίγνωση και τη σωστή απόφαση, όχι στη δύναμη ή την αθλητική απόδοση. Η φυσική κατάσταση βοηθά, αλλά δεν είναι προϋπόθεση για να συμμετάσχει κάποιος.",
  },
  {
    question: "Τι ρόλο παίζει η φυσική αυτοπροστασία;",
    answer: "Η φυσική αυτοπροστασία αποτελεί ένα εκπαιδευτικό σκέλος του Urban Response και χρησιμοποιείται μόνο όταν η αποφυγή και η αποκλιμάκωση δεν είναι πλέον δυνατές. Η εκπαίδευση εστιάζει σε απλές, λειτουργικές αντιδράσεις με στόχο τη διακοπή της εμπλοκής, τη δημιουργία χώρου και την ασφαλή απομάκρυνση.",
  },
  {
    question: "Είναι το Urban Response στρατιωτική ή παραστρατιωτική εκπαίδευση;",
    answer: "Όχι. Το Urban Response είναι πολιτική εκπαίδευση αστικής ασφάλειας, σχεδιασμένη για την καθημερινή ζωή και όχι για στρατιωτική ή επιχειρησιακή χρήση. Δεν περιλαμβάνει τακτικές μάχης ή στρατιωτική εκπαίδευση.",
  },
  {
    question: "Τι δεν είναι το Urban Response;",
    answer: "Δεν είναι πολεμική τέχνη. Δεν είναι άθλημα. Δεν είναι σύστημα μάχης. Δεν είναι στρατιωτική ή παραστρατιωτική εκπαίδευση. Δεν προωθεί τη βία ή την επιθετικότητα.",
  },
  {
    question: "Τι κάνει το Urban Response διαφορετικό;",
    answer: "Η έμφαση στην πρόληψη, τη σκέψη και τη σωστή απόφαση πριν την εμπλοκή. Το Urban Response δεν εκπαιδεύει ανθρώπους για να κερδίζουν συγκρούσεις, αλλά για να τις αποφεύγουν και να διαχειρίζονται τον κίνδυνο με ψυχραιμία και υπευθυνότητα.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Header */}
      <section 
        style={{ 
          padding: "160px 24px 80px", 
          backgroundColor: "#0a0a0a",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#fe4e00", marginBottom: "16px" }}>
          FAQ
        </p>
        <h1 style={{ fontSize: "42px", color: "#f5f5f5", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase", marginBottom: "24px" }}>
          Συχνές Ερωτήσεις
        </h1>
        <p style={{ fontSize: "18px", color: "#a3a3a3", maxWidth: "600px", margin: "0 auto" }}>
          Ποιοι είμαστε & τι δεν είμαστε
        </p>
      </section>

      {/* FAQ Accordion */}
      <Section background="darker" padding="large">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                style={{
                  backgroundColor: "#141414",
                  marginBottom: "12px",
                  borderRadius: "4px",
                  border: "1px solid #333333",
                  overflow: "hidden",
                }}
              >
                <AccordionTrigger 
                  style={{
                    padding: "24px",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#f5f5f5",
                    textAlign: "left",
                    fontFamily: "'Roboto Condensed', sans-serif",
                  }}
                  className="hover:no-underline hover:text-primary [&[data-state=open]]:text-primary"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  style={{
                    padding: "0 24px 24px",
                    fontSize: "16px",
                    color: "#a3a3a3",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQ;
