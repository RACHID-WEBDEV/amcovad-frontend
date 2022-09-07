import React from 'react';
import UserRatingCard from '@/components/dashboard/Transaction/UserRatingCard';
import userRating from '@/data/dashboard/transaction/userRating';
import { Input } from '@/components/index';
import Select from '@/components/form/Select';

const StepOne = () => {
  const selectSampleData = [
    { title: 'Privacy Policy', value: 'Policy' },
    { title: ' Sign amcovad', value: 'Signamcovad' },
    { title: ' Sign in Today', value: 'SigninToday' }
  ];

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center gap-4 justify-center mt-16">
        <div className=" w-full lg:w-3/5">
          <Input placeholder="Your transaction name goes here..." name="newTransaction" type="text" className="mt-4" />
        </div>
        <div className="w-full lg:w-2/5 ">
          <Select defaultOption="Select Transaction party" name="select" options={selectSampleData} />
        </div>
      </div>

      <div className="w-full flex flex-col py-5 lg:flex-row gap-5 ">
        {userRating.map(({ name, rating, status, UserImage }, index) => (
          <UserRatingCard key={index} name={name} rating={rating} status={status} UserImage={UserImage} />
        ))}
      </div>
    </>
  );
};
export default StepOne;
