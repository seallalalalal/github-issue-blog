import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { octokitCaller } from "@/service/Octokit";
import { Issue, issueList } from "@/service/schema";

type Props = {
  page: number;
  pageSize?: number;
};

export default async function getIssueList({ page, pageSize = 5 }: Props) {
  "use server";
  const octokit = await octokitCaller();

  const resp = await octokit.rest.issues.listForRepo({
    owner: REPO_OWNER,
    repo: REPO_NAME,
  });
  console.log({ respData: resp.data[0].labels });

  return issueList.parse(resp).data;

  // return {
  //   data: [
  //     {
  //       url: "https://api.github.com/repos/seallalalalal/github-issue-blog/issues/1",
  //       repository_url: "https://api.github.com/repos/seallalalalal/github-issue-blog",
  //       labels_url:
  //         "https://api.github.com/repos/seallalalalal/github-issue-blog/issues/1/labels{/name}",
  //       comments_url:
  //         "https://api.github.com/repos/seallalalalal/github-issue-blog/issues/1/comments",
  //       events_url: "https://api.github.com/repos/seallalalalal/github-issue-blog/issues/1/events",
  //       html_url: "https://github.com/seallalalalal/github-issue-blog/issues/1",
  //       id: 2216872564,
  //       node_id: "I_kwDOLi7mSM6EIsp0",
  //       number: 1,
  //       title: "test",
  //       user: [Object],
  //       labels: [],
  //       state: "open",
  //       locked: false,
  //       assignee: null,
  //       assignees: [],
  //       milestone: null,
  //       comments: 0,
  //       created_at: "2024-03-31T09:42:02Z",
  //       updated_at: "2024-03-31T09:42:02Z",
  //       closed_at: null,
  //       author_association: "OWNER",
  //       active_lock_reason: null,
  //       body: "test content",
  //       reactions: [Object],
  //       timeline_url:
  //         "https://api.github.com/repos/seallalalalal/github-issue-blog/issues/1/timeline",
  //       performed_via_github_app: null,
  //       state_reason: null,
  //     },
  //   ],
  // };
}
