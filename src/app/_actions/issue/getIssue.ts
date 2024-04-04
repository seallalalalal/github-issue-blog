import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { octokitCaller } from "@/service/Octokit";

type Props = {
  issue_number: number;
};

export default async function getIssue({ issue_number }: Props) {
  "use server";
  const octokit = await octokitCaller();

  const resp = await octokit.rest.issues.get({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number,
  });

  return resp.data;
}
