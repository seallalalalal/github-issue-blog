"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // const session = await getServerSession(handler);

  // console.debug({ session });
  return (
    <main className={styles.main}>
      <form>
        <div>
          {/* {JSON.stringify(session, null, 2)} */}
          <button onClick={() => signIn()}>sign in</button>
        </div>
      </form>
    </main>
  );
}
