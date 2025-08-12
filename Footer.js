import React from "react";
import styles from "./Footer.module.css";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";




export default function Footer() {
    return (
        <footer className = {styles.footerLayout}>
          <div className = {styles.linkArea}>
            <h4>Little Lemon</h4>
            <ul>
              <li><a href="/account">Your Account</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menus">Menus</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order-online">Order Online</a></li>
              <li><a href="/reviews">Reviews</a></li>
            </ul>
          </div>
          <div className = {styles.openContactArea}>
            <div className={styles.opening}>
              <h4>Opening</h4>
              <div className={styles.detail}>
                <div className={styles.day}>
                  <p>Monday – Thursday</p>
                  <p>Friday -Saturday</p>
                  <p>Sunday</p>
                </div>
                <div className={styles.time}>
                  <p>11:30 AM – 9:00 PM</p>
                  <p>11:30 AM – 10:30 PM</p>
                  <p>10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
            <div className={styles.contact}>
              <h4>Contact</h4>
              <p>(312) 555-0198</p>
              <p><a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a></p>
            </div>
          </div>
          <div className = {styles.addressSocialArea}>
            <h4>Addy</h4>
            <p>1849 W Elm Street Chicago, IL 60622</p>
            <h4 className = {styles.socialNetwork}>Social Network</h4>
            <div className = {styles.socialGroup}>
              <FiInstagram className = {styles.iconStyle} />
              <FiFacebook className = {styles.iconStyle} />
              <FiYoutube className = {styles.iconStyle}/>
            </div>
          </div>
          <div className = {styles.copyrightArea}>
            <ul>
              <li><a href="/TEAMS OF SERVICE">TEAMS OF SERVICE</a></li>
              <li><a href="/PRIVACY POLICY">PRIVACY POLICY</a></li>
              <li><a href="/COOKIES">COOKIES</a></li>
            </ul>
            <p>Copyright © 1998-2025 Little Lemon, All Rights Reserved.</p>
          </div>
        </footer>
    )
};