import SessionProvider from "./_components/SessionProvider";
import { getServerSession } from "next-auth";
import { NextUIProvider } from "./_components/NextUIProvider";
import QueryProvider from "./_components/QueryProvider";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { handler } from "./api/auth/[...nextauth]/route";
import NavBar from "./_components/NavBar";
import { ModalProvider } from "./_components/Modal";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(handler);
  return (
    <html
      lang="en"
      className="lights"
    >
      <body className="h-dvh">
        <main>
          <SessionProvider
            session={session}
            refetchInterval={60 * 60}
          >
            <QueryProvider>
              <NextUIProvider>
                <ModalProvider>
                  <div className="p-y-2 flex h-dvh flex-1 flex-col">
                    <NavBar />
                    <div className="flex flex-1 flex-col overflow-hidden">
                      <div className="ap-6 auto grid min-h-full grid-cols-6 grid-rows-1 bg-white">
                        {children}
                      </div>
                    </div>
                  </div>
                </ModalProvider>
              </NextUIProvider>
            </QueryProvider>
          </SessionProvider>
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
