import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import "./globals.css";
import { NextUIProvider } from "./components/NextUIProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html
      lang="en"
      className="lights"
    >
      <body>
        <main>
          <SessionProvider session={session}>
            <NextUIProvider>{children}</NextUIProvider>
          </SessionProvider>
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
