"use client";
import { useQuery } from "@tanstack/react-query";
import { Octokit } from "octokit";
export async function getIssues(token: string, page: number, pageSize: number) {
  console.log(token);
  const octokit = new Octokit({
    auth: token,
  });

  const resp = await octokit.rest.issues.list({
    // headers: {
    //   "X-GitHub-Api-Version": "2022-11-28",
    // },
    owner: "seallalalalal",
    repo: "github-issue",
    page: page,
    per_page: pageSize,
  });
  console.log(resp.data);
  return resp.data;
}

type Props = {
  page: number;
  pageSize: number;
  token?: string;
};
export default function useIssueList({ page, pageSize, token }: Props) {
  console.log({ token });
  const query = useQuery({
    queryKey: ["getIssues"],
    queryFn: () => getIssues(token!, page, pageSize),
    enabled: !!token,
  });
  console.log(query.data);
  return query;
}
