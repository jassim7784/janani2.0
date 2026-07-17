"use client";

import Image from "next/image";
import styles from "../styles/speakers.module.css";

const topSpeakers = [
  { name: "Mallika Sukumaran", role: "Distinguished Guest", image: null },
  { name: "Indulekha Warrier", role: "Distinguished Guest", image: null },
  { name: "Zaira Shaan", role: "Distinguished Guest", image: null },
  { name: "Elsa Royce", role: "Distinguished Guest", image: null },
  { name: "Anooja Bashir", role: "Distinguished Guest", image: null },
  { name: "Sara George Muthoot", role: "Distinguished Guest", image: null },
  { name: "Usha Titus IAS", role: "Distinguished Guest", image: null },
  { name: "Uma Thomas", role: "Distinguished Guest", image: null },
  { name: "Seena Tony Jose", role: "Distinguished Guest", image: null },
  { name: "Uthara Ramakrishnan", role: "Distinguished Guest", image: null },
  { name: "Nuzarath Jahan", role: "Distinguished Guest", image: null },
  { name: "Dr. Ashitha Menon", role: "Distinguished Guest", image: null },
  { name: "Leema Jacob", role: "Distinguished Guest", image: null },
  { name: "Arathy Krishna", role: "Distinguished Guest", image: null },
  { name: "Nisary Mahesh", role: "Distinguished Guest", image: null },
  { name: "Melani Shibu", role: "Distinguished Guest", image: null },
  { name: "Ashwathy Rajendran", role: "Distinguished Guest", image: null },
  { name: "Anupa Krishnan", role: "Distinguished Guest", image: null },
  { name: "Vardhini Sharma", role: "Distinguished Guest", image: null },
  { name: "Priyanka Nair", role: "Distinguished Guest", image: null },
  { name: "Anju Bobby George", role: "Distinguished Guest", image: null },
  { name: "M. M.", role: "Distinguished Guest", image: null },
];

const bottomSpeakers = [
  { name: "Dr. Susan Verghese", role: "Distinguished Guest", image: null },
  { name: "Dr. Rupa Mathew", role: "Distinguished Guest", image: null },
  { name: "RJ Neena", role: "Distinguished Guest", image: null },
  { name: "Sajna Sudheer", role: "Distinguished Guest", image: null },
  { name: "Safrina Latheef", role: "Distinguished Guest", image: null },
  { name: "Latha K.", role: "Distinguished Guest", image: null },
  { name: "Uma Preman", role: "Distinguished Guest", image: null },
  { name: "Anju Bist", role: "Distinguished Guest", image: null },
  { name: "Nibha Namboodiri", role: "Distinguished Guest", image: null },
  { name: "Soumya Thomas", role: "Distinguished Guest", image: null },
  { name: "Dr. Sneha Raju", role: "Distinguished Guest", image: null },
  { name: "Dr. Amrita Sabu", role: "Distinguished Guest", image: null },
  { name: "Jeemol Koruth Verghese", role: "Distinguished Guest", image: null },
  { name: "Justice Mary Joseph", role: "Distinguished Guest", image: null },
  { name: "Nisha Jose K. Mani", role: "Distinguished Guest", image: null },
  { name: "Amritha Rajan", role: "Distinguished Guest", image: null },
  { name: "Raaga Sankar", role: "Distinguished Guest", image: null },
  { name: "Anila Rajeev", role: "Distinguished Guest", image: null },
  { name: "Lena", role: "Distinguished Guest", image: null },
  { name: "Shweta Menon", role: "Distinguished Guest", image: null },
  { name: "Santhi Mayadevi", role: "Distinguished Guest", image: null },
];

type Speaker = {
  name: string;
  role: string;
  image: string | null;
};

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  if (speaker.image) {
    return (
      <article className={`${styles.card} ${styles.imageCard}`}>
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          sizes="(max-width: 768px) 45vw, 260px"
          className={styles.image}
        />

        <div className={styles.imageOverlay}>
          <h3>{speaker.name}</h3>
          <p>{speaker.role}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`${styles.card} ${styles.textCard}`}>
      <h3>{speaker.name}</h3>
      <p>{speaker.role}</p>
    </article>
  );
}

function SpeakerTrack({
  speakers,
  direction,
}: {
  speakers: Speaker[];
  direction: "left" | "right";
}) {
  const duplicatedSpeakers = [...speakers, ...speakers];

  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${
          direction === "right" ? styles.moveRight : styles.moveLeft
        }`}
      >
        {duplicatedSpeakers.map((speaker, index) => (
          <SpeakerCard
            key={`${speaker.name}-${index}`}
            speaker={speaker}
          />
        ))}
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section className={styles.speakers} id="speakers">
      <header className={styles.header}>
        <h2>
          DISTINGUISHED
          <br />
          GUESTS
        </h2>

        <p>
          Meet the voices shaping leadership,
          <br />
          empowerment and the future.
        </p>
      </header>

      <div className={styles.marquee}>
        <SpeakerTrack speakers={topSpeakers} direction="right" />
        <SpeakerTrack speakers={bottomSpeakers} direction="left" />
      </div>
    </section>
  );
}