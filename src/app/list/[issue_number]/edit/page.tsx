import getIssue from "@/app/_actions/issue/getIssue";
import EditPage from "./_EditPage";

export default async function Page({ params }: { params: { issue_number: number } }) {
  const data = await getIssue({ issue_number: params.issue_number });

  const { title, body, ...rest } = data;
  const props = { title, body, number: params.issue_number, btnText: "Update" };

  return <EditPage {...props} />;
}
