import { The_Girl_Next_Door } from "next/font/google";
import "./globals.css";

const tgnd = The_Girl_Next_Door({ subsets: ["latin"], weight:'400' });

export const metadata = {
  title: "Lepas Hari",
  description: "Ceritakan tentangmu, seLepas Hari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tgnd.className}>{children}</body>
    </html>
  );
}
