"use client";
import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Octokit } from "octokit";

type Props = {
  token: string;
  title: string;
  body: string;
};

async function createIssue({ token, title, body }: Props) {
  const octokit = new Octokit({
    auth: token,
  });

  const resp = await octokit.request("POST /repos/{owner}/{repo}/issues", {
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title: "Found a bug",
    body: "I'm having a problem with this.",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return resp.data;
}

export default function useIssueMutateCreate() {
  const query = useMutation({
    mutationKey: ["createIssue"],
    mutationFn: createIssue,
  });
  console.log(query.data);
  return query;
}
