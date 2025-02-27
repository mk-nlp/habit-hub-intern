import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function create() {
  "use server";
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  const isDesktop =
    userAgent?.includes("Windows") ||
    userAgent?.includes("Macintosh") ||
    userAgent?.includes("Linux");
  if (isDesktop) {
    return {
      true: true,
    };
  }
  return {
    props: {},
  };
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const desktop = await create();
  const locale = await getLocale();
  const messages = await getMessages();
  if (desktop.true) {
    return (
      <html lang={locale}>
        <body>
          <div className="flex flex-col gap-5 font-poppins text-2xl text-purple">
            <div className="flex items-center justify-center">
              <h1 className=" text-center">
                HabitHub Desktop is currently <br /> under development.
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1>Thanks for your patience.</h1>
            </div>
          </div>
        </body>
      </html>
    );
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
