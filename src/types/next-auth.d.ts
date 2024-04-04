import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth";

interface AccessTokenProps {
  accessToken?: accessToken;
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: accessToken;
    token: JWT;

    user: {
      /** Oauth access token */
      token?: { accessToken?: accessToken };
    } & DefaultSession["user"];
  }
}
