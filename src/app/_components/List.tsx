import { IssueModel } from "@/service/schema";
import ListTile from "./ListTile";
import { auth } from "@/auth";
import { time, timeStamp } from "console";

type Props = {
  data: IssueModel[];
};
function transformData(issue: IssueModel) {
  return {
    author: { avatar: issue.user.avatar_url, name: issue.user.login, link: issue.user.html_url },
    title: issue.title,
    body: issue.body ?? undefined,
    timeStamp: { createdAt: issue.created_at, updatedAt: issue.updated_at },
    labels: issue.labels,
    githubLink: issue.html_url,
    comments: issue.comments,
    issueNumber: issue.number,
  };
}
export default function List({ data }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {data.map((d) => (
        <ListTile {...transformData(d)} />
      ))}
    </div>
  );
}
