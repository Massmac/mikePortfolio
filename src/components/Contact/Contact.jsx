import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>         
          <a href="mailto:tamateymichael99@email.com">Email</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/michael-tettey-tamatey-535535117/">linkedin.</a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/dashboard">Github</a>
        </li>
      </ul>
    </footer>
  );
};