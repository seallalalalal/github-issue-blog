// TODO:
import { REPO_NAME, REPO_OWNER } from "@/const/general";
import { octokitCaller } from "@/service/Octokit";

type Props = {
  title: string;
  body: string;
};

export default async function createIssue({ title, body }: Props) {
  "use server";
  const octokit = await octokitCaller();

  const resp = await octokit.rest.issues.create({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title: title,
    body: body,
  });

  return resp.data;
}
