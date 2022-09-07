import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Image from 'next/image';
import Link from 'next/link';
import TransactionImage from '@/public/assets/dashboard/transactionImage.svg';
import { Button } from '@/components/index';

function Transaction() {
  return (
    <>
      <DashboardLayout title="Transaction">
        <section className="px-4 pt-28 mx-auto max-w-7xl">
          <div className="w-full mx-auto lg:w-2/3">
            <div className="flex justify-center items-center">
              <div>
                <div className=" pl-12 lg:pl-16 object-center">
                  <Image src={TransactionImage} alt="Transaction page image" />
                </div>
                <p className="text-secondary-500 my-4 font-bold text-xl lg:text-2xl">No Transaction created yet!</p>
                <Link passHref href="/dashboard/transaction/create">
                  <a>
                    <Button className="w-full font-semibold text-white py-2.5 px-5">Start Now</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}

export default Transaction;
