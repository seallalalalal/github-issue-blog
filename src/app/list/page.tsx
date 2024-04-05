import getIssueList from "../_actions/issue/getIssueList";
import { Button, Input, Link } from "@nextui-org/react";
import CreateButton from "../_components/CreateButton";
import List from "../_components/List";
import { FaPlus } from "react-icons/fa6";

export default async function Page() {
  const data = await getIssueList({ page: 1 });

  return (
    <div className="h-full overflow-y-scroll px-1">
      <div className="sticky top-0 z-10 mb-3 flex flex-col gap-1 md:flex-row">
        <Input />
        <Button>Search</Button>
        <Button
          startContent={<FaPlus />}
          color="primary"
          as={Link}
          variant="solid"
          href="/list/create"
        >
          New
        </Button>
        {/* <CreateButton color="primary">New</CreateButton> */}
      </div>
      <List data={data} />
    </div>
  );
}
