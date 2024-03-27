"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <form>
        <div>
          <input></input>
          <button onClick={() => signIn()}>sign in</button>
        </div>
      </form>
    </main>
  );
}
