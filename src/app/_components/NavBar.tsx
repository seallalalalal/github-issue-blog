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
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Seal's Blog</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            aria-current="page"
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <form
            action={async () => {
              "use server";
              redirect("/api/auth/signin");
            }}
          >
            <Button
              //   as={Link}
              color="primary"
              //   href="#"
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
