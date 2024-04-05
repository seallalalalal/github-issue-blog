import getIssueList from "../_actions/issue/getIssueList";
import { Button, Input } from "@nextui-org/react";
import CreateButton from "../_components/CreateButton";
import List from "../_components/List";

export default async function Page() {
  const data = await getIssueList({ page: 1 });

  return (
    <>
      <div className="mb-3 flex flex-col gap-1 md:flex-row">
        <Input />
        <Button>Search</Button>
        <CreateButton color="primary">New</CreateButton>
      </div>
      <List data={data} />
    </>
  );
}
