"use client";

import MarkdownEditor from "@/app/_components/MarkDownEditor";
import { useModal } from "@/app/_components/Modal";
import useIssueMutateUpdate from "@/service/issue/useIssueMutateUpdate";
import { getSession, useSession } from "next-auth/react";
import { Link } from "@nextui-org/react";

type Props = { body?: string; title: string; number: number };
export default function EditPage({ number, ...props }: Props) {
  const token = useSession().data?.accessToken;
  const modal = useModal();
  const { mutate, isPending } = useIssueMutateUpdate();

  return (
    <MarkdownEditor
      {...props}
      onMutate={(values) => {
        if (token) {
          console.log({ values, number, token });
          mutate({ ...values, number, token });
        } else {
          console.log("no access token");
          modal.set({
            open: true,
            title: "Access Token missing",
            content: (
              <div className="flex flex-col">
                <div className="flex flex-row">
                  Please try <Link href={"/api/auth/signin"}>Sign In</Link> or{" "}
                  <Link href={"/api/auth/signout"}>Sign Out</Link>
                </div>
                Or try again later.
              </div>
            ),
            footer(onClose) {
              return null;
            },
          });
        }
      }}
      isMutating={isPending}
    />
  );
}
