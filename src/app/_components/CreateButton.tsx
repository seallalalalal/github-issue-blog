"use client";
import { Button } from "@nextui-org/react";
import createIssue from "../_actions/issue/createIssue";
import { headers } from "next/headers";
import useIssueMutateCreate from "@/service/issue/useIssueMutateCreate";
import { useSession } from "next-auth/react";
import { FaPlus } from "react-icons/fa6";

type Props = Omit<React.ComponentProps<typeof Button>, "onClick">;

export default function CreateButton({ children, ...props }: Props) {
  const accessToken = useSession().data?.accessToken;
  const create = useIssueMutateCreate();

  return (
    <Button
      {...props}
      startContent={<FaPlus />}
      onClick={() => create.mutate({ title: "title", body: "body", token: accessToken ?? "" })}
    >
      {children}
    </Button>
  );
}
