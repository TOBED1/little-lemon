import React from "react";
import styles from "./Header.module.css";
import littlelemonLogo from "../src/assets/imagess/logostore.jpg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { MdSupervisorAccount } from "react-icons/md";



export default function Header() {
    return (
    <header className={styles.headerLayout}>
        <nav className={styles.leftNavbar}>
            <Link
                className={styles.linkNavBTN}
                to="/about"
            >
              About
            </Link>
            <Link
                className={styles.linkNavBTN}
                to="/menus"
            >
              Menus
            </Link>
            <Link
                className={styles.linkNavBTN}
                to="/reservations"
            >
              Reservations
            </Link>
        </nav>
        <Link
            to="/"
            className={styles.logoLink}
        >
          <img src={littlelemonLogo} alt="Restaurant Logo" />
        </Link>
        <nav className={styles.rightNavbar}>
            <Link
                to="/order-online"
            >
              <button className={styles.orderBtn}>Order Online</button>
            </Link>
            <Link
                to="/account"
            >
                <button className={styles.accountBtn}>
                    <MdSupervisorAccount className={styles.accountIcon} />
                </button>
            </Link>
        </nav>
    </header>
    )
};