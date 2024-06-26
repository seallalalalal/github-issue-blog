"use client";

import MarkdownEditor from "@/app/_components/MarkDownEditor";
import useIssueMutateUpdate from "@/app/_hooks/query/useIssueMutateUpdate";
import { useSession } from "next-auth/react";

type Props = { body?: string; title: string; number: number };
export default function EditPage({ number, ...props }: Props) {
  const token = useSession().data?.accessToken;
  const { mutate, isPending } = useIssueMutateUpdate();
  return (
    <MarkdownEditor
      {...props}
      onMutate={(values) => {
        mutate({ ...values, number, token });
      }}
      isMutating={isPending}
    />
  );
}
