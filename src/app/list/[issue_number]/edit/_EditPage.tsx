"use client";

import MarkdownEditor from "@/app/_components/MarkDownEditor";
import useIssueMutateUpdate from "@/service/issue/useIssueMutateUpdate";
import { useSession } from "next-auth/react";

type Props = { body?: string; title: string; number: number };
export default function EditPage({ number, ...props }: Props) {
  const token = useSession().data?.accessToken;
  const { mutate, isPending } = useIssueMutateUpdate();
  return (
    <MarkdownEditor
      {...props}
      onMutate={(values) => {
        console.log({ values, number, token });
        mutate({ ...values, number, token });
      }}
      isMutating={isPending}
    />
  );
}
