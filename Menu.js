import React from "react";
import dishes from '../data/API';
import styles from "./Menu.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Menu() {
    return (
        <main className={styles.menuLayout}>
          <Link
            to="/menus"
            className={styles.ourMenuButton}
          >
              <button>Our Menu</button>
          </Link>
          <div className={styles.popularMenuLayout}>
            <div className = {styles.menuText}>
              <h2>Popular menu</h2>
              <p>Savor our most-loved dishes, crafted with fresh ingredients and bold flavors. Perfect for dine-in, takeaway, or delivery — always satisfying and always popular.</p>
            </div>
            <div className={styles.popularMenuCardGrid}>
                {dishes.map(dish => (
                  <div key={dish.id} className={styles.menuCard}>
                    <div className={styles.menuCardImageContainer}>
                      <img src={dish.image} alt={dish.name} className={styles.menuCardImage} />
                    </div>
                    <div className={styles.menuCardText}>
                      <div className={styles.menuCardNamePrice}>
                        <h3>{dish.name}</h3>
                        <h3>{dish.price}</h3>
                      </div>
                      <p className={styles.menuCardDescription}>{dish.description}</p>
                    </div>
                  </div>
                  ))
                }
            </div>
            <Link
             to="/order-online"
             className={styles.orderDishButton}>
              <button> Order Dish</button>
            </Link>
          </div>
        </main>
    )
};