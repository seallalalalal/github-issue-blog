import { PropsWithChildren } from "react";

export default function CustomLayout({ children }: PropsWithChildren) {
  return <div className="col-span-6 py-3 md:col-span-4 md:col-start-2">{children}</div>;
}
