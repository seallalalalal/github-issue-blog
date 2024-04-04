"use client";
import { Button } from "@nextui-org/react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <main className={styles.main}>
      <form action={() => signIn()}>
        <div>
          Home page
          {JSON.stringify(session, null, 2)}
          <Button
            color="primary"
            type="submit"
          >
            Sign In
          </Button>
        </div>
      </form>
    </main>
  );
}
