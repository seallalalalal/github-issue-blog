"use client";
import { IssueModel } from "@/service/schema";
import ListTile from "./ListTile";
import useIssueListQuery from "@/service/issue/useIssuListQuery";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import InfiniteScroll from "./InfiniteScroll";
import { useAccessToken } from "./TokenProvider";
import { useSession } from "next-auth/react";

type Props = {
  data?: IssueModel[];
};
export default function List({ data: initialData }: Props) {
  const roofRef = useRef<HTMLButtonElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useIssueListQuery({
    page: 1,
    pageSize: 5,
  });
  const accessToken = useAccessToken();
  const session = useSession();
  accessToken.set(session.data?.accessToken);
  return (
    <div className="flex flex-col gap-4">
      {data?.pages.map((d) =>
        d.data.map((issue) => (
          <ListTile
            key={issue.id}
            issue={issue}
          />
        ))
      )}
      <InfiniteScroll
        fetchNextPage={() => fetchNextPage()}
        options={{ root: roofRef.current, rootMargin: "10px", threshold: 1 }}
      >
        {(intersectionRef) => (
          <Button
            ref={intersectionRef}
            isLoading={isFetching && hasNextPage}
            disabled
            className="w-full"
            variant="light"
          >
            {!hasNextPage && "End of Page"}
            {hasNextPage && isFetchingNextPage && "Loading"}
          </Button>
        )}
      </InfiniteScroll>
    </div>
  );
}
