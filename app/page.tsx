"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { InputAdornment, TextField } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Search for Meteorites</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles["input-group"]}>
          <Icon icon="material-symbols:search" />
          <input
            type="text"
            className="input-field"
            placeholder="Name"
          />
        </div>
        <div className={styles["input-group"]}>
          <Icon icon="material-symbols:search" />
          <input
            type="number"
            className="input-field"
            placeholder="Year of Strike"
          />
        </div>
        <div className={styles["input-group"]}>
          <Icon icon="material-symbols:search" />
          <input
            type="text"
            className="input-field"
            placeholder="Meteorite Composition"
          />
        </div>
        <div className={styles["input-group"]}>
          <Icon icon="material-symbols:search" />
          <input
            type="text"
            className="input-field"
            placeholder="Mass Range"
          />
        </div>
        <div className={styles.btn} id={styles["btn-search"]}>
          <Icon icon="material-symbols:search" />
          <button>Search</button>
        </div>
        <div className={styles.btn} id={styles["btn-clear"]}>
          <Icon icon="material-symbols:delete" />
          <button>Clear</button>
        </div>
      </div>
      {/* Meteor API */}
    </main>
  );
}
