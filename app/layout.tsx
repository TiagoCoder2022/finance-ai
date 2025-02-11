import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "./_components/ui/sonner";

const mulish = Mulish({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance AI",
  description: "manage your expenses easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} dark antialiased`}
      >
        <ClerkProvider appearance={{baseTheme: dark}}>
          <div className="flex flex-col h-full">
            {children}
          </div>
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  );
}
