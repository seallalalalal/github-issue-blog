import getIssueList from "../_actions/issue/getIssueList";
import { headers } from "next/headers";
import ListTile from "../_components/ListTile";
import dayjs from "dayjs";
import { Button, Input } from "@nextui-org/react";
import createIssue from "../_actions/issue/createIssue";
import CreateButton from "../_components/CreateButton";
import List from "../_components/List";

export default async function Page() {
  const token = await fetch("http://localhost:3000/api/proxy", {
    method: "PATCH",
    headers: headers(),
  });
  const { accessToken } = await token.json();

  const data = await getIssueList({ page: 1 });
  console.log({ data });

  const props = { token: accessToken, title: "test 2", body: "123456" };
  return (
    <>
      <div className="grid grid-cols-6 items-center justify-center gap-6 bg-white py-6">
        <div className="col-span-6 md:col-span-4 md:col-start-2">
          <div className="mb-3 flex flex-col gap-1 md:flex-row">
            <Input />
            <Button>Search</Button>
            <CreateButton color="primary">New</CreateButton>
          </div>
          <List data={data} />
        </div>
      </div>
    </>
  );
}
