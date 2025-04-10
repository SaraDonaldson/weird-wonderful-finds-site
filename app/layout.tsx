import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`${geistSans.className} antialiased  bg-gradient-to-b from-0% from-slate-950 via-20% via-slate-900 to-90% to-black`}> */}
      <body className={`${geistSans.className} antialiased "bg-peach-light text-gray-900 dark:bg-dark-bg dark:text-dark-text"`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav/>
          <div className="w-full min-h-screen h-auto mt-10 mb-56">
            {children}
          </div>
          <Footer/>
        </ThemeProvider>

      </body>
    </html>
  );
}
