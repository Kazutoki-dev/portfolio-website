import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/ui/home/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "Kazutokiのポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth text-sm md:text-base"
      data-theme="light"
    >
      <body className={inter.className}>
        <header className="h-16">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
