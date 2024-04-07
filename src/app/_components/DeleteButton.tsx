"use client";

import useIssueMutateDelete from "@/app/_hooks/query/useIssuemutateDelete";
import { Button } from "@nextui-org/react";
import { useModal } from "../_hooks/context/Modal";
import { useSession } from "next-auth/react";
import { FaRegTrashCan } from "react-icons/fa6";

type Props = {
  number: number;
};

export default function DeleteButton({ number }: Props) {
  const session = useSession();
  const accessToken = session.data?.accessToken;
  const { mutate, isPending } = useIssueMutateDelete();
  const modal = useModal();

  return (
    <Button
      isIconOnly
      variant="light"
      color="danger"
      size="sm"
      radius="full"
      onPress={() => {
        modal.set({
          open: true,
          title: "Confirm to delete?",
          content: "This page will be delete and navigate back to list.",
          footer: (onClose) => (
            <div className="flex flex-row gap-2">
              <Button
                onPress={onClose}
                variant="ghost"
              >
                Cancel
              </Button>
              <Button
                isLoading={isPending}
                color="danger"
                onPress={() => {
                  if (accessToken) {
                    mutate({ token: accessToken, issue_number: number });
                    modal.set({ open: false });
                  } else {
                    modal.set({
                      open: true,
                      title:
                        "Access token missing. Please Sign In / Sign Out again. Or try it later.",
                    });
                  }
                }}
              >
                Confirm
              </Button>
            </div>
          ),
        });
      }}
    >
      <FaRegTrashCan />
    </Button>
  );
}
