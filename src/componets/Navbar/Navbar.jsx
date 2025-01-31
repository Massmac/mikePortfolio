import React from "react";
import styles from "./Navbar.module.css";

export const Navbar =() => {

    return ( 
    <nav className= {styles.navbar}>
        <a className={styles.tittle}href="/">Portfolio</a>
        <div className={styles.menu}>
         <ul class={styles.menuItems}>
        <li>
        <a href="#about">About</a>
        </li>
        <li>
        <a href="#experince">Experience</a>
        </li>
        <li>
        <a href="#projects">Project</a>
        </li>
        <li>
        <a href="#contacts">Contact</a>
        </li>
        </ul>
        </div>
    </nav>
    ); 
};