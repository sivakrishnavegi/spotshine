import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type FeatureSectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
  heading: string;
  link: string;
};

const FeatureSectionLayout = ({
  children,
  heading,
  className,
  link,
}: FeatureSectionLayoutProps) => {
  return (
    <div
      className={`${className} p-10 flex flex-col items-center justify-center gap-10 rounded-3xl border border-border bg-background-10`}
    >
      {children}
      <div className="w-full justify-between flex flex-wrap items-center gap-10">
       <h3 className="sm:w-[70%] font-semibold text-3xl text-primary">{heading}</h3>
       <Link href={link} className="text-primary font-semibold text-lg flex items-center justify-center rounded-md opacity-50">View 
       <ArrowRightIcon className="w-4 h-4 ml-2" />
       </Link>
      </div>
    </div>
  );
};

export default FeatureSectionLayout;
