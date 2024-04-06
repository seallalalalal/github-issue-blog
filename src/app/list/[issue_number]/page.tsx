import getIssue from "@/app/_actions/issue/getIssue";
import { Avatar, Button, Divider, Link } from "@nextui-org/react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { FaPenToSquare, FaRegTrashCan, FaGithub, FaFileCirclePlus } from "react-icons/fa6";
import { redirect } from "next/navigation";
import Label from "@/app/_components/Label";
import deleteIssue from "@/app/_actions/issue/deleteIssue";
import DeleteButton from "@/app/_components/DeleteButton";

export default async function Page({ params }: { params: { issue_number: number } }) {
  const { title, body, user, html_url, number, labels, updated_at, created_at, ...issue } =
    await getIssue({
      issue_number: params.issue_number,
    });

  return (
    <>
      <div className="p-4 md:p-0">
        <div className="items-centers flex flex-row flex-wrap items-center justify-between pb-2">
          <div className="flex flex-row items-center gap-1">
            <h1 className="text-4xl font-extrabold">{title}</h1>
          </div>

          <div className="flex flex-row">
            {/* Github */}
            <Button
              isIconOnly
              variant="light"
              size="sm"
              radius="full"
              as={Link}
              href={html_url}
            >
              <FaGithub />
            </Button>
            {/* Edit */}
            <Button
              isIconOnly
              variant="light"
              size="sm"
              radius="full"
              as={Link}
              href={`/list/${number}/edit`}
            >
              <FaPenToSquare />
            </Button>
            {/* ADD */}
            <Button
              isIconOnly
              variant="light"
              size="sm"
              radius="full"
              as={Link}
              href={`/list/create`}
            >
              <FaFileCirclePlus />
            </Button>
            {/* Delete */}
            <DeleteButton number={number} />
            {/* <form
              action={async () => {
                "use server";
                console.log("delete");
                await deleteIssue({ issue_number: number });
              }}
            >
              <Button
                isIconOnly
                variant="light"
                color="danger"
                size="sm"
                radius="full"
                type="submit"
              >
                <FaRegTrashCan />
              </Button>
            </form> */}
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-1 italic text-slate-400">
          <div className="min-w-fit">Created at {updated_at.format("YYYY/MM/DD hh:mm:ss")}</div>
          <div className="hidden md:block">•</div>
          <div className="min-w-fit">Updated at {updated_at.format("YYYY/MM/DD hh:mm:ss")}</div>
        </div>
        <span className="flex flex-row items-center gap-0">
          {labels.map((l) => (
            <Label label={l} />
          ))}
        </span>
        <div className="flex max-w-fit flex-row items-center gap-2 rounded-full border-slate-300 p-2 shadow-lg ">
          <Avatar
            src={user?.avatar_url}
            name={user.login ?? "Author Name"}
          />
          <div className="flex flex-col ">
            <div className="text-md font-500">{user?.login}</div>
            <Link
              href={user.html_url}
              className="text-sm"
              showAnchorIcon
            >
              Github Profile
            </Link>
          </div>
        </div>
      </div>
      <Divider className="my-4" />
      <div className="prose prose-sm md:prose-lg lg:prose-xl">
        <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
      </div>
    </>
  );
}
