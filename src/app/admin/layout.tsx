import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

import { AppSidebar } from "./_components/sidebar";
import AdminHeader from "./_components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "230px",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset className="">
          <AdminHeader />
          <div className="">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
