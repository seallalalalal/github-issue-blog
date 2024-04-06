import { PropsWithChildren } from "react";
import CustomLayout from "../_components/Layout";

export default async function Layout({ children }: PropsWithChildren) {
  return <CustomLayout>{children}</CustomLayout>;
}
