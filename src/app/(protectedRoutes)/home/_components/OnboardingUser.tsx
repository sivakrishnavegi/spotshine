"use client";

import { OnboardingSteps } from "@/lib/data";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

type OnBoardingUserProps = {};

const OnBoardingUser = () => {
  return (
    <div className="flex flex-col items-start gap-1 justify-start">
      {OnboardingSteps.map((step, index) => (
        <Link href={step.link} key={index} className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <p className="text-base text-foreground">{step.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default OnBoardingUser;
