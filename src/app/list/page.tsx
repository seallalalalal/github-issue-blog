import { getServerSession } from "next-auth";
import getIssueList from "../_actions/post/getIssueList";
import { handler } from "../api/auth/[...nextauth]/route";
import { headers } from "next/headers";

export default async function Page() {
  const token = await fetch("http://localhost:3000/api/proxy", {
    method: "PATCH",
    headers: headers(),
  });
  const { accessToken } = await token.json();

  const data = await getIssueList(accessToken);
  console.log({ data });

  return "list page";
}
