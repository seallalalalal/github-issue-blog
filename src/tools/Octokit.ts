import { Octokit } from "octokit";
import { headers } from "next/headers";
import { BASE_URL } from "@/const/general";

export const octokitCaller = async () => {
  const token = await fetch(`${BASE_URL}/api/proxy`, {
    method: "PATCH",
    // headers: headers(),
  });
  const { accessToken } = await token.json();
  const octokit = new Octokit({
    auth: accessToken,
  });
  return octokit;
};
