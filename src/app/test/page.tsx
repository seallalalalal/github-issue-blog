"use client";
import { getSession, useSession } from "next-auth/react";
import { useAccessToken } from "../_components/TokenProvider";

export default function Page() {
  const getsession = getSession();
  const usesession = useSession();
  const accessToken = useAccessToken();
  console.log({ accessToken });
  return (
    <div>
      <div>getsession: {JSON.stringify(accessToken.value, null, 2)}</div>
      <div>getsession: {JSON.stringify(getsession, null, 2)}</div>
      <div>usesession: {JSON.stringify(usesession, null, 2)}</div>
    </div>
  );
}
