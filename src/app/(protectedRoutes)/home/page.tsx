import React from "react";
import OnBoardingUser from "./_components/OnboardingUser";
import { Upload, WebcamIcon } from "lucide-react";
import FeaturedCard from "@/app/(protectedRoutes)/home/_components/FeaturedCard";
import FeatureSectionLayout from "./_components/FeatureSectionLayout";
import Image from "next/image";
import { potentialCustomer } from "@/lib/data";
import UserInfoCard from "@/components/ReuseableComponents/LayoutComponents/UserInfoCards";
type homePageProps = {};

const HomePage = () => {
  return (
    <div className="w-full mx-auto">
      <div className="flex gap-14 py-4 px-4 flex-col sm:flex-row  justify-between items-start">
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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl bg-background-10">
        <FeatureSectionLayout heading="Create a webinar" link="/pipeline">
          <div className="p-5 flex flex-col items-start border border-border rounded-xl background-blur-3xl gap-4">
            <div className="w-full flex  justify-between items-center gap-3">
              <p className="text-primary font-semibold text-sm">Conversions</p>
              <p className="text-xs text-muted-foreground font-normal">50+</p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              {Array.from({ length: 3 }).map((_, index) => (
                <Image
                  key={index}
                  src={`/Upload-Card.png`}
                  alt={`Webinar ${index + 1}`}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </FeatureSectionLayout>
        <FeatureSectionLayout
          heading="See the list of the current customers"
          link="/webinar/create"
        >
          <div className="p-5 flex flex-col items-center h-full border border-border rounded-xl background-blur-3xl gap-2">
            <div className="w-full flex  justify-between items-center gap-3">
              <p className="text-primary font-semibold text-sm">Conversions</p>
              <p className="text-xs text-muted-foreground font-normal">50+</p>
            </div>
            <div className="flex flex-col gap-4 justify-center flex-wrap h-full w-full">
              {potentialCustomer.slice(0,2).map((customer, index) => (
                <UserInfoCard
                  key={index}
                  customer={customer}
                  tags={customer.tags}
                />
              ))}
              {/* <Image src={'/sales.png'} alt={'img'} height={200} width={200} className="object-cover rounded-xl absolute px-5 mb-28 hidden sm:flex backdrop-blur-2xl" /> */}
            </div>
          </div>
        </FeatureSectionLayout>
      </div>
    </div>
  );
};

export default HomePage;
