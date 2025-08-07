"use client";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SidebarData } from "@/lib/data";
import { UserButton } from "@clerk/nextjs";
import { Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-18 md:w-18 sm:w-28 h-screen sticky top-0 py-10 px-2 sm:px-6 border bg-background border-border flex flex-col items-center justify-start gap-10">
      <div>
        <Triangle className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
      </div>
      <div className="flex flex-col items-center justify-between w-full h-full">
        <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
          {SidebarData &&
            SidebarData.map((item) => (
              <TooltipProvider key={item.id}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={item.link}
                      className={`flex items-center gap-2 cursor-pointer rounded-lg p-2 ${
                        pathname.includes(item.link) ? "iconBackground" : ""
                      }`}
                    >
                      <item.icon
                        className={`w-4 h-4  ${
                          pathname.includes(item.link) ? "" : "opacity-80"
                        }`}
                      />
                    </Link>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            ))}
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;
