import { onAuthenticatedUser } from "@/actions/auth";
import Sidebar from "@/components/ReuseableComponents/LayoutComponents/Sidebar";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const userExists = await onAuthenticatedUser();

  if (!userExists?.user) {
    redirect("/sign-in");
  }
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-col w-full h-screen overflow-auto px-4 scrollbar-hide md:px-2 container mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
