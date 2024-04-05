import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";

export default async function NavBar() {
  const session = await getServerSession(handler);
  return (
    <Navbar className="sticky top-0">
      <NavbarBrand>
        <p className="font-bold text-inherit">Seal's Blog</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          {session ? (
            <Button
              color="primary"
              variant="flat"
            >
              <Link href="/api/auth/signout">Sign Out</Link>
            </Button>
          ) : (
            <Button
              color="primary"
              variant="flat"
            >
              <Link href="/api/auth/signin">Sign In</Link>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
