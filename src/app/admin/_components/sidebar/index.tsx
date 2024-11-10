"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Upload Media",
      url: "#",
      items: [
        {
          title: "Media",
          url: "/admin/media",
        },
        {
          title: "Videos",
          url: "#",
        },
      ],
    },
    {
      title: "Content Management System",
      url: "#",
      items: [
        {
          title: "Sanity",
          url: "#",
        },
      ],
    },
    {
      title: "Newsletter",
      url: "#",
      items: [
        {
          title: "Users",
          url: "#",
        },
      ],
    },
    {
      title: "General",
      url: "#",
      items: [
        {
          title: "Upload Courses",
          url: "#",
        },
        {
          title: "Bookings",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}

        <div className="flex items-center gap-5">
          <Image
            src="/vhaira-logo.png"
            alt="logo"
            width={30}
            height={30}
            content="contain"
          />
          <p className="uppercase font-oreloBold text-secondary text-xl">
            Vhaira
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="font-jost text-[15px] text-foreground">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="font-noto text-[17px]"
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={
                        pathname === item.url ||
                        pathname.startsWith(`${item.url}/`)
                      }
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
