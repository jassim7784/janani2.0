"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "../styles/Register.module.css";

const EVENT_DATE = new Date("2026-07-24T09:00:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  
};

export default function Register() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const updateCountdown = () => {
      const difference = EVENT_DATE.getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const { error } = await supabase
      .from("registrations")
      .insert([{ name, email, phone }]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <section className={styles.section} id="register">
      <div className={styles.container}>
        {/* HEADER */}

        <header className={styles.header}>
          <h2>
            REGISTER
            <br />
            NOW
          </h2>

          <p>
            Secure your place at JANANI 2026 and become part of a
            collective movement shaping a stronger future.
          </p>
        </header>

        {/* COUNTDOWN */}

        <div className={styles.countdownCard}>
          <div className={styles.countdownContent}>
            <span className={styles.label}>
              JANANI 2026 BEGINS IN:
            </span>

            <div className={styles.timer}>
              <div className={styles.timeItem}>
                <strong>
                  {String(timeLeft.days).padStart(2, "0")}
                </strong>

                <span>DAYS</span>
              </div>

              <span className={styles.separator}>:</span>

              <div className={styles.timeItem}>
                <strong>
                  {String(timeLeft.hours).padStart(2, "0")}
                </strong>

                <span>HOURS</span>
              </div>

              <span className={styles.separator}>:</span>

              <div className={styles.timeItem}>
                <strong>
                  {String(timeLeft.minutes).padStart(2, "0")}
                </strong>

                <span>MINUTES</span>
              </div>
              <span className={styles.separator}>:</span>
            <div className={styles.timeItem}>
                <strong>
                  {String(timeLeft.seconds).padStart(2, "0")}
                </strong>

                <span>SECONDS</span>
              </div>
              
            </div>
          </div>

          <div className={styles.sunburst} aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                style={{
                  transform: `rotate(${index * 20}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* CONTACT */}

        <div className={styles.contactCard}>
          <div className={styles.contactContent}>
            <h3>
              WE&apos;RE HERE TO
              <br />
              CONNECT AND
              <br />
              ASSIST YOU
            </h3>

            <p className={styles.contactDescription}>
              Have questions about JANANI? Need help with registration
              or event details? Our team is ready to assist you.
            </p>

            <div className={styles.contactGrid}>
              <div>
                <h4>CONTACT US</h4>
                <p>+91 85909 36816</p>
              </div>

              <div>
                <h4>EVENT LOCATION</h4>
                <p>
                  St. Teresa&apos;s College
                  <br />
                  Ernakulam, Kerala
                </p>
              </div>

              <div>
                <h4>EMAIL</h4>
                <p>drjerry@myjanani.in</p>
              </div>

              <div>
                <h4>FOLLOW US</h4>

                <div className={styles.socials}>
                  <a href="https://www.instagram.com/myjanani_/" target="_blank" rel="noopener noreferrer">IG</a>
                  <a href="https://www.linkedin.com/in/my-janani-a1931b420/" target="_blank" rel="noopener noreferrer">IN</a>
                  <a href="https://www.facebook.com/people/My-Janani/" target="_blank" rel="noopener noreferrer">FB</a>
                  <a href="https://www.youtube.com/@my_janani/shorts" target="_blank" rel="noopener noreferrer">YT</a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <form className={styles.form} onSubmit={handleSubmit}>
            <h3>REGISTER NOW</h3>

            <p>
        
Gain exclusive access to expert-led sessions, networking opportunities, and industry-shaping insights. Secure your place today.
            </p>

            <input type="text" 
            placeholder="Name" 
            aria-label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />

            <input type="email"
             placeholder="Email" 
             aria-label="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             />

            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              pattern="[0-9]{10,15}"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Registering..." : "Register"}
            </button>
            {status === "success" && <p style={{color: "#4ade80", marginTop: "1rem"}}>Registration successful!</p>}
            {status === "error" && <p style={{color: "#ef4444", marginTop: "1rem"}}>Error submitting form. Please try again.</p>}
          </form>

          {/* MAP */}

          <div className={styles.map}>
            <svg
              viewBox="0 0 1200 430"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <g className={styles.mapLines}>
                <path d="M70 350L240 240L380 280L510 130L690 230L830 90L1120 280" />
                <path d="M20 180L190 210L320 100L460 210L600 150L790 300L1180 190" />
                <path d="M160 20L220 170L90 300L300 420" />
                <path d="M390 0L360 150L500 280L450 430" />
                <path d="M700 0L640 120L720 240L670 430" />
                <path d="M950 0L900 170L1020 240L1100 430" />

                <path d="M0 300L180 320L350 240L520 350L700 300L900 390L1200 340" />
                <path d="M0 90L210 80L330 180L560 70L770 140L980 60L1200 130" />
              </g>

              <circle
                className={styles.mapPoint}
                cx="620"
                cy="230"
                r="18"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}