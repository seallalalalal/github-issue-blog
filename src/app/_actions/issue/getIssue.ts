import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { octokitCaller } from "@/tools/Octokit";
import { Issue } from "@/tools/schema";

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

  return Issue.parse(resp.data);
}
