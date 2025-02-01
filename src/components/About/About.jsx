import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/webDevLogo.png")} 
            alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>Web Development</h3>
              <p>
              Skilled in building responsive and dynamic web applications using
            Java, Spring Boot, HTML, CSS, and JavaScript. Experienced in
            integrating RESTful APIs and handling database interactions with
            JDBC and Hibernate for seamless backend operations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/mobileIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Development</h3>
              <p>
              Proficient in developing Android applications using Kotlin in
            Android Studio. Experienced in implementing user authentication,
            real-time data synchronization, and push notifications. Skilled in
            creating offline-first applications and optimizing UI/UX for mobile
            users.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/databaseIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3>
              <p>
              Experienced in database design and optimization using MySQL. Skilled
            in managing relational databases with Spring Data JPA and
            implementing efficient queries for improved performance and
            scalability.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>API Development</h3>
              <p>
              Skilled in building robust and scalable RESTful APIs using Spring
            Boot. Experienced in integrating third-party APIs and ensuring
            secure, efficient data exchange between frontend and backend
            systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Development</h3>
              <p>
              Proficient in full-stack development using Java, JavaScript ,Php,
            C#, TypeScript, and Kotlin for backend and HTML/CSS and React for
            frontend. Experienced in managing user authentication, business
            logic, and multithreading to ensure a scalable and secure
            application architecture.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Version Control</h3>
              <p>
              Proficient in Git and Bitbucket for version control and
            collaboration. Experienced in branching strategies, pull requests,
            and resolving merge conflicts to maintain clean and efficient
            codebases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/databaseIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Package Handler at FedEx</h3>
              <p>
              Efficiently load and unload packages, inspecting for damage and
            ensuring accurate reporting. Sort and process 200+ packages daily
            using handheld scanners, maintaining 98% accuracy, and assisting in
            loading trucks for timely dispatch
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/databaseIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cashier at HartStores</h3>
              <p>
              Provide exceptional customer service, operate the cash register for
            various payment methods, process refunds, and manage price checks.
            Assist in stocking, organizing, and improving product displays while
            ensuring smooth store operations
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("/assets/about/managerIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Manager at Mass Enterprise</h3>
              <p>
              Implemented strategies to enhance customer loyalty and optimize
            budgets. Provided leadership during organizational changes,
            monitored expenditures, and ensured cost-effectiveness while
            overseeing staff performance and maintaining a productive, efficient
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
