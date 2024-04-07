"use client";
import MarkdownEditor from "@/app/_components/MarkDownEditor";
import useIssueMutateCreate from "@/service/issue/useIssueMutateCreate";
import { useSession } from "next-auth/react";

export default function Page() {
  const { mutate, isPending } = useIssueMutateCreate();
  const token = useSession().data?.accessToken;
  return (
    <>
      <MarkdownEditor
        onMutate={(values) => {
          mutate({ ...values, token });
        }}
        isMutating={isPending}
        btnText="Create"
      />
    </>
  );
}
