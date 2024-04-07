import { Button, Input, Link } from "@nextui-org/react";
import List from "../_components/List";
import { FaPlus } from "react-icons/fa6";

export default async function Page() {
  // TODO: use server action to pass intial data to List,
  // const data = await getIssueList({ page: 1 });

  return (
    <div className="h-full overflow-y-scroll px-1 pb-1">
      <div className="sticky top-0 z-10 mb-3 grid grid-cols-6 gap-2">
        <Input
          placeholder="TODO: 這個功能還沒做好"
          className="col-span-4"
        />
        <Button className="col-span-2 md:col-span-1">Search</Button>

        <Button
          className="col-span-6 md:col-span-1"
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
