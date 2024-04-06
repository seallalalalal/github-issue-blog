"use client";

import useIssueMutateDelete from "@/service/issue/useIssuemutateDelete";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { FaRegTrashCan } from "react-icons/fa6";

type Props = {
  number: number;
};

export default function DeleteButton({ number }: Props) {
  const session = useSession();
  const accessToken = session.data?.accessToken;
  const { mutate } = useIssueMutateDelete();

  return (
    <Button
      isIconOnly
      variant="light"
      color="danger"
      size="sm"
      radius="full"
      onPress={() => {
        console.log("on press");
        if (accessToken) {
          mutate({ token: accessToken, issue_number: number });
        }
      }}
    >
      <FaRegTrashCan />
    </Button>
  );
}
