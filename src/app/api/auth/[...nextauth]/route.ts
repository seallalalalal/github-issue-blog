import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
});

export { handler as GET, handler as POST };
