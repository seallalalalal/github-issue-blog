import getIssueList from "../_actions/issue/getIssueList";
import { Button, Input, Link } from "@nextui-org/react";
import List from "../_components/List";
import { FaPlus } from "react-icons/fa6";

export default async function Page() {
  // TODO: use server action to pass intial data to List,
  // const data = await getIssueList({ page: 1 });

  return (
    <div className="h-full overflow-y-scroll px-1 pb-1">
      <div className="sticky top-0 z-10 mb-3 flex flex-col gap-1 md:flex-row">
        <Input placeholder="TODO: 這個功能還沒做好" />
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
      </div>
      <List />
    </div>
  );
}
