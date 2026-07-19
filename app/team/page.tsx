import Image from "next/image";
import Link from "next/link";
import styles from "./team.module.css";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

type TeamGroup = {
  index: string;
  label: string;
  description: string;
  members: TeamMember[];
};

const teamGroups: TeamGroup[] = [
  {
    index: "01",
    label: "House of Kalam",
    description:
      "The family and foundation leadership carrying forward Dr. A.P.J. Abdul Kalam's enduring vision of service and nation-building.",
    members: [
      {
        id: "01",
        name: "Dr. A.P.J.M. Nazema Maraikayar",
        role: "Chairman, AKIF",
        image: "/images/nazema-maraikayar.jpg",
      },
      {
        id: "02",
        name: "APJM Jainulabudeen",
        role: "Secretary, AKIF",
        image: "/images/team/jainulabudeen.jpg",
      },
      {
        id: "03",
        name: "APJMJ Sheik Saleem",
        role: "Co-Founder, AKIF",
        image: "/images/sheik-saleem.jpg",
      },
      {
        id: "04",
        name: "APJMJ Sheik Davood",
        role: "Kalam Family",
        image: "/images/sheik-davood.jpg",
      },
    ],
  },
  {
    index: "02",
    label: "Janani Leadership",
    description:
      "The leadership guiding JANANI 2026 with commitment, purpose and a shared belief in the power of collective action.",
    members: [
      {
        id: "05",
        name: "Dr. Jerry Mathew",
        role: "Executive Chairman, Director, Medical & Education",
        image: "/images/chairman.jpg",
      },
      {
        id: "06",
        name: "Capt. Prakash Kumar",
        role: "Senior Mentor, National Co-Ordinator, Executive Director Media & Films",
        image: "/images/pradeep.png",
      },
    ],
  },
  {
    index: "03",
    label: "Core Team",
    description:
      "The committed people working behind the scenes to translate the JANANI vision into a meaningful national movement.",
    members: [
      {
        id: "07",
        name: "Gurdeep Kaur",
        role: "Core Team",
        image: "/images/gurdeepkaur.png",
      },
      {
        id: "08",
        name: "Olivia Seira Raiju",
        role: "Core Team",
        image: "/images/team/oliviya.jpg",
      },
      {
        id: "09",
        name: "Karthika Das",
        role: "Core Team",
        image: "/images/team/karthika-das.jpg",
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <main className={styles.page}>
      <section className={styles.team}>
        <div className={styles.container}>
          {/* PAGE META */}
          <div className={styles.pageMeta}>
            <span>People Behind Janani</span>
            <span>Team / 2026</span>
          </div>

          {/* HERO */}
          <header className={styles.hero}>
            <h1 className={styles.title}>
              MEET
              <br />
              OUR TEAM
            </h1>

            <div className={styles.heroInfo}>
              <span className={styles.heroLabel}>
                JANANI / PEOPLE
              </span>

              <p>
                Family, leadership and committed individuals united by
                a shared vision of service, empowerment and
                nation-building.
              </p>
            </div>
          </header>

          {/* TEAM DIRECTORY */}
          <div className={styles.teamGroups}>
            {teamGroups.map((group) => (
              <section
                className={styles.teamGroup}
                key={group.index}
              >
                {/* GROUP HEADER */}
                <div className={styles.groupHeader}>
                  <span className={styles.groupIndex}>
                    {group.index}
                  </span>

                  <h2>{group.label}</h2>

                  <span className={styles.memberCount}>
                    {String(group.members.length).padStart(2, "0")}{" "}
                    PEOPLE
                  </span>
                </div>

                <p className={styles.groupDescription}>
                  {group.description}
                </p>

                {/* MEMBER GRID */}
                <div
                  className={`${styles.teamGrid} ${
                    group.members.length === 4
                      ? styles.fourColumnGrid
                      : group.members.length === 2
                        ? styles.twoColumnGrid
                        : styles.threeColumnGrid
                  }`}
                >
                  {group.members.map((member) => (
                    <article
                      className={styles.teamCard}
                      key={member.id}
                    >
                      <div className={styles.imageWrapper}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
                          className={styles.teamImage}
                        />

                        <span className={styles.memberIndex}>
                          {member.id}
                        </span>

                      </div>

                      <div className={styles.cardContent}>
                        <span className={styles.role}>
                          {member.role}
                        </span>

                        <h3 className={styles.name}>
                          {member.name}
                        </h3>

                        <div className={styles.cardFooter}>
                          <span>JANANI 2026</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* FOOTER */}
          <div className={styles.bottomBar}>
            <span>JANANI 2026</span>

            <span>09 PEOPLE / ONE SHARED VISION</span>
          </div>

          <Link href="/" className={styles.backLink}>
            <span>Back to home</span>
            <span aria-hidden="true">↙</span>
          </Link>
        </div>
      </section>
    </main>
  );
}