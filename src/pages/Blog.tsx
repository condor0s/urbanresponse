import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { blogPosts } from "@/data/blogPosts";

import heroImage from "@/assets/hero-urban-night.jpg";

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

const Blog = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Blog"
        title="Άρθρα & Νέα"
        description="Σκέψεις, τεχνικές και γνώση από τον κόσμο της αστικής ασφάλειας και προσωπικής προστασίας."
        backgroundImage={heroImage}
        height="55vh"
      />

      <Section background="darker">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              style={{
                backgroundColor: "#141414",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid #1f1f1f",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#fe4e00";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1f1f1f";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Category bar */}
              <div
                style={{
                  height: "4px",
                  backgroundColor: categoryColors[post.category] ?? "#fe4e00",
                }}
              />

              <div style={{ padding: "36px", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Meta */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: categoryColors[post.category] ?? "#fe4e00",
                    }}
                  >
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#f5f5f5",
                    fontFamily: "'Noto Sans Display', sans-serif",
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                    marginBottom: "16px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#a3a3a3",
                    lineHeight: 1.8,
                    marginBottom: "28px",
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid #1f1f1f",
                    paddingTop: "20px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#fe4e00",
                      textDecoration: "none",
                      transition: "gap 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
                  >
                    Διάβασε <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;
