import { PropsWithChildren } from "react";
import CustomLayout from "../_components/CustomLayout";

export default async function Layout({ children }: PropsWithChildren) {
  return <CustomLayout>{children}</CustomLayout>;
}
