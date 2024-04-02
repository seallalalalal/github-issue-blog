// TODO:
import { Octokit } from "octokit";

type Props = {
  token: string;
  page: number;
  pageSize?: number;
};

export default async function getIssue({ token, page, pageSize = 5 }: Props) {
  "use server";
  const octokit = new Octokit({
    auth: token,
  });

  const resp = await octokit.rest.issues.list({
    owner: "seallalalalal",
    repo: "github-issue",
    page: page,
    per_page: pageSize,
  });

  return resp.data;
}
