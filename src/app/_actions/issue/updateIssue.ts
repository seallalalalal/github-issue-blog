import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { octokitCaller } from "@/service/Octokit";
import { Octokit } from "octokit";

type Props = {
  issue_number: number;
  title?: string;
  body?: string;
};

export default async function updateIssue({ issue_number, title, body }: Props) {
  "use server";
  const octokit = await octokitCaller();

  const resp = await octokit.rest.issues.update({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number,
    title,
    body,
  });

  return resp.data;
}
