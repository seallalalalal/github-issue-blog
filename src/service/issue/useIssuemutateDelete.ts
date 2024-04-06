"use client";
import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
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
  // const moda = useMo
  //   const router = useRouter();
  const session = useSession();
  const query = useMutation({
    mutationKey: ["deleteIssue"],
    mutationFn: closeIssue,
    onSuccess(data, variables, context) {
      //   router.push(`/list`);
      console.log("success");
      //   modal.set({
      //     open: true,
      //     title: "Deletion Success",
      //     content: "This issue is successfully closed.",
      //   });
    },
  });
  console.error(query.error);
  return query;
}
