"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Remove the base admin path and split into segments
  const segments = pathname
    .replace("/admin-vhaira-siju", "")
    .split("/")
    .filter(Boolean);

  // If we're at the root admin page, just show "Dashboard"
  if (segments.length === 0) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="font-medium">Dashboard</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Link
        href="/admin-vhaira-siju"
        className="hover:text-secondary transition-colors"
      >
        Dashboard
      </Link>

      {segments.map((segment, index) => {
        // Build the href for this segment
        const href = `/admin/${segments.slice(0, index + 1).join("/")}`;

        // Format the segment text (capitalize, replace hyphens with spaces)
        const formattedSegment = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <span key={segment} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" />
            {index === segments.length - 1 ? (
              // Last segment is not a link and has primary color
              <span className="text-secondary font-medium">
                {formattedSegment}
              </span>
            ) : (
              // Other segments are links
              <Link
                href={href}
                className="hover:text-primary transition-colors"
              >
                {formattedSegment}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
