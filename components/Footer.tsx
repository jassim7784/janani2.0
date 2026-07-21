"use client";

import styles from "../styles/Footer.module.css";

const WHATSAPP_NUMBER = "+919446915862"; // Replace with your WhatsApp number

const RAPHAEL_MEDIA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I visited the JANANI website and would like to know more about Raphael Media & Events."
)}`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} JANANI. All rights reserved.
        </span>

        <a
          href={RAPHAEL_MEDIA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.poweredBy}
        >
          Powered by Raphael Media & Events
        </a>
      </div>
    </footer>
  );
}