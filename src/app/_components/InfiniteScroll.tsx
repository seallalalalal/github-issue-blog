"use client";

import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

function InfiniteScroll({
  fetchNextPage,
  options,
  children,
}: {
  fetchNextPage: () => void;
  options: IntersectionObserverInit;
  children: (ref: React.RefObject<HTMLButtonElement>) => React.ReactNode;
}) {
  const intersectionRef = useRef<HTMLButtonElement>(null);
  const intersection = useIntersection(intersectionRef, options);

  useEffect(() => {
    intersection?.isIntersecting && fetchNextPage();
  }, [fetchNextPage, intersection?.isIntersecting]);

  return children(intersectionRef);
}

export default InfiniteScroll;
