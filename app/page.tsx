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
        <div className="input-group">
          <Icon icon="material-symbols:search" />
          <input
            type="text"
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-group">
          <Icon icon="material-symbols:search" />
          <input
            type="text"
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-group">
          <Icon icon="material-symbols:search" />
          <input
            type="text"
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-group">
          <Icon icon="material-symbols:search" />
          <input
            type="text"
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
      </div>
      {/* Meteor API */}
    </main>
  );
}
