import Link from "next/link";
import styles from "../styles/TeamIntro.module.css";


const groups = [
  {
    index: "01",
    label: "Kalam's Family",
     
  },
  {
    index: "02",
    label: "Janani Leadership",
    
  },
  {
    index: "03",
    label: "Core Team",
    
    
  },
];

export default function TeamIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionMeta}>
          <span>People Behind Janani</span>
          
        </div>

        <div className={styles.hero}>
          <h2 className={styles.title}>
            BUILT BY
            <br />
            PEOPLE WHO
            <br />
            BELIEVE IN
            <br />
            THE VISION.
          </h2>

          <div className={styles.sideMeta}>
            <span>JANANI / 2026</span>

            <p>
              A collective of family, leadership and committed people
              carrying forward a shared vision of service and
              nation-building.
            </p>
          </div>
        </div>

        <div className={styles.quoteCard}>
          <div className={styles.quoteTop}>
            <span>Words that guide us</span>
            
          </div>

          <blockquote className={styles.quote}>
            “GREAT DREAMS
            <br />
            OF GREAT DREAMERS
            <br />
            ARE ALWAYS
            <br />
            TRANSCENDED.”
          </blockquote>

          <div className={styles.quoteFooter}>
            <span>— DR. A.P.J. ABDUL KALAM</span>

            <span className={styles.quoteMark}>“</span>
          </div>
        </div>

        <div className={styles.directory}>
          <div className={styles.directoryHeader}>
            <span>Our People</span>
           
          </div>

          <div className={styles.groups}>
            {groups.map((group) => (
              <div className={styles.group} key={group.index}>
                <span className={styles.groupIndex}>
                  {group.index}
                </span>

                <span className={styles.groupName}>
                  {group.label}
                </span>

               
              </div>
            ))}
          </div>

          <Link href="/team" className={styles.cta}>
            <span>Meet our team</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}