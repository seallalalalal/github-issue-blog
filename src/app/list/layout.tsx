import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";
import { handler } from "../api/auth/[...nextauth]/route";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getServerSession(handler);

  return children;
}
