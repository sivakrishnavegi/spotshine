"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import PurpleIcon from "../PurpleIcon";

type Props = {
  user: {};
};

// ToDo Stripe Subscription , Assistant Settings
const Header = ({ user }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full px-4 pt-6 sticky  top-0 z-10 flex justify-between items-center flex-wrap gap-4 bg-background">
      {pathname.includes("pipelines") ? (
        <Button
          variant="outline"
          className="bg-primary border border-border rounded-xl cursor-pointer"
          onClick={() => router.push("/webinar")}
        >
          <ArrowLeft /> webinar
        </Button>
      ) : (
        <div className="px-4 py-2 flex text-bold justify-center items-center rounded-xl bg-background border border-border text-primary capitalize">
          {pathname.split("/")["1"]}
        </div>
      )}

      {/* create a stripe subscription and webinar button */}
      <div className="flex gap-6 items-center flex-wrap">
        <PurpleIcon>
          <Zap className="h-4 w-4" />
        </PurpleIcon>
      </div>
    </div>
  );
};

export default Header;
