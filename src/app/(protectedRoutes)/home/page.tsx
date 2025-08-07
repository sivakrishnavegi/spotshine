import React from "react";
import OnBoardingUser from "./_components/OnboardingUser";
import { Upload, WebcamIcon } from "lucide-react";
import FeaturedCard from "@/app/(protectedRoutes)/home/_components/FeaturedCard";
type homePageProps = {};

const HomePage = () => {
  return (
    <div className="w-full mx-auto h-full">
      <div className="flex gap-14 py-4 px-4 flex-col sm:flex-row  justify-between items-start h-full">
        <div className="space-y-6">
          <h2 className="text-primary font-semibold text-4xl">
            Get Maximum Conversions from your webinars!
          </h2>
          <OnBoardingUser />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-content-center w-full">
          <FeaturedCard
            heading="Browse or drag a pre-recorded webinar"
            link="#"
            icon={<Upload className="w-6 h-6" />}
          />
          <FeaturedCard
            heading="Browse or drag a pre-recorded webinar"
            link="/webinars"
            icon={<WebcamIcon className="w-6 h-6" />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
