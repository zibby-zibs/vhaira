"use client";

import React from "react";
import Breadcrumb from "./breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const AdminHeader = () => {
  return (
    <header className="border-b border-gray-300">
      <div className="flex h-16 items-center px-4">
        <SidebarTrigger className="-ml-1 text-secondary h-10 w-10" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb />
      </div>
    </header>
  );
};

export default AdminHeader;
