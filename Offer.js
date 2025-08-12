import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import offers from '../data/APIOffer';
import styles from "./Offer.module.css";

export default function Offer() {
  return (
    <main className={styles.offerLayout}>
      <Link
        to="/special-offers"
        className={styles.specialOffersLink}>
        <button>Special Offers</button>
      </Link>
      <div className={styles.exclusiveMembers}>
        <div className={styles.memberText}>
          <h2>Exclusive to members</h2>
          <p>Get points for dining in, takeout and even delivery. All our offers and promotions are offered exclusively to LITTLE LEMON members </p>
        </div>
        <div className={styles.offerCardGrid}>
          {offers.map(offer => (
            <div key={offer.id} className={styles.offerCard}>
              <div className={styles.offerCardImageContainer}>
                <img src={offer.image} alt={offer.name} className={styles.offerCardImage} />
              </div>
              <div className={styles.offerCardText}>
                <h3>{offer.name}</h3>
                <p className={styles.offerCardDescription}>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/join-member"
          className={styles.joinMemberLink}
        >
          <button>Join Members</button>
        </Link>
      </div>
    </main>
  )
};