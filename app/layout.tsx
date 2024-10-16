import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

// These styles apply to every route in the application
import "./globals.css";

export const metadata: Metadata = {
  title: "Addcurr",
  description:
    "Addcurr is the simplest portfolio maker, a multiple currency converter. Ideal for travelers, business professionals, and anyone managing international transactions. Get accurate conversion rates instantly.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-slate-100 font-mono text-slate-700 dark:bg-slate-700  dark:text-slate-300" lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="4b1ce472-80ce-4e1a-b005-57d7614561c1"
        ></script>
      </head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body className="mx-auto max-w-3xl px-2 py-2 md:py-5">
        <main className="py-3 md:py-5">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
