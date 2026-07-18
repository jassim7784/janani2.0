"use client";

import Image from "next/image";
import styles from "../styles/speakers.module.css";

type Speaker = {
  name: string;
  role: string;
  image: string | null;
};

/* ===========================
   ALL SPEAKERS
=========================== */

const speakers: Speaker[] = [
  {
    name: "Mallika Sukumaran",
    role: "Senior Cine Artist",
    image: "/images/Mallika Sukumaran.png",
  },
  {
    name: "Anooja Bashir",
    role: "Entrepreneur",
    image: "/images/Anooja Bashir.png",
  },
  {
    name: "Indulekha Warrier",
    role: "Singer",
    image: "/images/Indhulekha Warrier.png",
  },
  {
    name: "Zaira Shaan",
    role: "MD - Eternal Ray Productions",
    image: "/images/Zaira Shaan.png",
  },
  {
    name: "Elsa Royce",
    role: "Entrepreneur",
    image: "/images/Elsa Royce.png",
  },
  {
    name: "Sara George Muthoot",
    role: "Educationist",
    image: "/images/sarageorge.png",
  },
  {
    name: "Usha Titus IAS",
    role: "Civil Service Officer",
    image: "/images/Usha Titus.png",
  },
  {
    name: "Uma Thomas",
    role: "MLA",
    image: "/images/Uma Thomas.png",
  },
  {
    name: "Seena Tony Jose",
    role: "Environmentalist",
    image: "/images/seena-tony-jose.png",
  },
  {
    name: "Uthara Ramakrishnan",
    role: "Finance Professional",
    image: "/images/Uthara Ramakrishnan.png",
  },
  {
    name: "Dr Ashitha Menon",
    role: "Doctor",
    image: "/images/Dr. Ashitha.png",
  },

  // Uncomment these when images are available
  
  {
    name: "Leema Jacob",
    role: "Politician",
    image: "/images/Leema Jacob.jpeg",
  },
  {
    name: "Arathy Krishna",
    role: "Bodybuilder",
    image: "/images/Arathy Krishnan.png",
  },
  {
    name: "Nisary Mahesh",
    role: "CEO, HerMoneyTalks",
    image: "/images/Nisary Mahesh.png",
  },
  {
    name: "Melani Shibu",
    role: "Professional",
    image: "/images/Melani Shibu.png",
  },
  {
    name: "Ashwathy Rajendran",
    role: "Academic Researcher",
    image: "/images/Ashwathy Rajendran.png",
  },
  {
    name: "Anupa Krishnan",
    role: "Model",
    image: "/images/Anupa Krishnan.png",
  },
  {
    name: "Vardhini Sharma",
    role: "Singer",
    image: "/images/Vardhini Sharma.png",
  },
  {
    name: "Priyanka Nair",
    role: "Actress",
    image: "/images/Priyanka Nair.png",
  },
  {
    name: "Anju Bobby George",
    role: "Athlete",
    image: "/images/Anju Bobby George.png",
  },
  {
    name: "Dr. Rupa Mathew",
    role: "Doctor",
    image: "/images/Dr. Rupa Mathew.png",
  },
  {
    name: "RJ Neena",
    role: "Radio Jockey",
    image: "/images/RJ Neena.png",
  },
  {
    name: "Sajna Sudheer",
    role: "Television Personality",
    image: "/images/Sajna Sudheer.png",
  },
  {
    name: "Safrina Latheef",
    role: "Professional",
    image: "/images/Safrina Latheef.png",
  },
  {
    name: "Latha K",
    role: "Professional",
    image: "/images/Latha K",
  },
  {
    name: "Uma Preman",
    role: "Social Activist",
    image: "/images/Uma Preman.png",
  },
  {
    name: "Anju Bist",
    role: "Professional",
    image: "/images/Anju Bist.png",
  },
  {
    name: "Nibha Namboodiri",
    role: "Professional",
    image: "/images/Nibha Namboodiri.png",
  },
  {
    name: "Soumya Thomas",
    role: "Professional",
    image: "/images/Soumya Thomas.png",
  },
  {
    name: "Dr. Sneha Raju",
    role: "Doctor",
    image: "/images/Dr. Sneha Raju.png",
  },
  {
    name: "Dr. Amrita Sabu",
    role: "Doctor",
    image: "/images/Dr Amrita Sabu.jpeg",
  },
  {
    name: "Jeemol Koruth Verghese",
    role: "Professional",
    image: "/images/Jeemol Koruth Verghese",
  },
  {
    name: "Justice Mary Joseph",
    role: "Judge",
    image: "/images/Justice Mary Joseph.jpeg",
  },
  {
    name: "Nisha Jose K. Mani",
    role: "Public Figure",
    image: "/images/Nisha Jose K. Mani",
  },
  {
    name: "Amritha Rajan",
    role: "Professional",
    image: "/images/Amritha Rajan",
  },
  {
    name: "Raaga Sankar",
    role: "Professional",
    image: "/images/Raaga Shankar.png",
  },
  {
    name: "Anila Rajeev",
    role: "Professional",
    image: "/images/Anila Rajeev.png",
  },
  {
    name: "Lenaa Kumar",
    role: "Actress",
    image: "/images/lena.png",
  },
  
];

/* ===========================
   SPLIT INTO TWO ROWS
=========================== */

const middle = Math.ceil(speakers.length / 2);

const topSpeakers = speakers.slice(0, middle);
const bottomSpeakers = speakers.slice(middle);

/* ===========================
   SPEAKER CARD
=========================== */

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  if (!speaker.image) {
    return (
      <article className={`${styles.card} ${styles.textCard}`}>
        <h3>{speaker.name}</h3>
        <p>{speaker.role}</p>
      </article>
    );
  }

  return (
    <article className={`${styles.card} ${styles.imageCard}`}>
      <Image
        src={speaker.image}
        alt={speaker.name}
        fill
        priority={false}
        sizes="(max-width: 768px) 45vw, (max-width: 1200px) 25vw, 320px"
        className={styles.image}
      />

      <div className={styles.imageOverlay}>
        <div>
          <h3>{speaker.name}</h3>
          <p>{speaker.role}</p>
        </div>
      </div>
    </article>
  );
}

/* ===========================
   MARQUEE ROW
=========================== */

type SpeakerTrackProps = {
  speakers: Speaker[];
  direction: "left" | "right";
};

function SpeakerTrack({
  speakers,
  direction,
}: SpeakerTrackProps) {
  const duplicated = [...speakers, ...speakers];

  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${
          direction === "left"
            ? styles.moveLeft
            : styles.moveRight
        }`}
      >
        {duplicated.map((speaker, index) => (
          <SpeakerCard
            key={`${speaker.name}-${index}`}
            speaker={speaker}
          />
        ))}
      </div>
    </div>
  );
}

/* ===========================
   COMPONENT
=========================== */

export default function Speakers() {
  return (
    <section className={styles.speakers} id="speakers">
      <header className={styles.header}>
        <h2>
          PANELISTS
        </h2>

        <p>
          Meet the voices shaping leadership,
          <br />
          empowerment and the future.
        </p>
      </header>

      <div className={styles.marquee}>
        <SpeakerTrack
          speakers={topSpeakers}
          direction="right"
        />

        {bottomSpeakers.length > 0 && (
          <SpeakerTrack
            speakers={bottomSpeakers}
            direction="left"
          />
        )}
      </div>
    </section>
  );
}