"use client";
import useIssueMutateCreate from "@/service/issue/useIssueMutateCreate";
import { Button, Input, Tab, Tabs, Textarea } from "@nextui-org/react";
import { UseMutateFunction, UseMutationResult } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { ChangeEventHandler, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Import GitHub-flavored Markdown plugin
import { useModal } from "./Modal";

enum EDITOR_MODE {
  PREVIEW = "preview",
  EDIT = "edit",
}
type FormDataType = {
  title: string;
  body: string;
};
type FromValidStatusType = {
  title: boolean;
  body: boolean;
};

type Props = {
  title?: string;
  body?: string;
  onMutate: (values: FormDataType) => void;
  isMutating: boolean;
  btnText?: string;
};

export default function MarkdownEditor({
  title = "",
  body = "",
  onMutate,
  isMutating,
  btnText,
}: Props) {
  const [formData, setFormData] = useState<FormDataType>({ title, body });
  const [InvalidStatus, setInvalidStatus] = useState<FromValidStatusType>({
    title: false,
    body: false,
  });
  const [editMode, setEditMode] = useState<EDITOR_MODE>(EDITOR_MODE.EDIT);
  const session = useSession();
  const modal = useModal();
  const accessToken = session.data?.accessToken;

  function validateForm() {
    console.log("validate", { formData });
    if (formData.title === "") {
      console.log("here");
      setInvalidStatus((prev) => ({ ...prev, title: true }));
      return false;
    } else {
      setInvalidStatus((prev) => ({ ...prev, title: false }));
    }
    if (formData.body.length < 30) {
      // do something
      setInvalidStatus((prev) => ({ ...prev, body: true }));
      return false;
    } else {
      setInvalidStatus((prev) => ({ ...prev, body: false }));
    }

    return true;
  }

  function renderTextArea() {
    if (InvalidStatus.body) {
      return (
        <>
          <textarea
            className="w-full  flex-1 resize-none rounded-medium bg-danger-50 px-3 py-2 text-danger outline-none"
            value={formData.body}
            onChange={(e) => setFormData((prev) => ({ ...prev, body: e.target.value }))}
            placeholder="Enter Markdown content here..."
          />
          <div className="text-tiny text-danger">Please input more than 30 characters</div>
        </>
      );
    }
    return (
      <textarea
        className="w-full flex-1 resize-none rounded-medium bg-default-100 px-3 py-2 outline-none"
        value={formData.body}
        onChange={(e) => setFormData((prev) => ({ ...prev, body: e.target.value }))}
        placeholder="Enter Markdown content here..."
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col">
      <Tabs
        radius="full"
        className="sticky top-0"
        selectedKey={editMode}
        onSelectionChange={(key) => setEditMode(key as EDITOR_MODE)}
      >
        {/* Edit Tab */}
        <Tab
          key={EDITOR_MODE.EDIT}
          title="Edit"
          className="h-full"
        >
          <div className="flex h-full w-full flex-col gap-2">
            <Input
              value={formData.title}
              placeholder="Input title here."
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              isRequired
              errorMessage={InvalidStatus.title && "Pleader Enter Title"}
              isInvalid={InvalidStatus.title}
            />
            {renderTextArea()}
          </div>
          {/* Preview Tab */}
        </Tab>
        <Tab
          key={EDITOR_MODE.PREVIEW}
          title="Preview"
          className="h-full overflow-auto"
        >
          <div className="flex h-full w-full flex-col gap-2">
            <div className="flex h-10 min-h-10 items-center overflow-y-scroll rounded-medium border-1 border-solid border-slate-300 px-3">
              {formData.title === "" ? (
                <div className="text-slate-300">No Title</div>
              ) : (
                formData.title
              )}
            </div>
            <div
              className={
                "h-full overflow-y-scroll rounded-medium border-1 border-solid border-slate-300 px-3"
              }
            >
              <div className="prose prose-sm h-full w-full md:prose-lg lg:prose-xl">
                {formData.body === "" ? (
                  <div className="text-slate-300">No Content Yet</div>
                ) : (
                  <Markdown remarkPlugins={[remarkGfm]}>{formData.body}</Markdown>
                )}
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
      <Button
        isLoading={isMutating}
        color="primary"
        onPress={() => {
          if (validateForm()) {
            if (accessToken) {
              onMutate(formData);
            } else {
              modal.set({
                open: true,
                title: "Access Token Missing",
                content: "Please Sign out or Sign In again. Or try it later.",
              });
            }
          }
        }}
      >
        {btnText}
      </Button>
    </div>
  );
}
