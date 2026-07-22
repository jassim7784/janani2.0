"use client";

import Image from "next/image";
import styles from "../styles/sponsors.module.css";

const logos = [
  "/logos/atip.png",
  "/logos/Mediahawks.png",
  "/logos/rapheallogo.png",
]

export default function FeaturedIn() {
  return (
    <section className={styles.section}>

      <p className={styles.label}>
        FEATURED IN
      </p>

      <div className={styles.marquee}>

        <div className={styles.track}>

          {[...logos, ...logos].map((logo, index) => (
            <div className={styles.logo} key={index}>
              <Image
                src={logo}
                alt=""
                width={170}
                height={70}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}