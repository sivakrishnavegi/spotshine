import Link from "next/link";
import React from "react";

type FeaturedCardProps = {
  heading: string;
  link: string;
  icon: React.ReactNode;
};
const FeaturedCard = ({ heading, link, icon }: FeaturedCardProps) => {
  return (
    <Link
      href={link}
      className="px-8 py-6 flex flex-col items-start justify-center gap-14 rounded-xl border border-border bg-secondary backdrop-blur-xl"
    >
      {icon}
      <p className="font-semibold text-xl text-primary">{heading}</p>
    </Link>
  );
};

export default FeaturedCard;
