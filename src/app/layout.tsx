// // src/app/layout.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import './globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "XRP Wallet",
  description: "Your XRP Wallet Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
