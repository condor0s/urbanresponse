import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Μήνυμα εστάλη!",
      description: "Θα επικοινωνήσουμε μαζί σας σύντομα.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
          Επικοινωνία
        </p>
        <h1 style={{ fontSize: "42px", color: "#f5f5f5", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase", marginBottom: "24px" }}>
          Επικοινώνησε μαζί μας
        </h1>
        <p style={{ fontSize: "18px", color: "#a3a3a3", maxWidth: "600px", margin: "0 auto" }}>
          Για πληροφορίες σχετικά με τα τμήματα, τα επίπεδα και τη φιλοσοφία του Urban Response.
        </p>
      </section>

      <Section background="darker">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: "28px", color: "#f5f5f5", marginBottom: "32px", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase" }}>
              Στοιχεία Επικοινωνίας
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
              <a 
                href="tel:+306989040174"
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "20px", 
                  padding: "24px",
                  backgroundColor: "#141414",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeft = "3px solid #fe4e00";
                  e.currentTarget.style.paddingLeft = "21px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeft = "none";
                  e.currentTarget.style.paddingLeft = "24px";
                }}
              >
                <div style={{ width: "50px", height: "50px", backgroundColor: "#fe4e00", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={24} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#a3a3a3", marginBottom: "4px" }}>Κινητό</p>
                  <p style={{ fontSize: "18px", color: "#f5f5f5", fontWeight: 600 }}>(+30) 6989 040 174</p>
                </div>
              </a>

              <a 
                href="tel:+302310441777"
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "20px", 
                  padding: "24px",
                  backgroundColor: "#141414",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeft = "3px solid #fe4e00";
                  e.currentTarget.style.paddingLeft = "21px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeft = "none";
                  e.currentTarget.style.paddingLeft = "24px";
                }}
              >
                <div style={{ width: "50px", height: "50px", backgroundColor: "#1f1f1f", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={24} style={{ color: "#fe4e00" }} />
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#a3a3a3", marginBottom: "4px" }}>Σταθερό</p>
                  <p style={{ fontSize: "18px", color: "#f5f5f5", fontWeight: 600 }}>(+30) 2310 441777</p>
                </div>
              </a>

              <a 
                href="mailto:info@kravmagakalamarias.gr"
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "20px", 
                  padding: "24px",
                  backgroundColor: "#141414",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeft = "3px solid #fe4e00";
                  e.currentTarget.style.paddingLeft = "21px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeft = "none";
                  e.currentTarget.style.paddingLeft = "24px";
                }}
              >
                <div style={{ width: "50px", height: "50px", backgroundColor: "#1f1f1f", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={24} style={{ color: "#fe4e00" }} />
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#a3a3a3", marginBottom: "4px" }}>Email</p>
                  <p style={{ fontSize: "18px", color: "#f5f5f5", fontWeight: 600 }}>info@kravmagakalamarias.gr</p>
                </div>
              </a>

              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "flex-start", 
                  gap: "20px", 
                  padding: "24px",
                  backgroundColor: "#141414",
                  borderRadius: "4px",
                }}
              >
                <div style={{ width: "50px", height: "50px", backgroundColor: "#1f1f1f", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={24} style={{ color: "#fe4e00" }} />
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#a3a3a3", marginBottom: "4px" }}>Διεύθυνση</p>
                  <p style={{ fontSize: "18px", color: "#f5f5f5", fontWeight: 600 }}>
                    Εθνικής Αντιστάσεως 16<br />
                    Καλαμαριά, 55 133
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ fontSize: "28px", color: "#f5f5f5", marginBottom: "32px", fontFamily: "'Roboto Condensed', sans-serif", textTransform: "uppercase" }}>
              Στείλε Μήνυμα
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", color: "#a3a3a3", marginBottom: "8px" }}>
                  Ονοματεπώνυμο *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid #333333",
                    color: "#f5f5f5",
                    padding: "16px",
                    fontSize: "16px",
                  }}
                  placeholder="Το όνομά σας"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "14px", color: "#a3a3a3", marginBottom: "8px" }}>
                  Email *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid #333333",
                    color: "#f5f5f5",
                    padding: "16px",
                    fontSize: "16px",
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "14px", color: "#a3a3a3", marginBottom: "8px" }}>
                  Τηλέφωνο
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid #333333",
                    color: "#f5f5f5",
                    padding: "16px",
                    fontSize: "16px",
                  }}
                  placeholder="69xxxxxxxx"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "14px", color: "#a3a3a3", marginBottom: "8px" }}>
                  Μήνυμα *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid #333333",
                    color: "#f5f5f5",
                    padding: "16px",
                    fontSize: "16px",
                    minHeight: "150px",
                    resize: "vertical",
                  }}
                  placeholder="Το μήνυμά σας..."
                />
              </div>

              <Button
                type="submit"
                style={{
                  backgroundColor: "#fe4e00",
                  color: "#fff",
                  padding: "18px 32px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Send size={18} />
                Αποστολή
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Map */}
      <section style={{ height: "450px", backgroundColor: "#141414" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7899999999995!2d22.9516!3d40.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41428e0ed%3A0x9bae715b8d574a9e!2sEthnikis%20Antistaseos%2016%2C%20Kalamaria%20551%2033!5e0!3m2!1sen!2sgr!4v1600000000000!5m2!1sen!2sgr"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Urban Response Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
