"use client";

import styles from "../styles/blogs.module.css";
import Image from "next/image";

const blogs = [
  {
    title: "Janani Women Conclave 2026",
    source: "BizCuts",
    image: "/images/blogs/bizcuts.jpg",
    excerpt:
      "An overview of Janani 2026 highlighting its vision of celebrating women leadership, nation-building and social impact.",
    url: "https://bizcuts.com/janani-womenconclave-kochi/",
    tag: "Featured Story",
  },
  {
    title: "Janani 2026 Highlights",
    source: "Facebook",
    image: "/images/blogs/facebook-cover.jpg",
    excerpt:
      "Event photographs, audience moments, speaker highlights and behind-the-scenes coverage from the official launch.",
    url: "https://www.facebook.com/share/p/1EdQNCbAaz/",
    tag: "Social Coverage",
  },
];

export default function MediaCoverage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <p className={styles.label}>JANANI / 2026</p>

          <h2 className={styles.title}>
            MEDIA
            <br />
            COVERAGE.
          </h2>

          <p className={styles.subtitle}>
            Stories, articles and social coverage documenting the
            journey of Janani 2026.
          </p>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog, index) => (
            <article key={index} className={styles.card}>

              <div className={styles.imageWrapper}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.badge}>{blog.tag}</span>

                <p className={styles.source}>{blog.source}</p>

                <h3>{blog.title}</h3>

                <p>{blog.excerpt}</p>

                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Read Article →
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}