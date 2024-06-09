import type { Metadata } from "next";

import "../../styles/globals.css";
import SideBar from "../../ui_components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Frontdesk",
  description: "Omnify Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-sidebarBg`}>
        <div className="flex h-screen">
          <SideBar />
          <main className=" h-full ">{children}</main>
        </div>
      </body>
    </html>
  );
}
