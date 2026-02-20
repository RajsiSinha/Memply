"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideMainLayout =
    pathname.startsWith("/studio") ||
    pathname.startsWith("/quiz") ||
    pathname.startsWith("/escape") ||
    pathname.startsWith("/shoutouts");

  return (
    <>
      {!hideMainLayout && <Navbar />}
      {children}
      {!hideMainLayout && <Footer />}
    </>
  );
}
