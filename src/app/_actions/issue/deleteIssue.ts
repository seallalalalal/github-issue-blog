import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { octokitCaller } from "@/service/Octokit";
import { Octokit } from "octokit";

type Props = {
  issue_number: number;
};

export default async function deleteIssue({ issue_number }: Props) {
  "use server";
  const octokit = await octokitCaller();

  console.log({ issue_number });

  try {
    const resp = await octokit.rest.issues.update({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      state: "closed",
      issue_number,
    });

    return resp.data;
  } catch (error) {
    console.error({ error });
  }
}
