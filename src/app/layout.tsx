import SessionProvider from "./_components/SessionProvider";
import { getServerSession } from "next-auth";
import { NextUIProvider } from "./_components/NextUIProvider";
import QueryProvider from "./_components/QueryProvider";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
                <div className="grid grid-cols-6 items-center justify-center gap-6 bg-white py-6">
                  <div className="col-span-6 md:col-span-4 md:col-start-2">{children}</div>
                </div>
              </NextUIProvider>
            </QueryProvider>
          </SessionProvider>
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
