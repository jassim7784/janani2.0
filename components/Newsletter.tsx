"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Newsletter.module.css";

const snippets = [
  "/images/chandrika.png",
  "/images/janabhoomi.png",
  "/images/keralajanayugam.png",
  "/images/keralakaumudi.png",
  "/images/keralapranvam.png",
  "/images/malayalamanorama.png",
  "/images/mangalam.png",
  "/images/mathrubhumi.png",
  "/images/metrovartha.png",
];

export default function NewspaperSnippets() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let frame: number;

    const animate = () => {
      if (!paused) {
        slider.scrollLeft += 0.7;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [paused]);

  const scroll = (amount: number) => {
    sliderRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>

          <div>
            <p className={styles.label}>JANANI / 2026</p>

            <h2 className={styles.title}>
              NEWSPAPER
              <br />
              SNIPPETS.
            </h2>

            <p className={styles.subtitle}>
              Coverage from leading newspapers documenting the
              journey, vision and impact of JANANI 2026.
            </p>
          </div>

          

        </div>
      </div>

      <div className={styles.slider} ref={sliderRef}>
        {[...snippets, ...snippets].map((image, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.paper}>
              <Image
                src={image}
                alt=""
                fill
                sizes="450px"
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}