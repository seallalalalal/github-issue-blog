import { Card, CardBody, Image, Link, Button, User } from "@nextui-org/react";
import { FaRegComments, FaGithub } from "react-icons/fa6";
import DefaultImage from "@/assets/images/album-cover.png";
import Label from "./Label";
import { IssueModel } from "@/tools/schema";
import { useRouter } from "next/navigation";

type Props = {
  issue: IssueModel;
};

export default function ListTile({ issue }: Props) {
  const {
    number: issueNumber,
    user,
    title,
    body,
    html_url,
    labels,
    created_at: createdAt,
    updated_at: updatedAt,
    comments,
    ...rest
  } = issue;
  const router = useRouter();

  return (
    <Card
      isBlurred
      className="w-full border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
      isPressable
      onPress={() => router.push(`/list/${issueNumber}`)}
    >
      <CardBody>
        <div className="grid w-full grid-cols-6 justify-center gap-6 md:grid-cols-12 md:gap-4">
          <div className="relative col-span-6 md:col-span-2">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={DefaultImage.src}
              width="100%"
            />
          </div>

          <div className="col-span-6 flex flex-col md:col-span-10">
            <div className="flex flex-wrap items-start justify-between">
              <div className="flex min-w-52 max-w-full flex-col gap-0">
                <User
                  className="flex flex-row justify-start"
                  name={user.login ?? "Author Name"}
                  description={<Link href={user.html_url}>Github Profile</Link>}
                  avatarProps={{
                    showFallback: true,
                    src: user.avatar_url,
                    size: "sm",
                  }}
                />
                <h5 className="mt-2 text-3xl font-medium">{title}</h5>
                <p className="max-w-64 overflow-hidden truncate text-ellipsis italic text-slate-600">
                  {body}
                </p>
                <div className="flex flex-row gap-2">
                  <div className="flex items-center gap-1">
                    <FaRegComments />
                    <div className="text-small text-foreground-500">{comments}</div>
                  </div>
                  <div>
                    {labels.map((l) => (
                      <Label label={l} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between md:items-end">
                <Button
                  href={html_url}
                  isIconOnly
                  variant="light"
                  as={Link}
                >
                  <FaGithub />
                  {`#${issueNumber}`}
                </Button>
                <div>
                  <p className="text-small text-foreground/80">
                    發佈於 {createdAt.format("YYYY-M-D hh:mm")}
                  </p>
                  <p className="text-small text-foreground/80">
                    更新於 {updatedAt.format("YYYY-M-D hh:mm")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
