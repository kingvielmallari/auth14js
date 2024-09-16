import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"] 
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
      <body className={`${inter.className} bg-[#030016] overflow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
