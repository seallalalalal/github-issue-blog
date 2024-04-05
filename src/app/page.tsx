import { Button } from "@nextui-org/react";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(handler);
  console.log({ session });

  return (
    <main className={styles.main}>
      <div>
        Home page
        {JSON.stringify(session, null, 2)}
      </div>
    </main>
  );
}
