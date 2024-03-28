"use client";
import { Button } from "@nextui-org/react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <main className={styles.main}>
      <form>
        <div>
          {JSON.stringify(session, null, 2)}
          <Button
            color="primary"
            onClick={() => signIn()}
          >
            Sign In
          </Button>
        </div>
      </form>
    </main>
  );
}
