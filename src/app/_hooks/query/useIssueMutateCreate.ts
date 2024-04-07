"use client";
import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Octokit } from "octokit";
import { octokitCaller } from "../Octokit";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  body: string;
  token: string;
};

async function createIssue({ title, body, token }: Props) {
  const octokit = new Octokit({ auth: token });

  const resp = await octokit.rest.issues.create({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title,
    body,
  });

  return resp.data;
}

export default function useIssueMutateCreate() {
  const router = useRouter();
  const query = useMutation({
    mutationKey: ["createIssue"],
    mutationFn: createIssue,
    onSuccess(data, variables, context) {
      router.push(`/list/${data.number}`);
    },
  });
  return query;
}
