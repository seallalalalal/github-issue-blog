import { Octokit } from "octokit";
import { headers } from "next/headers";

export const octokitCaller = async () => {
  const token = await fetch("http://localhost:3000/api/proxy", {
    method: "PATCH",
    headers: headers(),
  });
  const { accessToken } = await token.json();
  const octokit = new Octokit({
    auth: accessToken,
  });
  return octokit;
};
