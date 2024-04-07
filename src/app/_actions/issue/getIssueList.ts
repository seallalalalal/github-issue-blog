import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { octokitCaller } from "@/tools/Octokit";
import { Issue, issueList } from "@/tools/schema";

type Props = {
  page: number;
  pageSize?: number;
};

export default async function getIssueList({ page, pageSize = 10 }: Props) {
  "use server";
  const octokit = await octokitCaller();

  const resp = await octokit.rest.issues.listForRepo({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    page,
    per_page: pageSize,
  });

  return issueList.parse(resp).data;
}
