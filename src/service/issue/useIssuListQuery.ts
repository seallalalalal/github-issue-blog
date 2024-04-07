"use client";
import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { useInfiniteQuery } from "@tanstack/react-query";

import parse from "parse-link-header";
import { IssueArray } from "../schema";
import { Octokit } from "octokit";

type Props = {
  page: number;
  pageSize?: number;
};

type MetaType = { first: parse.Link | null; next: parse.Link | null; last: parse.Link | null };

async function getIssueList({ page, pageSize = 10 }: Props & {}) {
  const octokit = new Octokit();

  const resp = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: REPO_OWNER,
    repo: REPO_NAME,
    page,
    per_page: pageSize,
  });

  const link = parse(resp.headers.link);

  const meta: MetaType = { first: null, next: null, last: null };

  if (link?.last) {
    meta.last = link.last;
  }
  if (link?.first) {
    meta.first = link.first;
  }
  if (link?.next) {
    meta.next = link.next;
  }

  return { data: IssueArray.parse(resp.data), meta };
}

export default function useIssueListQuery({ page, pageSize = 10 }: Props) {
  const query = useInfiniteQuery({
    queryKey: ["getIssueList", page, pageSize],
    queryFn: ({ pageParam }) =>
      getIssueList({
        page: pageParam as number,
        pageSize,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const { next, first, last } = lastPage.meta;
      if (!last) return undefined;
      return Number(next?.page);
    },
    gcTime: 0,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  return query;
}
