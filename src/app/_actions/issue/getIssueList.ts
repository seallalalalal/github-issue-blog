import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { octokitCaller } from "@/service/Octokit";
import { Issue, issueList } from "@/service/schema";

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
