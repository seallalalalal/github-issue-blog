import { Card, CardBody, Image, Avatar, Link } from "@nextui-org/react";
import { FaRegComments, FaGithub } from "react-icons/fa6";
import DefaultImage from "@/assets/images/album-cover.png";
import Label from "./Label";
import { LabelModel } from "@/service/schema";
import { Dayjs } from "dayjs";
import { redirect } from "next/navigation";

type Props = {
  issueNumber: number;
  author: {
    avatar: string;
    name: string;
    link: string;
  };
  title: string;
  timeStamp: {
    createdAt: Dayjs;
    updatedAt: Dayjs;
  };
  labels: LabelModel[];
  githubLink: string;
  comments: number;
  body?: string;
};

export default function ListTile({
  issueNumber,
  author,
  title,
  comments,
  githubLink,
  labels,
  timeStamp,
  body,
}: Props) {
  return (
    <Link href={`/list/${issueNumber}`}>
      <Card
        isBlurred
        className="w-full border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
        // onPress={async () => {
        //   "use server";

        //   redirect(`/list/${1}`);
        // }}
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
              <div className="flex items-start justify-between">
                <div className="flex max-w-full flex-col gap-0">
                  <Link
                    className="flex flex-row gap-1 text-black"
                    href={author.link}
                  >
                    <Avatar
                      src={author.avatar}
                      className="h-6 w-6 text-tiny"
                    />
                    <div>{author.name}</div>
                  </Link>
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
                <div className="flex h-full min-w-40 flex-col items-end justify-between">
                  <Link
                    isBlock
                    href={githubLink}
                    color="foreground"
                    className=""
                  >
                    <FaGithub />
                  </Link>
                  <div>
                    <p className="text-small text-foreground/80">
                      發佈於 {timeStamp.createdAt.format("YYYY-M-D hh:mm")}
                    </p>
                    <p className="text-small text-foreground/80">
                      更新於 {timeStamp.updatedAt.format("YYYY-M-D hh:mm")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
