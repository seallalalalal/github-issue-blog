"use client";
import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { useMutation } from "@tanstack/react-query";
import { Octokit } from "octokit";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  body: string;
  number: number;
  token: string;
};

async function updateIssue({ title, body, number, token }: Props) {
  const octokit = new Octokit({ auth: token });

  const resp = await octokit.rest.issues.update({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title,
    body,
    issue_number: number,
  });

  return resp.data;
}

export default function useIssueMutateUpdate() {
  const router = useRouter();
  const query = useMutation({
    mutationKey: ["updateIssue"],
    mutationFn: updateIssue,
    onSuccess(data, variables, context) {
      router.push(`/list/${data.number}`);
    },
  });
  return query;
}
