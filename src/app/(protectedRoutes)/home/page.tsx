import React from 'react'
import OnBoardingUser from './_components/OnboardingUser'
type homePageProps = {}

const HomePage = () => {
  return (
    <div className='w-full mx-auto h-full'>
        <div className='flex gap-14 py-4 px-4 flex-col sm:flex-row  justify-between items-start h-full'>
            <div className='space-y-6'>
                <h2 className='text-primary font-semibold text-4xl'>Get Maximum Conversions from your webinars!</h2>
                <OnBoardingUser />
            </div>
        </div>
    </div>
  )
}

export default HomePage