import React from 'react';
import Link from 'next/link';
import { PlusIcon } from '@/public/assets/dashboard/navBarIcon';

const CreateCard = () => {
  return (
    <section className="w-full  transition duration-500 hover:scale-105 lg:w-3/12">
      <div className="p-2">
        <div className="rounded-[0.625rem]" style={{ backgroundColor: '#EBECEE' }}>
          <div className="p-4 py-8">
            <Link href="transaction/create" passHref>
              <a>
                <div className="flex justify-center pt-4 ">
                  <PlusIcon />
                </div>
                <div className="px-4 py-2">
                  <p className="font-Inter font-medium text-base text-center leading-7 cursor-pointer text-secondary-500">
                    Create Transaction
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCard;
