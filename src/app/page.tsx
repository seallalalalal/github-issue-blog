import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(handler);

  if (!session) {
    return (
      <div className="flex h-full w-full items-center justify-center text-large">
        Click "Sign In" button to continue.
      </div>
    );
  }

  if (session) {
    redirect("/list");
  }

  return (
    <>
      <div>
        <div>Unknown Error</div>
        <div>Try Sign In again later</div>
        <div>{JSON.stringify(session, null, 2)}</div>
      </div>
    </>
  );
}
