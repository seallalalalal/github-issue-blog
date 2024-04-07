"use client";
import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Octokit } from "octokit";

type Props = {
  issue_number: number;
  token: string;
};
async function closeIssue({ issue_number, token }: Props) {
  const octokit = new Octokit({ auth: token });

  const resp = await octokit.rest.issues.update({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number,
    state: "closed",
  });

  return resp.data;
}

export default function useIssueMutateDelete() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["deleteIssue"],
    mutationFn: closeIssue,
    onSuccess(data, variables, context) {
      console.log("success");
      queryClient.refetchQueries({ queryKey: ["getIsseuList"], type: "active" });
      router.push("/list");
    },
  });
  console.error(query.error);
  return query;
}
