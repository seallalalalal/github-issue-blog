import SessionProvider from "./_components/SessionProvider";
import { getServerSession } from "next-auth";
import { NextUIProvider } from "./_components/NextUIProvider";
import QueryProvider from "./_components/QueryProvider";
import "./globals.css";
import { handler } from "./api/auth/[...nextauth]/route";
import NavBar from "./_components/NavBar";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(handler);
  return (
    <html
      lang="en"
      className="lights"
    >
      <body>
        <main>
          <SessionProvider session={session}>
            <QueryProvider>
              <NextUIProvider>
                <NavBar />
                {children}
              </NextUIProvider>
            </QueryProvider>
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
