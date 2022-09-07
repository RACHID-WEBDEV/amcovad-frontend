import React from 'react';
import { DatePicker, Input } from '@/components/index';
import { Pluscon, SearchIcon } from '@/public/assets/dashboard/navBarIcon';

const StepTwo = () => {
  return (
    <>
      <div className="p-2 my-2">
        <h6 className="font-semibold font-Inter leading-6 tracking-wider text-secondary-700 text-sm">
          Terms and Conditions
        </h6>
        <p className="text-sm text-secondary-600 font-normal ">
          Fill all your profile shop now and enjoy all feature to improve product selling
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center gap-4 justify-center ">
        <div className=" w-full lg:w-1/3">
          <Input
            placeholder="Enter your condition"
            name="condition"
            type="text"
            className="mt-4 bg-secondary-50 text-secondary-700 placeholder:text-secondary-700 font-Poppins focus:border-primary-500"
          />
        </div>
        <div className=" w-full lg:w-1/3">
          <Input
            Icon={<SearchIcon />}
            placeholder="Search..."
            name="search"
            type="text"
            className="mt-4 bg-secondary-50 text-secondary-700 placeholder:text-secondary-500 font-Poppins focus:border-primary-500"
          />
        </div>
        <div className="w-full lg:w-1/3">
          <div className="flex items-center gap-4">
            <div className="  flex-1">
              <DatePicker name="fulfillDate" placeholder="Fulfill By" />
            </div>
            <div className="max-w-[40px] cursor-pointer bg-secondary-200 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
              <Pluscon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
