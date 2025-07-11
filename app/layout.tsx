import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teaching SAAS",
  description: "Your AI Teaching Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${bricolage.variable} antialiased`}>
      <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' }} }>
        <Navbar />
        {children}
      </ClerkProvider>
    </body>
  </html>
  );
}
