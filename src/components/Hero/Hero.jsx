import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


// The title is my name, Michael Tettey Tamatey, 
// and the description is a brief overview of my skills and experience. 
// The image is a photo of me.
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Michael Tettey Tamatey</h1>
        <p className={styles.description}>
        Driven and detail-oriented Computer Information Systems student at
            Holland College. Proficient in Java, C#, PHP, MySQL, JavaScript, and
            TypeScript, and front-end technologies like HTML, CSS, and React.
            Dedicated to delivering innovative solutions and creating impactful
            software.
        </p>
        <a href="mailto:tamateymichael99@email.com" className={styles.contactBtn}>
          Contact Me
        </a>

      </div>
      <img
        src={("/assets/hero/profile.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
