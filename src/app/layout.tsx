import type { Metadata } from "next";
import "./globals.css";

// Set up site metadata
export const metadata: Metadata = {
  title: "Next.js Templates",
  description: "Free use components template for next.js app",
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
