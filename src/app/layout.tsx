import Providers from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("rootlayout");
  return (
    <html lang="en">
      <body className={"bg-gray-100 transition-colors duration-300 dark:bg-[#00002c]"}>
        <Providers>
          <div className="sticky top-0">
            <NavBar />
          </div>

          
          {children}
        </Providers>
      </body>
    </html>
  );
}
