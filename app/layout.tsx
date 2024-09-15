import { Inter } from "next/font/google";
import "./globals.css";

// Import Inter font with regular and bold weights
const inter = Inter({
  subsets: ["latin"] // Regular (400) and Bold (700) Define font variable
});

export const metadata = {
  title: "PTC - DRMS",
  description: "Document Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
