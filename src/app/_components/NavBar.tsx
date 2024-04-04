import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
// import { handler } from "../api/auth/[...nextauth]/route";

import { redirect } from "next/navigation";
import { handler } from "../api/auth/[...nextauth]/route";

export default async function NavBar() {
  //   const session = useSession();
  const session = await getServerSession(handler);
  console.log({ serverSession: session });
  return (
    <Navbar className="sticky top-0">
      <NavbarBrand>
        <p className="font-bold text-inherit">Seal's Blog</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <form
            action={async () => {
              "use server";
              if (session) {
                redirect("api/auth/signout");
              }
              redirect("/api/auth/signin");
            }}
          >
            <Button
              color="primary"
              variant="flat"
              type="submit"
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </form>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
